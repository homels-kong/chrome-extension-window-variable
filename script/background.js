
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    var stroeValue = message || {}
    var vueDetected = false

    if (message && typeof message === 'string') {
        try {
            var obj = JSON.parse(message);
            if (!obj.vueDetected) {
                stroeValue = message;
            } else if (obj.vueDetected == true) {
                stroeValue = false
                vueDetected = true
            } else {
                stroeValue = null 
            }
        } catch (e) {
            stroeValue = null
        }
    }
    if (stroeValue != false && !vueDetected) {
        window.localStorage.setItem('message', stroeValue)
    }
});