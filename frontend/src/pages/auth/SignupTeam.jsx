import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/content.css';

const SignupTeam = () => {
  const navigate = useNavigate();
  const [selectedTeam, setSelectedTeam] = useState('');

  const teams = [
    { id: 'hanhwa', name: '한화\n이글스' },
    { id: 'doosan', name: '두산\n베어스' },
    { id: 'lg', name: 'LG\n트윈스' },
    { id: 'kt', name: 'KT\n위즈' },
    { id: 'ssg', name: 'SSG\n랜더스' },
    { id: 'nc', name: 'NC\n다이노스' },
    { id: 'kiwoom', name: '키움\n히어로즈' },
    { id: 'kia', name: 'KIA\n타이거즈' },
    { id: 'lotte', name: '롯데\n자이언츠' },
    { id: 'samsung', name: '삼성\n라이온즈' },
    { id: 'none', name: '없음' }
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
    <div className="wrap">
      <div className="float-container">
        <div className="content">
          <div className="progress-bar">
            <div className="progress-step"></div>
            <div className="progress-step"></div>
            <div className="progress-step"></div>
            <div className="progress-step active"></div>
          </div>

          <div className="header">
            <h1 className="tit-d02">우리 팀을 선택하세요<i aria-hidden="true" className="ico-baseball"></i></h1>
            <p>응원하는 구단을 선택해주세요</p>
          </div>

          <div className="team-grid">
            <ul>
              {teams.map((team) => (
                <li key={team.id}>
                  <label htmlFor={team.id} className="team-btn">
                    <i aria-hidden="true"></i>
                    <input 
                      type="radio" 
                      className="team-btn" 
                      id={team.id} 
                      name="team"
                      checked={selectedTeam === team.id}
                      onChange={(e) => setSelectedTeam(e.target.value)}
                      value={team.id}
                    />
                    <span className="team-name" style={{whiteSpace: 'pre-line'}}>
                      {team.name}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <footer className="footer">
          <button 
            className="btn-comm-prime" 
            id="saveBtn" 
            disabled={!selectedTeam}
            onClick={handleSave}
          >
            <span>저장</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default SignupTeam;
