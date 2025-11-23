var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	
	// Initialize video element
	video = document.getElementById("player1");

	// Turn off autoplay and looping
	video.autoplay = false;
	video.loop = false;

	// Page load
	video.load();

	// Play button
	document.querySelector("#play").addEventListener("click", function () {
		console.log("Play");
		video.play();
		document.getElementById("volume").textContent = Math.round(video.volume * 100) + "%";
	});

	// Pause button
	document.querySelector("#pause").addEventListener("click", function () {
		console.log("Pause");
		video.pause();
	});

	// Slow down
	document.querySelector("#slower").addEventListener("click", function () {
		video.playbackRate *= 0.9; 		// Reduce speed by 10%
		console.log("New speed: " + video.playbackRate.toFixed(5));
	});

	// Speed up
	document.querySelector("#faster").addEventListener("click", function () {
		video.playbackRate /= 0.9; // Increase by the same proportional amount
		console.log("New speed: " + video.playbackRate.toFixed(5));
	});

	// Skip ahead
	document.querySelector("#skip").addEventListener("click", function () {
		console.log("Original location:", video.currentTime);
		video.currentTime += 10;
		//  If the video length has been exceeded go back to the start of the video
		if (video.currentTime >= video.duration) {
			video.currentTime = 0;
			console.log("Going back to start");
		}
		console.log("New location:", video.currentTime);
	});

	// Mute/unmute and update text
	document.querySelector("#mute").addEventListener("click", function () {
		if (video.muted) {
			video.muted = false;
			this.textContent = "Mute";
		} else {
			video.muted = true;
			this.textContent = "Unmute";
		}
	});

	// Volume slider
	document.querySelector("#slider").addEventListener("input", function () {
		video.volume = this.value / 100;
		document.getElementById("volume").textContent = Math.round(video.volume * 100) + "%";
	});

	// styled
	document.querySelector("#vintage").addEventListener("click", function () {
		video.classList.add("oldSchool");
	});

	// original
	document.querySelector("#orig").addEventListener("click", function () {
		video.classList.remove("oldSchool");
	});

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

