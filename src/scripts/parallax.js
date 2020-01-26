const parallaxTrain = document.querySelector(".bg-train__parallax");
const parallaxTrainLayers = parallaxTrain.children;

const parallaxAutumn = document.querySelector(".bg-autumn__paralax");
const parallaxAutumnLayers = parallaxAutumn.children;

window.addEventListener("scroll", e => {
	const wScroll = window.pageYOffset;
	const debounceFun = debounce(parallaxScrollEffect, 50);
	debounceFun(wScroll, parallaxTrainLayers, 14);
});

window.addEventListener("mousemove", e => {
  const wScroll = e.clientX;
	const hScroll = e.clientY;
	const debounceFun = debounce(parallaxMousemoveEffect, 50);
  debounceFun(wScroll, hScroll, parallaxAutumnLayers, 50);
});

function parallaxMousemoveEffect(scrollX, scrollY, layers, speed) {
  Array.from(layers).forEach(layer => {
    const speedCoefficient = layer.dataset.speed;
    const strafeX = (scrollX * speedCoefficient) / speed;
    const strafeY = (scrollY * speedCoefficient) / speed;
    layer.style.transform = `translate(-${strafeX}%, -${strafeY}%)`;
  });
}

function parallaxScrollEffect(scroll, layers, speed) {
	Array.from(layers).forEach(layer => {
		const speedCoefficient = layer.dataset.speed;
		const strafe = (scroll * speedCoefficient) / speed;
		layer.style.transform = `translateY(-${strafe}%)`;
	});
}


function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};