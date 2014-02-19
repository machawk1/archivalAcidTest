document.addEventListener('DOMContentLoaded',function(){
	var localScriptImage = new Image();
	localScriptImage.src = "pixel.png";
	var scriptParent = document.getElementById('scriptParent');
	scriptParent.replaceChild(localScriptImage,document.getElementById('localScript'));
});
