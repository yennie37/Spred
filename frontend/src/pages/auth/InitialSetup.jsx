import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/content.css';

const InitialSetup = () => {
  const navigate = useNavigate();

  const startSetup = () => {
    navigate('/signup-oauth');
  };

  const skipSetup = (e) => {
    e.preventDefault();
    if (confirm('초기 설정을 건너뛰시겠어요?\n나중에 설정 메뉴에서 변경할 수 있습니다.')) {
      alert('메인 화면으로 이동합니다');
      navigate('/dashboard');
    }
  };

  return (
    <div className="wrap">
      <div className="float-container">
        <div className="content">
          <div className="header">
            <h1 className="tit-d01">환영합니다!</h1>
            <p>딱 3단계만 설정하면<br/>바로 시작할 수 있어요</p>
          </div>

          <div className="steps">
            <ol className="step-card">
              <li className="step-content">
                <i aria-hidden="true"></i>
                <dl>
                  <dt className="step-title">기본 프로필 설정</dt>
                  <dt className="step-desc">닉네임, 성별, 나이대를 알려주세요</dt>
                </dl>
              </li>
              <li className="step-content">
                <i aria-hidden="true"></i>
                <dl>
                  <dt className="step-title">관심 종목 선택</dt>
                  <dt className="step-desc">어떤 스포츠를 기록하고 싶으신가요?</dt>
                </dl>
              </li>
              <li className="step-content">
                <i aria-hidden="true"></i>
                <dl>
                  <dt className="step-title">응원 팀 선택</dt>
                  <dt className="step-desc">좋아하는 구단을 선택해주세요</dt>
                </dl>
              </li>
            </ol>
          </div>

          <div className="info-box">
            <p>언제든지 설정에서 변경할 수 있어요!<br/>부담없이 진행해주세요</p>
          </div>
        </div>

        <footer className="footer">
          <button className="btn-comm-main" onClick={startSetup}>
            <span>초기 설정 시작하기</span>
          </button>
          <div className="skip-link">
            <a href="#" onClick={skipSetup}><span>나중에 설정하기</span></a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default InitialSetup;
