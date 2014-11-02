var words = {
    "Black": "White",
    "White": "Black",
    "black": "white",
    "white": "black",
    "African-American": "Caucasian-American",
    "Caucasian-American": "African-American",
};

function replaceWord(word) {
    for (var target in words) {
        if (word == target) {
            console.log("encountered replaceable word ".concat(target));
            console.log("replacing it with ".concat(words[target]));
            return words[target];
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
