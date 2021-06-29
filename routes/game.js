var express = require('express');
var router = express.Router();

var remoteServer = require('../helpers/remote_server');

/* GET home page. */
router.get('/new', function(req, res, next) {
	var result = remoteServer.get("api/new-game");
	res.render('game/new', result);
});

router.post('/new', function(req, res, next) {
	var result = remoteServer.post("api/set-spells", {
		"MySpells": req.body.MySpells
	});
	res.json({"status": "ok"});
});


router.get('/level', function(req, res, next) {
	var result = remoteServer.get("api/level");
	res.render('game/level', result);
});

router.post('/level', function(req, res, next) {
	var result = remoteServer.post("api/level", {
		"OptionId": req.body.OptionId,
		"Bag": req.body.Bag
	});

	res.json({"status": "ok"});
});

module.exports = router;
