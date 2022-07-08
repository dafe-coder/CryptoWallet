console.log('1')
chrome.runtime.onStartup.addListener(function () {
	chrome.storage.local.clear()
})
