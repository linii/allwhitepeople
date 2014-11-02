console.log("running selectbutton.js")

document.getElementById('selectopt').addEventListener('click', function () {
    var bg = chrome.extension.getBackgroundPage();

    if(document.getElementById('race').checked){
   		bg.raceCheck = true;
    }
    else{
    	bg.raceCheck = false;
    }
    if(document.getElementById('gender').checked){
    	bg.genderCheck = true;
    }
    else{
    	bg.genderCheck = false;
    }
    if(document.getElementById('sexuality').checked){
    	bg.sexCheck = true;
    }
    else{
    	bg.sexCheck = false;
    }

	console.log(bg.raceCheck, bg.genderCheck, bg.sexCheck);
    window.opener.location.reload();
});