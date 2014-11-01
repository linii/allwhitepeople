var words = {
    "Black": "White",
    "White": "Black",
    "black": "white",
    "white": "black",
    "African-American": "Caucasian-American",
    "Caucasian-American": "African-American",
};

var concatString = function(obj) {
    var bits = [];
    for (word in obj) {
        bits.push(word);
    }
    return bits.join('|');
}

var regex = '(' + concatString(words) + ')';
var searchKey = new RegExp(regex, 'i');

function match(word) {
    return words[word];
}

function racebend(text) {
    for (var target in words) {
        text.replace(new RegExp("\b".concat(target).concat("\b"), "gi"), words[target]);
    }

    return text
}

function bendall(nodes) {
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

bendall();