// word list
var words = []

// listen for reload word list message
// listen for get word list message
chrome.runtime.onMessage.addListener(function(message, sender, respond) {
    if (message.name == "reloadList")
        reloadList()
    else if (message.name == "getList") {
        console.log("requested words; responded w/ list of:")
        console.log(words.length)
        console.log(words)
        respond(words)
    }
})

// get new replacement pair for target/result
function rule(target, result) {
    return {
        target: target,
        result: result
    }
}

// load word list from local storage
function reloadList() {
    words = JSON.parse(localStorage.getItem('wordlist'))
    console.log("local storage has: ")
    for (var i in words)
        console.log(words[i])
    if (words == [] || words == null) {
        console.log("local storage empty; replacing with default")
        words = [
            rule("Black", "White"),
            rule("White", "Black"),
            rule("black", "white"),
            rule("white", "black"),
            rule("African", "Caucasian"),
            rule("Caucasian", "African"),
            rule("Afro", "Caucaso"),
            rule("Caucaso", "Afro")
        ];
        localStorage.setItem('wordlist', JSON.stringify(words))
    }
}

chrome.runtime.onInstalled.addListener(function(dat) {
    localStorage.setItem('wordlist', null)
})

// also load word list on startup
localStorage.setItem('wordlist', null)
reloadList()