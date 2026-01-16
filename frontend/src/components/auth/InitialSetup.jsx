import React from 'react';
import { useNavigate } from 'react-router-dom';

const InitialSetup = () => {
  const navigate = useNavigate();

  const startSetup = () => {
    navigate('/signup');
  };

  const skipSetup = (e) => {
    e.preventDefault();
    if (confirm('초기 설정을 건너뛰시겠어요?\n나중에 설정 메뉴에서 변경할 수 있습니다.')) {
      alert('메인 화면으로 이동합니다');
      navigate('/dashboard');
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>환영합니다! 🎉</h1>
        <p>딱 3단계만 설정하면<br />바로 시작할 수 있어요</p>
      </div>

      <div className="steps">
        <div className="step-card">
          <div className="step-number">1</div>
          <div className="step-content">
            <div className="step-title">기본 프로필 설정</div>
            <div className="step-desc">닉네임, 성별, 나이대를 알려주세요</div>
          </div>
          <div className="step-icon">👤</div>
        </div>

        <div className="step-card">
          <div className="step-number">2</div>
          <div className="step-content">
            <div className="step-title">관심 종목 선택</div>
            <div className="step-desc">어떤 스포츠를 기록하고 싶으신가요?</div>
          </div>
          <div className="step-icon">⚾</div>
        </div>

        <div className="step-card">
          <div className="step-number">3</div>
          <div className="step-content">
            <div className="step-title">응원 팀 선택</div>
            <div className="step-desc">좋아하는 구단을 선택해주세요</div>
          </div>
          <div className="step-icon">🏆</div>
        </div>
      </div>

      <div className="info-box">
        <p>💡 언제든지 설정에서 변경할 수 있어요!<br />부담없이 진행해주세요</p>
      </div>

      <button className="start-btn" onClick={startSetup}>
        초기 설정 시작하기
      </button>

      <div className="skip-link">
        <a href="#" onClick={skipSetup}>나중에 설정하기</a>
      </div>
    </div>
  );
};

export default InitialSetup;