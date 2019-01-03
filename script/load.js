
function runPageScripts(script){
    var oldNode = document.getElementById('content_script');

    if(oldNode){
        document.body.removeChild(oldNode);
    }

    var scriptNode = document.createElement("script");
    scriptNode.id = 'content_script';
    scriptNode.text = script;
    document.body.appendChild(scriptNode);
};

runPageScripts('var preciousValue = window.preciousValue; window.postMessage(preciousValue)')

window.addEventListener('message', function (data) {
    try {
        if (data && data.data) {
            var store = JSON.stringify(data.data)
            chrome.runtime.sendMessage(store);
        }
    } catch (e) {
        chrome.runtime.sendMessage(null);
    }
})