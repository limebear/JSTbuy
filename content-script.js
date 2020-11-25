chrome.storage.onChanged.addListener((changes) => {
    if (changes) {
        chrome.storage.sync.get('extentionStatus', storage => {
            removeSellTab(storage.extentionStatus)
        })
    }
})

const removeSellTab = (state) => {
    chrome.runtime.sendMessage({ state: state })

    const sellTab = document.querySelector('.top > .tabB__sell')
    const instantTab = document.querySelector('.top > .tabB__instantOrder')

    state ? sellTab.style.display = '' : sellTab.style.display = 'none'
    state ? instantTab.style.display = '' : instantTab.style.display = 'none'
}


function init() {
    chrome.storage.sync.get('extentionStatus', storage => {
        removeSellTab(storage.extentionStatus)
    })
}

init();