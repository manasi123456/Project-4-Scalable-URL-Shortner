// const express = require('express');
// const router = express.Router();
// const urlController = require("../Controllers/urlController")


// router.post("/url/shorten", urlController.shortUrl)
// router.get("/:urlCode", urlController.getShortUrl)

// module.exports = router;

const express = require('express');
const router = express.Router();
const urlController = require("../Controllers/urlController")


router.post("/url/shorten", urlController.shortenUrl)
router.get("/:urlCode", urlController.redirectUrl)

module.exports = router;