import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@/assets/css/CategoryManagement.css';

const CategoryManagement = () => {
  const navigate = useNavigate();
  
  const [sports, setSports] = useState([
    { id: 'baseball', name: '야구', icon: '⚾', active: true, bgColor: '#fff0e6' },
    { id: 'other', name: '기타', icon: '🏅', active: false, bgColor: '#f5f5f7' }
  ]);

  const upcomingSports = [
    { name: '축구', icon: '⚽' },
    { name: '농구', icon: '🏀' },
    { name: '배구', icon: '🏐' }
  ];

  const toggleSport = (sportId) => {
    setSports(prevSports => 
      prevSports.map(sport => {
        if (sport.id === sportId) {
          const newActive = !sport.active;
          alert(`${sport.name} 종목이 ${newActive ? '활성화' : '비활성화'}되었습니다${newActive ? '!' : '.'}`);
          return { ...sport, active: newActive };
        }
        return sport;
      })
    );
  };

  return (
    <div className="category-management-page">
      <div className="header">
        <button className="back-btn" onClick={() => navigate(-1)}>←</button>
        <div className="header-title">종목 관리</div>
      </div>

      <div className="container">
        <div className="info-box">
          <div className="info-icon">💡</div>
          <div className="info-text">
            <div className="info-title">종목 관리 안내</div>
            <div className="info-desc">
              관심있는 종목을 켜거나 끌 수 있어요. 더 많은 종목이 곧 추가될 예정입니다!
            </div>
          </div>
        </div>

        <div className="section-title">내 종목</div>
        <div className="sport-list">
          {sports.map(sport => (
            <div key={sport.id} className="sport-card">
              <div className="sport-icon-large" style={{ background: sport.bgColor }}>
                {sport.icon}
              </div>
              <div className="sport-info">
                <div className="sport-name">{sport.name}</div>
                <div className={`sport-status ${!sport.active ? 'inactive' : ''}`}>
                  {sport.active ? '활성화됨' : '비활성화됨'}
                </div>
              </div>
              <div 
                className={`sport-toggle ${sport.active ? 'active' : ''}`}
                onClick={() => toggleSport(sport.id)}
              />
            </div>
          ))}
        </div>

        <div className="section-title">추가 예정 종목</div>
        <div className="available-sports">
          <div className="available-list">
            {upcomingSports.map((sport, index) => (
              <div key={index} className="available-item">
                <div className="available-info">
                  <div className="available-icon">{sport.icon}</div>
                  <div className="available-name">{sport.name}</div>
                </div>
                <div className="coming-soon">준비 중</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryManagement;