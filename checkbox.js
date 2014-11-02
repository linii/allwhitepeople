var bg = chrome.extension.getBackgroundPage();
if(bg.raceCheck)
	document.getElementById('race').checked = true;
if(bg.genderCheck)
	document.getElementById('gender').checked = true;
if(bg.sexCheck)
	document.getElementById('sexuality').checked = true;
console.log("WITHIN CHECKBOX", bg.raceCheck, bg.genderCheck, bg.sexCheck)