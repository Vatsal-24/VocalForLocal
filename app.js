const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const writeStream = fs.createWriteStream("post.csv");
writeStream.write("Product-Name, MRP, Price, Image \n");
const app = express();

axios
  .get(
    "https://www.flipkart.com/grocery/staples/dals-pulses/pr?sid=73z,bpe,3uv&otracker=categorytree&marketplace=GROCERY&fm=neo%2Fmerchandising&iid=M_a56990e6-108e-4bd3-9d45-bcbc70fcb48b_2_SFAIKQL0A2D4_MC.O1V4G01H9SMV&otracker=clp_rich_navigation_1_2.navigationCard.RICH_NAVIGATION_Staples~Dals%2B%2526%2BPulses~All_grocery-supermart-store_O1V4G01H9SMV&otracker1=clp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=O1V4G01H9SMV&page=1"
  )
  .then((response) => {
    const $ = cheerio.load(response.data);
    // Title
    const title = $("._10Ermr").text();
    console.log(title);

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

    // Products
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
      final.push({
        name: products[i],
        mrp: mrp[i],
        price: price[i],
        image: images[i],
      });
    }

    // write to CSV
    final.map((ele) => {
      writeStream.write(
        `${ele.name}, ${ele.mrp}, ${ele.price}, ${ele.image}\n`
      );
    });
    console.log("Scrapping done...");
  })
  .catch((err) => console.log(err));
