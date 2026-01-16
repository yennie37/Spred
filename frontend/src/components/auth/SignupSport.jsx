import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';

const SignupSport = () => {
  const navigate = useNavigate();
  const [selectedSport, setSelectedSport] = useState(null);

  const sports = [
    { id: 'baseball', name: '야구', icon: '⚾', desc: '직관 기록을 남겨보세요' },
    { id: 'other', name: '기타', icon: '🏅', desc: '다른 스포츠 종목' }
  ];

  const handleNext = () => {
    if (!selectedSport) {
      alert('종목을 선택해주세요');
      return;
    }

    console.log('Selected sport:', selectedSport);

    if (selectedSport === 'baseball') {
      navigate('/signup/team');
    } else {
      alert('회원가입이 완료되었습니다!');
      navigate('/dashboard');
    }
  };

  return (
    <div className="container">
      <ProgressBar step={3} totalSteps={4} />

      <div className="header">
        <h1>어떤 종목을 기록할까요?</h1>
        <p>관심있는 스포츠를 선택해주세요</p>
      </div>

      <div className="sport-options">
        {sports.map((sport) => (
          <button
            key={sport.id}
            className={`sport-btn ${selectedSport === sport.id ? 'selected' : ''}`}
            data-sport={sport.id}
            onClick={() => setSelectedSport(sport.id)}
          >
            <div className="sport-icon">{sport.icon}</div>
            <div className="sport-info">
              <div className="sport-name">{sport.name}</div>
              <div className="sport-desc">{sport.desc}</div>
            </div>
          </button>
        ))}
      </div>

      <div className="info-box">
        <p>💡 추후 다양한 종목이 추가될 예정이에요!</p>
      </div>

      <button
        className="next-btn"
        onClick={handleNext}
        disabled={!selectedSport}
      >
        다음
      </button>
    </div>
  );
};

export default SignupSport;