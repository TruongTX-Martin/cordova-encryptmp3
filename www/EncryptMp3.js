// var exec = require('cordova/exec');

// exports.coolMethod = function(arg0, success, error) {
//     exec(success, error, "EncryptMp3", "coolMethod", [arg0]);
// };

var ksencypt = {
	encypt : function(file, action, callback) {
		var success = function(result) {
			callback(result);
		};
		var fail = function(error) {
			callback(error);
			alert("Not Ok:" + error);
		}

		cordova.exec(success, // success callback function
		fail, // error callback function
		'EncryptMp3', // mapped to our native Java class called "Calendar"
		action, // with this action name
		[ file ]);
	}
}
module.exports = ksencypt;