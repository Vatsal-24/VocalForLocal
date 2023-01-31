import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "./Card";

export default function BasicTable() {
  const data = [
    {
      title: "Dals and pulses",
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/50474c.jpg?q=100",
      url: "https://www.flipkart.com/grocery/staples/dals-pulses/pr?sid=73z,bpe,3uv&otracker=categorytree&marketplace=GROCERY&fm=neo%2Fmerchandising&iid=M_a56990e6-108e-4bd3-9d45-bcbc70fcb48b_2_SFAIKQL0A2D4_MC.O1V4G01H9SMV&otracker=clp_rich_navigation_1_2.navigationCard.RICH_NAVIGATION_Staples~Dals%2B%2526%2BPulses~All_grocery-supermart-store_O1V4G01H9SMV&otracker1=clp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=O1V4G01H9SMV",
    },
    {
      title: "Ghee  and oils",
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/50474c.jpg?q=100",
      url: "https://www.flipkart.com/grocery/staples/ghee-oils/pr?sid=73z,bpe,4wu&otracker=categorytree&marketplace=GROCERY&fm=neo%2Fmerchandising&iid=M_9eeb47b5-fca8-4c99-a409-b8a861aad8e0_2_SFAIKQL0A2D4_MC.QW9A7WPEBLP6&otracker=clp_rich_navigation_2_2.navigationCard.RICH_NAVIGATION_Staples~Ghee%2B%2526%2BOils_grocery-supermart-store_QW9A7WPEBLP6&otracker1=clp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L1_view-all&cid=QW9A7WPEBLP6",
    },
    {
      title: "Atta and flours",
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/50474c.jpg?q=100",
      url: "https://www.flipkart.com/grocery/staples/atta-flours/pr?sid=73z,bpe,9da&otracker=categorytree&marketplace=GROCERY&fm=neo%2Fmerchandising&iid=M_9d2df0da-2831-4687-b9c2-80aafb736507_2_SFAIKQL0A2D4_MC.ZWBFCX62G9LP&otracker=dynamic_rich_navigation_3_2.navigationCard.RICH_NAVIGATION_Staples~Atta%2B%2526%2BFlours_ZWBFCX62G9LP&otracker1=dynamic_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L1_view-all&cid=ZWBFCX62G9LP",
    },
  ];

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={4}>
        <Card data={data[0]} />
        ada
      </Grid>
      <Grid item xs={4}>
        <Card data={data[1]} />
        afa
      </Grid>
      <Grid item xs={4}>
        <Card data={data[2]} />
      </Grid>
    </Grid>
  );
}
