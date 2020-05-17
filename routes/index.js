const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const axios = require("axios");


router.use("/api", apiRoutes);

router.use("/search", function (req, res){

  console.log(req.body.query)

  let query = req.body.query

  axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&maxResults=5" + "&key=" + process.env.API_KEY)
  
  .then(function (response){
  
      for (i = 0; i <= 4; i++) {
          console.log(response.data.items[i].volumeInfo)
      }
  })
  
  .catch (function (error){
      console.log(error);
  });
})


// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

