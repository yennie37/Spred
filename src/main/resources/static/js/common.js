function activeSpred(){
    setBodyHeight();
}
// ==================vh 단위 대응==================
function setBodyHeight(){
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
}
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
});
// ==================개별함수==================
function modeChange(teamName){
    if(teamName === 'none'){
        document.body.className = '';
    }
    else{
        document.body.className = teamName;
    }
}

window.addEventListener('load', activeSpred);