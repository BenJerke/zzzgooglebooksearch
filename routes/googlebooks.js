const router = require("express").Router();
var axios = require ("axios");
require('dotenv').config()

router.route("/search/") 

let query =  //gotta get stuff from the front end first... how to do this...

axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&maxResults=5" + "&key=" + process.env.API_KEY,)

.then(function (response){
    
    for (i = 0; i <= 4; i++) {
        console.log(response.data.items[i].volumeInfo)
    }
})

.catch (function (error){
    console.log(error);
});

};

module.exports = router;

