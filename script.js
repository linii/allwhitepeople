var racewords = {
    "black": "",
    "Black": "",
    "blacks": "",
    "Blacks": "",
    "Hispanics": "",
    "Hispanic": "",
    "Latinos": "",
    "Latino": "",
    "Asian": "",
};

var genderwords = {
};

var sexualitywords = {
    "same-sex":"",
    "Same-sex":"",
    "gay":"",
    "Gay":"",
    "Lesbian":""
};

var raceCheck
var genderCheck
var sexCheck

function replaceWord(word) {
    var swap = false;
    if(raceCheck){
        for (var target in racewords) {
            if (word == target) {
                console.log("encountered replaceable word ".concat(target));
                console.log("replacing it with ".concat(racewords[target]));
                swap = true;
                return racewords[target];
            }
        }
        //return word;
    }
    if (!swap && genderCheck){
        for (var target in genderwords) {
            if (word == target) {
                console.log("encountered replaceable word ".concat(target));
                console.log("replacing it with ".concat(genderwords[target]));
                swap = true;
                return genderwords[target];
            }
        }
        //return word;
    }
    if (!swap && sexCheck){
        for (var target in sexualitywords) {
            if (word == target) {
                console.log("encountered replaceable word ".concat(target));
                console.log("replacing it with ".concat(sexualitywords[target]));
                swap = true;
                return sexualitywords[target];
            }
        }
        //return word;
    }
    return word;
}

function racebend(text) {
    console.log("running racebend")
    return text.replace(/\b([A-Za-z'-]+)\b/g, replaceWord)
}

function bendall(node) {
    var treeWalker = document.createTreeWalker (
        node,
        NodeFilter.SHOW_TEXT,
        null,
        false
    )
    while (treeWalker.nextNode()) {
        var current = treeWalker.currentNode;
        current.textContent = racebend(current.textContent);
    }
}

function initialize(){
  
    chrome.runtime.sendMessage({type:"race"}, function(msg){
        console.log(msg.response)
        if(msg.response === "r"){
            raceCheck = true;               
        }
        else
            raceCheck = false;
    });
    chrome.runtime.sendMessage({type:"gender"}, function(msg){
        console.log(msg.response)
        if(msg.response === "g"){
            genderCheck = true;               
        }
        else
            genderCheck = false;
    });
    chrome.runtime.sendMessage({type:"sexuality"}, function(msg){
        console.log(msg.response)
        if(msg.response === "s"){
            sexCheck = true;               
        }
        else
            sexCheck = false;
    });

    var millisecondsToWait = 500;


    return;
}

initialize();

var millisecondsToWait = 500;
setTimeout(function() {
    console.log("NOW RUNNING!")
    bendall(document.body)
    document.body.addEventListener('DOMNodeInserted', function(event) {
    bendall(event.target);
});

console.log("RUN COMPLETED")
}, millisecondsToWait);


