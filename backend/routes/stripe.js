const router = require("express").Router();
const KEY = process.env.STRIPE_KEY;
const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
  //Creating stripe payment
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (!stripeErr) {
        res.status(200).json(stripeRes);
      } else {
        res.status(500).json(stripeErr);
      }
    }
  );
});

module.exports = router;
