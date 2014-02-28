document.addEventListener('DOMContentLoaded',function(){
	var externalScriptImage = new Image();
	externalScriptImage.src = "pixel.png";
	var scriptParent2 = document.getElementById('scriptParent');
	scriptParent2.replaceChild(externalScriptImage,document.getElementById('externalScript'));
});
