var downloadStatus  = "0";

function setDownloadStatus(status){
	downloadStatus = status;
}
cordova.define("cordova.plugin.encryptmp3.EncryptMp3", function(require, exports, module) {

var exec = cordova.require('cordova/exec');

var ksencypt = {
	encypt : function(file, action, callback) {
		var success = function(result) {
			callback(result);
		};
		
		var fail = function(error) {
			callback(error);
		}
		alert("DownloadStatus:":+downloadStatus);

		exec(
		  success, // success callback function
		  fail, // error callback function
		  'EncryptMp3', // mapped to our native Java class called "Calendar"
		  action, // with this action name
		  [ file,downloadStatus ]);
	}
}

module.exports = ksencypt;

});
