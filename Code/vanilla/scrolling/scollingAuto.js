var fps = 100;
var speedFactor = 0.001;
var minDelta = 0.5;
var autoScrollSpeed = 10;
var autoScrollTimer, restartTimer;
var isScrolling = false;
var prevPos = 0, currentPos = 0;
var currentTime, prevTime, timeDiff;

window.addEventListener("scroll", function (e) {
    // window.pageYOffset is the fallback value for IE
    currentPos = window.scrollY || window.pageYOffset;
});

window.addEventListener("wheel", function (e) {
    // window.pageYOffset is the fallback value for IE
    currentPos = window.scrollY || window.pageYOffset;
    clearInterval(autoScrollTimer);
    if (restartTimer) {
        clearTimeout(restartTimer);
    }
    restartTimer = setTimeout(() => {
        prevTime = null;
        setAutoScroll();
    }, 50);
});

function setAutoScroll(newValue) {
    autoScrollSpeed = newValue ? (speedFactor * newValue) : autoScrollSpeed;
    if (autoScrollTimer) {
        clearInterval(autoScrollTimer);
    }
    autoScrollTimer = setInterval(function(){
        currentTime = Date.now();
        if (prevTime) {
            if (!isScrolling) {
                timeDiff = currentTime - prevTime;
                currentPos += autoScrollSpeed * timeDiff;
                if (Math.abs(currentPos - prevPos) >= minDelta) {
                    isScrolling = true;
                    window.scrollTo(0, currentPos);
                    isScrolling = false;
                    prevPos = currentPos;
                    prevTime = currentTime;
                }
            }
        } else {
            prevTime = currentTime;
        }
    }, 1000 / fps);
}

setAutoScroll(20);
