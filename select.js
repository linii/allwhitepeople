function submitOpt(){
	console.log("lollllllll")
	chrome.tabs.executeScript({
		console.log("submit pushed")
	});
}

document.getElementsById('selectopt').addEventListener('click', submitOpt);