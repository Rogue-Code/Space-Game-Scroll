window.addEventListener('scroll', () => {
	const scrollValue = window.scrollY;
	document.getElementById("scrollText").innerHTML = scrollValue;
});