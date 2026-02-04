import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/content.css';

const SignupSport = () => {
  const navigate = useNavigate();
  const [selectedSport, setSelectedSport] = useState('');

  const handleNext = () => {
    if (!selectedSport) {
      alert('종목을 선택해주세요');
      return;
    }

    console.log('Selected sport:', selectedSport);

    if (selectedSport === 'baseball') {
      navigate('/signup-team');
    } else {
      // 기타 종목은 팀 선택 생략
      alert('회원가입이 완료되었습니다!');
      navigate('/dashboard');
    }
  };

  return (
    <div className="wrap">
      <div className="float-container">
        <div className="content">
          <div className="progress-bar">
            <div className="progress-step"></div>
            <div className="progress-step"></div>
            <div className="progress-step active"></div>
            <div className="progress-step"></div>
          </div>

          <div className="header">
            <h1 className="tit-d02">어떤 종목을 기록할까요?</h1>
            <p>관심있는 스포츠를 선택해주세요</p>
          </div>

          <div className="form-group" role="radiogroup">
            <div className="radio-btn">
              <label htmlFor="baseball">
                <i aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Baseball SVG paths */}
                  </svg>
                </i>
                <div className="txt-wrap">
                  <span className="tit">야구</span>
                  <span className="desc">직관 기록을 남겨보세요</span>
                </div>
                <input 
                  type="radio" 
                  id="baseball" 
                  name="sports" 
                  value="baseball"
                  checked={selectedSport === 'baseball'}
                  onChange={(e) => setSelectedSport(e.target.value)}
                />
              </label>
            </div>
            <div className="radio-btn">
              <label htmlFor="other">
                <i aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Other sport SVG paths */}
                  </svg>
                </i>
                <div className="txt-wrap">
                  <span className="tit">기타</span>
                  <span className="desc">다른 스포츠 종목</span>
                </div>
                <input 
                  type="radio" 
                  id="other" 
                  name="sports" 
                  value="other"
                  checked={selectedSport === 'other'}
                  onChange={(e) => setSelectedSport(e.target.value)}
                />
              </label>
            </div>
          </div>

          <div className="info-box">
            <p>추후 다양한 종목이 추가될 예정이에요!</p>
          </div>
        </div>

        <footer className="footer">
          <button 
            className="btn-comm-prime" 
            id="nextBtn" 
            disabled={!selectedSport}
            onClick={handleNext}
          >
            <span>다음</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default SignupSport;
