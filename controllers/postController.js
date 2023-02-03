const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const axios = require("axios");
const fs = require("fs");
const cheerio = require("cheerio");

exports.postDalAndPulses = async (req, res) => {
  const modifyString = (data) => {
    return Number(data.substr(1));
  };
  try {
    let { url } = req.body;
    axios.get(url).then((response) => {
      const $ = cheerio.load(response.data);
      // Title
      const title = $("._10Ermr").text();
      // Products
      let productsTemp = [];
      $("._1MbXnE").each((i, el) => {
        const item = $(el).text();
        productsTemp.push(item);
      });
      let products = [];
      for (let i = 0; i < productsTemp.length; i += 2) {
        products.push(productsTemp[i] + " " + productsTemp[i + 1]);
      }
      //getting image
      let images = [];
      $("._396cs4").each((i, el) => {
        const item = el.attribs.src;
        images.push(item);
      });

      // mrp and price
      let price = [];
      let mrp = [];
      $("._3I9_wc").each((i, el) => {
        const item = $(el).text();
        mrp.push(item);
      });
      $("._30jeq3").each((i, el) => {
        const item = $(el).text();
        price.push(item);
      });
      let len = products.length;
      let final = [];
      for (let i = 0; i < len; i++) {
        if (
          (modifyString(mrp[i]) - modifyString(price[i])) /
            modifyString(mrp[i]) >=
          0.5
        ) {
          final.push({
            name: products[i],
            mrp: mrp[i],
            price: price[i],
            image: images[i],
          });
        }
      }
      console.log("Scrapping done...");
      res.attachment("dalAndPulses.csv");
      res.status(200).json({
        status: "success",
        data: final,
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "fail",
      error: error,
    });
  }
};
