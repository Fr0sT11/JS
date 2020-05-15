const progress=()=>{
    let progressBar=document.getElementById('progress');
    let progBarContainer=document.getElementById('progContainer');
    let pageContent=document.getElementById('pageContent')
    let width=1;
    let progressRate=setInterval(progressValue,20);
    function progressValue(){
        if(width>=100){
            clearInterval(progressRate);
            progBarContainer.remove();
            pageContent.style.display = "block";
        } else {
            width++;
            progressBar.style.width = width + '%';
        }
    }
}