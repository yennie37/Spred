function activeSpred(){
    setBodyHeight();
    layoutResize();
    /****************테스트용 함수(반영X)****************/
}
// ==================css 변수 선언==================
function setBodyHeight(){ // vh 단위 대응
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
}
function layoutResize(){ // 페이지 하단 여백
    let footer = document.querySelector('.footer');

    if(footer){
        let height = footer.offsetHeight;

        document.documentElement.style.setProperty('--layout-btm-height', height + 'px');
    }

    let header = document.querySelector('.container > .content > .header');
    if(header){
        let height = header.offsetHeight;

        document.documentElement.style.setProperty('--layout-header-height', height + 'px');
    }
}
// ==================개별함수==================
function modeChange(teamName){
    if(teamName === 'none'){
        document.body.className = '';
    }
    else{
        document.body.className = teamName;
    }
}
function setRequiredDot(){

}
window.addEventListener('load', activeSpred);
window.addEventListener('resize', activeSpred);