var racewords = {
    "African-American": "American",
    "black": "",
    "Black": "",
    "Hispanic-American": "American",
    "Hispanic": "",
    "Latino": "",
    "Asian-American": "American",
    "Asian": ""
};

var sexualitywords = {
    "Gay": "Straight",
    "gay": "straight",
    "Queer": "",
    "queer": "",
    "Bisexual": "",
    "bisexual": "",
    "Lesbian": "",
    "lesbian": ""
};

function replaceWord(word) {
    for (var target in racewords) {
        if (word == target) {
            console.log("encountered replaceable word ".concat(target));
            console.log("replacing it with ".concat(racewords[target]));
            return racewords[target];
        }
    }
    return word;
}

function racebend(text) {
    console.log("running racebend")

    return text.replace(/\b([A-Za-z']+)\b/g, replaceWord)
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

console.log("NOW RUNNING!")

bendall(document.body)
document.body.addEventListener('DOMNodeInserted', function(event) {
    bendall(event.target);
});

console.log("RUN COMPLETED")
