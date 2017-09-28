//video play
var play = document.querySelector(".play");
var vid = document.getElementById("promo-review");
//slider-promo
var slider = document.querySelectorAll(".slider-promo .slider");
var leads = document.querySelectorAll(".lead");
//slider-mobile
var mslide=document.querySelectorAll(".mobile-slider .slider");
var image=document.querySelector(".image-container");
//scroll promo between two leads
for(var i=0;i<slider.length; i++)
{
	slider[i].addEventListener("click", function(evt)
	{
		evt.preventDefault();
		for(var j = 0; j<leads.length; j++)
		{
			leads[j].classList.toggle("visually-hidden");
		}
	});
}

//play event (play svg hides when video plays and shows in the other case)
if(play.addEventListener){
	play.addEventListener("click", play, false)
}
else if(play.attachEvent){
	play.attachEvent("onclick", play);
}

//hides or shows play button when video plays or pauses
function play() {
    if (vid.paused){
        vid.play();
        play.classList.add("visually-hidden");
    }else {
        vid.pause();
        play.classList.remove("visually-hidden");
    }
}

//mobile-slider
for(var i=0;i<mslide.length;i++){
	mslide[i].addEventListener("click", function(evt, i){
		console.log(i);
		var curslide=mslide[i];
		console.log(curslide);
		evt.preventDefault();
		/*if(!mslide.classList.contains("right")){
			console.log("left");
		}
		else{
			console.log("right");
		}*/
	});
}


/*var btn = document.querySelector("button");
var imgs = document.querySelectorAll(".card__heading-img img");
btn.addEventListener("click", function()
{

	for(var i = 0; i < imgs.length; i++)
  {
  	if (imgs[i].classList.contains("active"))
    {
    	imgs[i].classList.remove("active");
      if (i < imgs.length - 1)
      {
      	imgs[i + 1].classList.add("active");
      }
      else
      {
      	imgs[0].classList.add("active");
      }
      break;
    }
  }
});*/
