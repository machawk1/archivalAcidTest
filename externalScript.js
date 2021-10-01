document.addEventListener('DOMContentLoaded',function(){
	var externalScriptImage = new Image();
	externalScriptImage.src = "pixel.png";
	externalScriptImage.title = "test2b";
	var scriptParent2 = document.getElementById('scriptParent');
	scriptParent2.replaceChild(externalScriptImage,document.getElementById('externalScript'));
});
