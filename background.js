chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url){
    chrome.storage.sync.get('reload', storage => {
      chrome.storage.sync.set({
        reload: !storage.reload
      })
    })
  }
})

chrome.browserAction.onClicked.addListener(() => {
  chrome.storage.sync.get('extentionStatus', storage => {
    chrome.storage.sync.set({
      extentionStatus: !storage.extentionStatus
    })
  })
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  setIcon(request.state, sender.tab.id)
})

function setIcon(state, tabId) {
  const path = state ? "icons/icon128_off.png" : "icons/icon128_on.png"
  chrome.browserAction.setIcon({
    path,
    tabId
  })
}