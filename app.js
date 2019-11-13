// index.js

const path = require("path");
const express = require("express");
const edge = require("edge.js");
const bodyParser = require('body-parser');
const cors = require('cors'); 
const { config, engine } = require('express-edge');
const pageController = require('./controllers/pages-controller');
const mediaController = require('./controllers/media-controller');

const app = express();
const port = process.env.PORT || "8000";

// Automatically sets view engine and adds dot notation to app.render
app.use(engine);
app.set('views', `${__dirname}/views`);
 

app.use(express.static('public'));
// middleware
app.use(bodyParser.urlencoded(({extended: false})));
app.use(bodyParser.json()); 
app.use(cors());


  //  router contollers
app.get("/", pageController.index );
app.get("/contact", pageController.contact);
app.get("/about-us", pageController.about);
app.get("/resources", pageController.resource);
app.get("/give", pageController.give); 
app.get("/our-beliefs", pageController.our_beliefs);
app.get("/watch-us-live", mediaController.watchUsLive);
app.get("/submit-Prayer-Request", pageController.prayer);
app.get("/Study-Notes", pageController.StudyNotes);
app.get("/our-pastor", pageController.ourPastor);
app.get("/history", pageController.history);
app.get("/leadership-team", pageController.leadership); 
app.get("/our-ministries", pageController.ourMinistries); 
app.get("/bible-study", pageController.bibleStudy); 


app.listen(port, () => {
  console.log(`Listening to requests on ${port}`);
});