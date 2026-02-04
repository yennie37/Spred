function activeSpred(){
    setBodyHeight();
    layoutResize();
    modalLayoutResize();
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
}
function modalLayoutResize(){
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
// ====================== 모달 ======================
let focusHandler = null;

function openModal(modalId){
    let modal = document.getElementById(modalId);

    modal.triggerElement = document.activeElement;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';

    // ========== 접근성 ==========
    let focusableEl = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');

    if(focusableEl.length > 0){
        let firstEl = focusableEl[0];
        let lastEl = focusableEl[focusableEl.length - 1];

        requestAnimationFrame(function(){
            if(modal.classList.contains('show')){
                firstEl.focus();
            }
        });
        focusHandler = function(e){
            if(e.key !== 'Tab') return;
            if(e.shiftKey){
                if(document.activeElement === firstEl){
                    e.preventDefault();
                    lastEl.focus();
                }
            }
            if(document.activeElement === lastEl){
                e.preventDefault();
                firstEl.focus();
            }
        };
        modal.addEventListener('keydown', focusHandler);
    }
    if(typeof modalLayoutResize === 'function'){
        modalLayoutResize();
    }
}
function dismissModal(modalId){
    let modal = document.getElementById(modalId);

    modal.classList.remove('show');
    document.body.style.overflow = '';

    if(focusHandler){
        modal.removeEventListener('keydown', focusHandler);
        focusHandler = null;
    }
    if(modal.triggerElement){
        modal.triggerElement.focus();
        delete modal.triggerElement;
    }
}
// ====================== 달력 바텀시트 그리기 ======================
function drawCalendar(){
    let showDateBtn = document.getElementById('showDate');
    let displayDateTxt = document.getElementById('displayDate');

    // 달력 내부 요소
    const calendarBody = document.getElementById('calendarBody');
    const calendarTit = document.getElementById('calendarTit');
    const prevBtn = document.getElementById('prevMonth');
    const nextBtn = document.getElementById('nextMonth');
    const confirmBtn = document.getElementById('confirmBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');

    let currentDate = new Date();
    let selectedDate = new Date();

    function renderCalendar(){
        let year = currentDate.getFullYear();
        let month = currentDate.getMonth();

        canlendarTit.textContent = `${year}년 ${String(month + 1).padStart(2, '0')}월`;

        let firstDay = new Date(year, month, 1).getDay();
        let lastDate = new Date(year, month + 1, 0).getDate();

        let html = '';
        let dayCount = 1;
        let isMonthEnded = false;

        for(let i = 0; i < 6; i++){
            if(isMonthEnded && 1 > 0) break;

            let rowHtml = '<tr>';
            for (let j = 0;j<7;j++){
                if((i === 0 && j < firstDay) || dayCount > lastDate){
                    rowHtml += '<td></td>';
                    if(dayCount > lastDate) isMonthEnded = true;
                } else {
                    let isToday = isSameDay(new Date(year, month, dayCount), new Date());
                    let isSelected = isSameDay(new Date(year, month, dayCount), selectedDate);

                    rowHtml += `<td><button type="button" class="date-btn" ${isToday ? 'today' : ''}" aria-selected="${isSelected ? 'true' : 'false'}" date-day="${dayCount}" aria-label="${year}년 ${month + 1}월 ${dayCount}일">${dayCount}</button></td>`;
                    dayCount++;
                }
            }
            rowHtml += '</tr>';
            if(!isMonthEnded || (isMonthEnded && rowHtml.includes('date-btn'))){
                html += rowHtml;
            }
        }
        calendarBody.innerHTML = html;
        addDateClickEvents();
    }
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

// =========탭 감지 스크립트 : 퍼블용/개발X
// window.addEventListener('keydown', (event) => {
//     // Tab 키가 눌렸는지 확인 (Shift + Tab 포함)
//     if (event.key === 'Tab') {
//         // 브라우저가 포커스를 이동시킨 직후의 요소를 확인하기 위해 setTimeout 사용
//         setTimeout(() => {
//             console.log(`태그명: ${document.activeElement.tagName} | 클래스: ${document.activeElement.className} | ID: ${document.activeElement.id}`);
//         }, 0);
//     }
// });