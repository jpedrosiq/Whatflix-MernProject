const express = require("express");
const router = express.Router();

const { Favorite } = require("../models/Favorite");


//based of reference code. NO ROUTE FOR FAVORITE NUMBER OR GETFAVOREDMOVIE. Can be added if we want that functionality


//Find Favorite Information inside Favorite Collection by Movie Id, userFrom. userFrom comes from favorite model. 
router.post("/favorited", (req, res) => {
  Favorite.find({
    movieId: req.body.movieId,
    userFrom: req.body.userFrom,
  }).exec((err, favorite) => {
    if (err) return res.status(400).send(err);

    let result = false;
    if (favorite.length !== 0) {
      result = true;
    }

    res.status(200).json({ success: true, favorited: result });
  });
});

router.post("/addToFavorite", (req, res) => {
  console.log(req.body);

  const favorite = new Favorite(req.body);

  favorite.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.post("/removeFromFavorite", (req, res) => {
  Favorite.findOneAndDelete({
    movieId: req.body.movieId,
    userFrom: req.body.userFrom,
  }).exec((err, doc) => {
    if (err) return res.status(400).json({ success: false, err });
    res.status(200).json({ success: true, doc });
  });
});


module.exports = router;
