function replaceWord(word) {
    for (var rn in words) {
        var rule = words[rn]
        if (word == rule.target) {
            console.log("encountered match ".concat(rule.target));
            console.log("replacing it with ".concat(rule.result));
            return rule.result;
        }
    }
    return word;
}

function replace(text) {
    console.log("running replacements")

    return text.replace(/\b([A-Za-z']+)\b/g, replaceWord)
}

function replaceall(node) {
    var treeWalker = document.createTreeWalker (
        node,
        NodeFilter.SHOW_TEXT,
        null,
        false
    )
    while (treeWalker.nextNode()) {
        var current = treeWalker.currentNode;
        current.textContent = replace(current.textContent);
    }
}

console.log("NOW REPLACING")

var words = []
chrome.runtime.sendMessage({name: "getList"}, function(list) {
    words = list
    console.log(words.length)
    for (var i in words) {
        console.log(words[i].target)
        console.log(words[i].result)
    }

    replaceall(document.body)
    document.body.addEventListener('DOMNodeInserted', function(event) {
        replaceall(event.target);
    });
})

console.log("REPLACEMENTS COMPLETE")
