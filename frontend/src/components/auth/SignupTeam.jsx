import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';

const SignupTeam = () => {
  const navigate = useNavigate();
  const [selectedTeam, setSelectedTeam] = useState(null);

  const teams = [
    { id: 'hanwha', name: '한화\n이글스', icon: '🦅' },
    { id: 'doosan', name: '두산\n베어스', icon: '🐻' },
    { id: 'lg', name: 'LG\n트윈스', icon: '👯' },
    { id: 'kt', name: 'KT\n위즈', icon: '🦊' },
    { id: 'ssg', name: 'SSG\n랜더스', icon: '🛸' },
    { id: 'nc', name: 'NC\n다이노스', icon: '🦕' },
    { id: 'kiwoom', name: '키움\n히어로즈', icon: '🦸🏽' },
    { id: 'kia', name: 'KIA\n타이거즈', icon: '🐯' },
    { id: 'lotte', name: '롯데\n자이언츠', icon: '🌊' },
    { id: 'samsung', name: '삼성\n라이온즈', icon: '🦁' },
  ];

  const handleSave = () => {
    if (!selectedTeam) {
      alert('팀을 선택해주세요');
      return;
    }

    console.log('Selected team:', selectedTeam);
    alert('회원가입이 완료되었습니다! 🎉');
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <ProgressBar step={4} totalSteps={4} />

      <div className="header">
        <h1>우리 팀을 선택하세요 ⚾</h1>
        <p>응원하는 구단을 선택해주세요</p>
      </div>

      <div className="team-grid">
        {teams.map((team) => (
          <button
            key={team.id}
            className={`team-btn ${selectedTeam === team.id ? 'selected' : ''}`}
            data-team={team.id}
            onClick={() => setSelectedTeam(team.id)}
          >
            <div className="team-icon">{team.icon}</div>
            <div
              className="team-name"
              dangerouslySetInnerHTML={{ __html: team.name.replace('\n', '<br>') }}
            />
          </button>
        ))}

        <button
          className={`team-btn ${selectedTeam === 'none' ? 'selected' : ''}`}
          data-team="none"
          onClick={() => setSelectedTeam('none')}
          style={{ gridColumn: '1 / -1' }}
        >
          <div className="team-icon">⚪</div>
          <div className="team-name">없음</div>
        </button>
      </div>

      <button
        className="save-btn"
        onClick={handleSave}
        disabled={!selectedTeam}
      >
        저장
      </button>
    </div>
  );
};

export default SignupTeam;