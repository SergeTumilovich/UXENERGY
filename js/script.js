//video play
var overlay = document.getElementsByClassName('play');
var vid = document.getElementById('promo-review');

if(overlay.addEventListener){
		overlay.addEventListener("click", play, false)
	}else if(overlay.attachEvent){
		overlay.attachEvent("onclick", play)
	}

//hides or shows play button when video plays or pauses
function play() {
    if (vid.paused){
        vid.play();
        overlay.className = "o";
    }else {
        vid.pause();
        overlay.className = "";
    }
}
