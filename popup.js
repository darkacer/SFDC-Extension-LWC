document.getElementById('show-orgs').addEventListener('click', function () {
    window.open(chrome.runtime.getURL('dist/index.html'));
});
