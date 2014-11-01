var words = {
    Black: 'White';
    White: 'Black';
    African-American: 'Caucasian-American';
    Caucasian-American: 'African-American';
}

var concatString = function(obj) {
    var bits = [];
    for (word in obj) {
        bits.push(word);
    }
    return bits.join('|');
}

var regex = '(' + concatString(words) + ')'
var searchKey = new RegExp(regex, 'i');

function match(word) {
    return words[word];
}

function racebend(text) {
    return text
        .replace(/\b([a-z][\w']+)\b/gi, word.toLowerCase().replace(searchKey, match));)
}

function break(nodes) {
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