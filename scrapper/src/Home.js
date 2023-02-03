import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "./Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BasicTable() {
  const navigate = useNavigate();
  const data = [
    {
      id: "1",
      title: "Dals and pulses",
      image:
        "https://rukminim1.flixcart.com/www/100/100/promos/09/06/2017/38deea34-44ce-4650-a1fb-60f1c0172feb.png?q=90",
      url: "https://www.flipkart.com/grocery/staples/dals-pulses/pr?sid=73z,bpe,3uv&otracker=categorytree&marketplace=GROCERY&fm=neo%2Fmerchandising&iid=M_a56990e6-108e-4bd3-9d45-bcbc70fcb48b_2_SFAIKQL0A2D4_MC.O1V4G01H9SMV&otracker=clp_rich_navigation_1_2.navigationCard.RICH_NAVIGATION_Staples~Dals%2B%2526%2BPulses~All_grocery-supermart-store_O1V4G01H9SMV&otracker1=clp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=O1V4G01H9SMV",
    },
    {
      id: "2",
      title: "Ghee and oils",
      image:
        "https://rukminim1.flixcart.com/www/100/100/promos/05/07/2017/bfa60d5d-23d8-4a61-8586-560e8f822f50.png?q=90",
      url: "https://www.flipkart.com/grocery/staples/ghee-oils/pr?sid=73z,bpe,4wu&otracker=categorytree&marketplace=GROCERY&fm=neo%2Fmerchandising&iid=M_9eeb47b5-fca8-4c99-a409-b8a861aad8e0_2_SFAIKQL0A2D4_MC.QW9A7WPEBLP6&otracker=clp_rich_navigation_2_2.navigationCard.RICH_NAVIGATION_Staples~Ghee%2B%2526%2BOils_grocery-supermart-store_QW9A7WPEBLP6&otracker1=clp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L1_view-all&cid=QW9A7WPEBLP6",
    },
    {
      id: "3",
      title: "Atta and flours",
      image:
        "https://rukminim1.flixcart.com/www/100/100/promos/05/07/2017/cd819684-9369-468b-895c-ef9b57b6b059.png?q=90",
      url: "https://www.flipkart.com/grocery/staples/atta-flours/pr?sid=73z,bpe,9da&otracker=categorytree&marketplace=GROCERY&fm=neo%2Fmerchandising&iid=M_9d2df0da-2831-4687-b9c2-80aafb736507_2_SFAIKQL0A2D4_MC.ZWBFCX62G9LP&otracker=dynamic_rich_navigation_3_2.navigationCard.RICH_NAVIGATION_Staples~Atta%2B%2526%2BFlours_ZWBFCX62G9LP&otracker1=dynamic_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L1_view-all&cid=ZWBFCX62G9LP",
    },
    {
      id: "4",
      title: "Masalas and spices",
      image:
        "https://rukminim1.flixcart.com/www/100/100/promos/05/07/2017/95b4a703-0e86-4217-9d2e-8964c15e9812.png?q=90",
      url: "https://www.flipkart.com/grocery/staples/masalas-spices/pr?sid=73z,bpe,a6m&otracker=categorytree&marketplace=GROCERY&fm=neo%2Fmerchandising&iid=M_bf8fe508-8912-4d7f-95fe-c8f311fad1d9_2_SFAIKQL0A2D4_MC.QFQ3Q4E8ZB2I&otracker=clp_rich_navigation_4_2.navigationCard.RICH_NAVIGATION_Staples~Masalas%2B%2526%2BSpices_grocery-supermart-store_QFQ3Q4E8ZB2I&otracker1=clp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_4_L1_view-all&cid=QFQ3Q4E8ZB2I",
    },
    {
      id: "5",
      title: "Rice and Rice Products",
      image:
        "https://rukminim1.flixcart.com/www/100/100/promos/09/06/2017/728e9a37-6dbf-42c8-8a88-8d0cd31baaf2.png?q=90",
      url: "https://www.flipkart.com/grocery/staples/rice-rice-products/pr?sid=73z,bpe,zwp&otracker=categorytree&marketplace=GROCERY&fm=neo%2Fmerchandising&iid=M_5af36f34-c799-41d7-a1e8-7949fb34318a_2_SFAIKQL0A2D4_MC.GQEJYG9UMBCO&otracker=clp_rich_navigation_5_2.navigationCard.RICH_NAVIGATION_Staples~Rice%2B%2526%2BRice%2BProducts_grocery-supermart-store_GQEJYG9UMBCO&otracker1=clp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_5_L1_view-all&cid=GQEJYG9UMBCO",
    },
    {
      id: "6",
      title: "Dry Fruits, Nuts and seeds",
      image:
        "https://rukminim1.flixcart.com/www/100/100/promos/05/07/2017/272c0e46-a4e8-4b4b-bbaf-8d5c39aeca50.png?q=90",
      url: "https://www.flipkart.com/grocery/staples/dry-fruits-nuts-seeds/pr?sid=73z,bpe,dtp&otracker=categorytree&marketplace=GROCERY&fm=neo%2Fmerchandising&iid=M_18d77c9a-0fbd-4835-b473-1c8ddda25c27_2_SFAIKQL0A2D4_MC.X697907L5MB0&otracker=dynamic_rich_navigation_6_2.navigationCard.RICH_NAVIGATION_Staples~Dry%2BFruits%252C%2BNuts%2B%2526%2BSeeds_X697907L5MB0&otracker1=dynamic_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L1_view-all&cid=X697907L5MB0",
    },
    {
      id: "7",
      title: "Sugar, Jaggery and salt",
      image:
        "https://rukminim1.flixcart.com/www/100/100/promos/09/06/2017/3c16fdbc-a8a9-457d-9cbf-d684bb0be82d.png?q=90",
      url: "https://www.flipkart.com/grocery/staples/sugar-jaggery-salt/pr?sid=73z,bpe,fdl&otracker=categorytree&marketplace=GROCERY&fm=neo%2Fmerchandising&iid=M_578827d0-f584-49a0-bdfd-53c8aa34f5b9_2_SFAIKQL0A2D4_MC.XI6TQHBVLUGF&otracker=dynamic_rich_navigation_7_2.navigationCard.RICH_NAVIGATION_Staples~Sugar%252C%2BJaggery%2B%2526%2BSalt_XI6TQHBVLUGF&otracker1=dynamic_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L1_view-all&cid=XI6TQHBVLUGF",
    },
  ];

  const buttonPress = (id) => {
    let url = data[id].url;

    axios
      .post("http://localhost:5000/api/v1/post/dalsAndPulses", {
        url: url,
      })
      .then(function (response) {
        console.log(response);
        const jsonBody = response.data;
        navigate("/result", { state: { jsonBody } });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={5}>
      {data.map((row, i) => {
        return (
          <Grid item xs={3} onClick={() => buttonPress(i)}>
            <Card data={data[i]} />
          </Grid>
        );
      })}
    </Grid>
  );
}
