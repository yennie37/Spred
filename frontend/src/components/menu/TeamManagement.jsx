import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@/assets/css/TeamManagement.css';

const TeamManagement = () => {
  const navigate = useNavigate();

  const currentTeam = 'hanwha';
  const [selectedTeam, setSelectedTeam] = useState(currentTeam);

  const teams = [
    { id: 'hanwha', name: '한화\n이글스', icon: '🦅', fullName: '한화 이글스' },
    { id: 'doosan', name: '두산\n베어스', icon: '🐻', fullName: '두산 베어스' },
    { id: 'lg', name: 'LG\n트윈스', icon: '🦁', fullName: 'LG 트윈스' },
    { id: 'kt', name: 'KT\n위즈', icon: '🦊', fullName: 'KT 위즈' },
    { id: 'ssg', name: 'SSG\n랜더스', icon: '🦁', fullName: 'SSG 랜더스' },
    { id: 'nc', name: 'NC\n다이노스', icon: '🦅', fullName: 'NC 다이노스' },
    { id: 'kiwoom', name: '키움\n히어로즈', icon: '🐻', fullName: '키움 히어로즈' },
    { id: 'kia', name: 'KIA\n타이거즈', icon: '🐯', fullName: 'KIA 타이거즈' },
    { id: 'lotte', name: '롯데\n자이언츠', icon: '🦭', fullName: '롯데 자이언츠' },
    { id: 'samsung', name: '삼성\n라이온즈', icon: '🦁', fullName: '삼성 라이온즈' }
  ];

  const currentTeamData = teams.find(t => t.id === currentTeam);

  const handleSelectTeam = (teamId) => {
    setSelectedTeam(teamId);
  };

  const handleSave = () => {
    if (selectedTeam === currentTeam) {
      alert('이미 선택된 팀입니다.');
      return;
    }

    const selectedTeamData = teams.find(t => t.id === selectedTeam);
    const teamName = selectedTeam === 'none' ? '없음' : selectedTeamData.fullName;

    if (confirm(`응원팀을 "${teamName}"(으)로 변경하시겠습니까?`)) {
      alert('응원팀이 변경되었습니다! 🎉');
      navigate(-1);
    }
  };

  return (
    <div className="team-management-page">
      <div className="header">
        <button className="back-btn" onClick={() => navigate(-1)}>←</button>
        <div className="header-title">우리팀 변경</div>
      </div>

      <div className="container">
        <div className="current-team">
          <div className="current-label">현재 응원팀</div>
          <div className="current-icon">{currentTeamData.icon}</div>
          <div className="current-team-name">{currentTeamData.fullName}</div>
        </div>

        <div className="section-title">응원 팀 선택</div>
        <div className="team-grid">
          {teams.map(team => (
            <button
              key={team.id}
              className={`team-btn ${team.id === currentTeam ? 'current' : ''} ${team.id === selectedTeam ? 'selected' : ''}`}
              data-team={team.id}
              onClick={() => handleSelectTeam(team.id)}
            >
              <div className="team-icon">{team.icon}</div>
              <div
                className="team-name"
                dangerouslySetInnerHTML={{ __html: team.name.replace('\n', '<br>') }}
              />
              {team.id === currentTeam && <div className="current-badge">현재 팀</div>}
            </button>
          ))}

          <button
            className={`team-btn ${selectedTeam === 'none' ? 'selected' : ''}`}
            data-team="none"
            onClick={() => handleSelectTeam('none')}
            style={{ gridColumn: '1 / -1' }}
          >
            <div className="team-icon">⚪</div>
            <div className="team-name">없음</div>
          </button>
        </div>
      </div>

      <button
        className="save-btn"
        onClick={handleSave}
        disabled={selectedTeam === currentTeam}
      >
        변경 저장
      </button>
    </div>
  );
};

export default TeamManagement;