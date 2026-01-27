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
    // 페이지 - 푸터높이
    let footer = document.querySelector('.footer');
    if(footer){
        let height = footer.offsetHeight;

        document.documentElement.style.setProperty('--layout-btm-height', height + 'px');
    }
    // 페이지 - 헤더높이
    let header = document.querySelector('.container > .content > .header');
    if(header){
        let height = header.offsetHeight;

        document.documentElement.style.setProperty('--layout-header-height', height + 'px');
    }
    // 모달 - 푸터높이
    let mdHeader = document.querySelector('.modal-header');
    if(mdHeader){
        let height = mdHeader.offsetHeight;

        document.documentElement.style.setProperty('--modal-header', height + 'px');
    }
    // 모달 - 헤더높이
    let mdFooter = document.querySelector('.modal-footer');
    if(mdFooter){
        let height = mdFooter.offsetHeight;

        document.documentElement.style.setProperty('--modal-footer', height + 'px');
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

// ===========스크롤 요소 감지 스크립트 : 퍼블용 / 개발X
// document.addEventListener('scroll', function(event) {
//     const target = event.target;
//
//     // document 자체가 스크롤 되는 경우 (페이지 전체 스크롤)
//     if (target === document) {
//         console.log('🌐 페이지 전체(Document/Window)가 스크롤 중입니다.');
//     }
//     // 특정 요소(div, section 등)가 스크롤 되는 경우
//     else {
//         console.log('📦 특정 요소가 스크롤 중입니다:', target);
//         console.log(`   👉 태그: <${target.tagName}>, ID: #${target.id}, 클래스: .${target.className}`);
//     }
// }, true);