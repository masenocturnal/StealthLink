var i = 0;

function timedCount() {
    i = i + 1;

    if (i == 10) {
        postMessage("stop")
    } else {
        postMessage(i);
    }
    

    setTimeout("timedCount()",500);
}

timedCount();