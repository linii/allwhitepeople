var raceCheck = false;
var genderCheck = false;
var sexCheck = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	console.log("message received")
	if(request.type == "race" && raceCheck)
		sendResponse({response: "r"})
	else if(request.type == "gender" && genderCheck)
		sendResponse({response: "g"})
	else if(request.type == "sexuality" && sexCheck)
		sendResponse({response: "s"})
	else
		sendResponse({response:"false"})
	console.log("end of this")
});
