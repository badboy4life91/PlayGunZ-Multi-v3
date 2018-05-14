(function() {
	function randomShape(array) {
		return array[Math.floor(Math.random() * array.length)];
	}

	function loadingScreen() {
		var cross = "cross.png";
		var circle = "circle.png";
		var triangle = "triangle.png";
		var square = "square.png";
		var elements = document.querySelectorAll(".ps-icon");
		Array.prototype.forEach.call(elements, function(el, i) {
			setTimeout(function() {
				el.style.animation = "scaling";
				el.style.animationDuration = "1s";
				el.style.animationIterationCount = "1";
				el.style.backgroundImage = "url";
			}, i * 400);
			el.style.animation = "";
			el.style.animationDuration = "";
			el.style.animationIterationCount = "";
		});

		function changeShape() {
			var elements = document.querySelectorAll(".ps-icon");
			Array.prototype.forEach.call(elements, function(el, i) {
				setTimeout(function() {
					el.style.animation = "scaling";
					el.style.animationDuration = "1s";
					el.style.animationIterationCount = "1";
					el.style.backgroundImage = "url";
				}, 100 + i * 300);
				el.style.animation = "";
				el.style.animationDuration = "";
				el.style.animationIterationCount = "";
			});
		}
		setInterval(changeShape, 3000);
	}
	loadingScreen();
})();