var storage=window.localStorage,
	fReader = new FileReader(),
	uploadBtn=document.getElementById('upload'),
	imageShow=document.getElementById('showUpload'),
	row=document.getElementById('row'),
	col=document.getElementById('col'),
	board=document.getElementById('board');

uploadBtn.addEventListener('change',uploadImg);	

fReader.onload=function(){
	storage.setItem('img',fReader.result);
	init();
}

function uploadImg(e){
	fReader.readAsDataURL(this.files[0]);
}

function createGrid(rows,cols,whiteBorder,imgWidth,imgHeight) {
	board.innerHTML='';
	var imgSrc=storage.getItem('img');
	for(var i=0;i<rows;i++){
		var tmpRow=document.createElement('div');
		tmpRow.className='row';
		tmpRow.style.width=imgWidth+cols*whiteBorder+'px';
		for(var j=0;j<cols;j++){
			var tmpCol=document.createElement('div');
			tmpCol.className='col';
			tmpCol.style.margin=Math.ceil(whiteBorder/2)+'px';
			tmpCol.style.width=imgWidth/cols+'px';
			tmpCol.style.height=imgHeight/rows+'px';
			tmpCol.style.backgroundImage='url('+imgSrc+')';
			tmpCol.style.backgroundRepeat='no-repeat';
			tmpCol.style.backgroundPosition=j*(imgWidth/cols)+'px '+i*(imgHeight/rows)+'px';
			tmpRow.append(tmpCol);
		}
		board.append(tmpRow);
	}
}

function init(){
	imageShow.src=storage.getItem('img');
	var rows=row.value,
		cols=col.value,
		imgWidth=imageShow.width,
		imgHeight=imageShow.height,
		whiteBorder=Math.floor(imgWidth/30);
	createGrid(rows,cols,whiteBorder,imgWidth,imgHeight);	
}