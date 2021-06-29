const request = require("sync-request");
const SERVER_NAME = 'http://localhost:1234/';

exports.get = function(path, data = {}) {
	var res = request("GET", SERVER_NAME + path, { qs: data });
	return JSON.parse(res.getBody());
}

exports.post = function(path, data = {}) {
	console.log(data);
	var res = request("POST", SERVER_NAME + path, { "headers": {}, "json": data });
	if (res["statusCode"] != 200 && res["statusCode"] != 201) {
		console.log("status is not good: " + res["statusCode"]);
	}
	return JSON.parse(res.getBody());
}
