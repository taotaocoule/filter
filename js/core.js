var storage=window.localStorage,
	fReader = new FileReader(),
	img = new Image(),
	imageName;

var uploadBtn=document.getElementById('upload'),
	imageShow=document.getElementById('showUpload');
uploadBtn.addEventListener('change',showImg);	

function showImg(e){
	fReader.readAsDataURL(this.files[0]);
}

fReader.onload=function(){
	storage.setItem('img',fReader.result);
	imageShow.src=storage.getItem('img');
}