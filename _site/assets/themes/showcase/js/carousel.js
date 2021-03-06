var twcMediaKit = (function() {
	var carousel_items = document.getElementsByClassName('carousel_item'),
		carouselVideo = document.getElementsByClassName('carousel_video')[0],
		videoButton = document.getElementsByClassName('videoButton')[0],
		currentlyVisible = 0,
		nextVisible = 0,
		runCarousel;

	var moveCarousel = function() {
		document.getElementsByClassName('visible')[0].classList.remove('visible');
		carousel_items[nextVisible].classList.add('visible');
		nextVisible++;
		if(nextVisible === carousel_items.length) {
			nextVisible = 0;
			return nextVisible;
		} else if((nextVisible - 1) < 0) {
			nextVisible = carousel_items.length - 1;
		}
		return nextVisible;
	};

	var startCarousel = function() {
		moveCarousel(nextVisible);
		runCarousel = setInterval(function() {
			moveCarousel(nextVisible);
		}, 5000);
	};

	var stopCarousel = function() {
		clearInterval(runCarousel);
	};

	var nextSlide = function(){
		stopCarousel();
		if(nextVisible >= carousel_items.length) {
			nextVisible = 0;
		}
		moveCarousel(nextVisible);
		return nextVisible;
	};

	var prevSlide = function() {
		stopCarousel();
		currentlyVisible -= 1;
		if(currentlyVisible <= -1) {
console.log('<0: ' + currentlyVisible);
			currentlyVisible = carousel_items.length - 1;
console.log('<0: ' + currentlyVisible);
		}
		moveCarousel(currentlyVisible);
		nextVisible = currentlyVisible;
		return nextVisible;
	};

	var playVideo = function() {
alert(videoButton);
		// if(carouselVideo && videoButton){
			videoButton.addEventListener('play', function() {
				stopCarousel();
				carouselVideo.controls = 'controls';
				this.style.display = 'none';
			});

			carouselVideo.addEventListener('ended', function() {
				moveCarousel(nextVisible);
				startCarousel();
				carouselVideo.load();
				videoButton.style.display = 'inline-block';
			});
		// }
	};

	if(carousel_items.length > 1) {
		startCarousel();
	}

	return {
		startCarousel: startCarousel,
		stopCarousel: stopCarousel,
		nextSlide: nextSlide,
		prevSlide: prevSlide,
		playVideo: playVideo
	};
}());