// https://gist.github.com/ricardozea/abb9f98a19f6d04a0269

var timeOut;

export default function scrollToTop () {
	if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0 ){
		window.scrollBy(0,-50);
		timeOut=setTimeout(scrollToTop, 10);
	}
	else clearTimeout(timeOut);
}