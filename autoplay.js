var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome) {
    $('#iframeAudio').remove()
}
else {
    $('#playAudio').remove()
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.getElementById('autoplay')?.click();
    }, 100);
});