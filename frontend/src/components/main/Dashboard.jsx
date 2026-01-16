import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@/assets/css/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState('2025');

  const seasonData = {
    2025: {
      period: '2025.03.22 ~ 2025.10.05',
      games: [
        { date: '04.05', opponent: '삼성', result: 'win' },
        { date: '03.28', opponent: 'KT', result: 'win' },
        { date: '03.22', opponent: '두산', result: 'lose' }
      ],
      stats: {
        games: 44,
        margin: 8,
        winRate: 59.1,
        spent: 1339000
      }
    },
    2026: {
      period: '2026.03.21 ~ 2026.10.04',
      games: [],
      stats: { games: 0, margin: 0, winRate: 0, spent: 0 }
    },
    2027: {
      period: '시즌 기간 미확정',
      games: [],
      stats: { games: 0, margin: 0, winRate: 0, spent: 0 }
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const confirmReset = () => {
    if (confirm('정말로 모든 데이터를 초기화하시겠습니까?\n이 작업은 되돌릴 수 없습니다.')) {
      alert('데이터가 초기화되었습니다.');
      setSidebarOpen(false);
    }
  };

  const handleSeasonChange = (e) => {
    setSelectedSeason(e.target.value);
  };

  const currentData = seasonData[selectedSeason];

  return (
    <div className="dashboard-page">
      {/* 상단바 */}
      <div className="header">
        <div className="header-title">
          <span className="nickname">기록해연</span> 님의 응원 기록
        </div>
        <button className="menu-btn" onClick={toggleSidebar}>☰</button>
      </div>

      {/* 사이드 메뉴 오버레이 */}
      <div
        className={`overlay ${sidebarOpen ? 'show' : ''}`}
        onClick={toggleSidebar}
      />

      {/* 사이드 메뉴 */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>한화 이글스 🦅</h2>
          <p>기록해연 님</p>
        </div>
        <div className="sidebar-menu">
          <div className="menu-item" onClick={() => navigate('/settings/category')}>
            ⚾ 종목 관리
          </div>
          <div className="menu-item" onClick={() => navigate('/settings/team')}>
            🔄 우리팀 변경
          </div>
          <div className="menu-item" onClick={() => navigate('/settings/contact')}>
            📧 문의하기 / 의견 보내기
          </div>
          <div className="menu-item danger" onClick={confirmReset}>
            🗑️ 데이터 초기화
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="container">
        {/* 시즌 선택 */}
        <div className="season-select">
          <label htmlFor="seasonSelect">시즌 선택</label>
          <select id="seasonSelect" value={selectedSeason} onChange={handleSeasonChange}>
            <option value="2025">2025 시즌</option>
            <option value="2026">2026 시즌</option>
            <option value="2027">2027 시즌</option>
          </select>
          <div className="season-info">
            📅 {selectedSeason} 시즌 기간: {currentData.period}
          </div>
        </div>

        {/* 통계 카드 */}
        <div className="stats-grid">
          <div className="stat-card highlight full-width">
            <div className="stat-label">직관 횟수</div>
            <div className="stat-value">{currentData.stats.games}<span className="stat-unit">회</span></div>
          </div>
          <div className="stat-card">
            <div className="stat-label">승패 마진</div>
            <div className="stat-value">
              {currentData.stats.margin > 0 ? '+' : ''}{currentData.stats.margin}
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-label">승률</div>
            <div className="stat-value">{currentData.stats.winRate}<span className="stat-unit">%</span></div>
          </div>
          <div className="stat-card full-width">
            <div className="stat-label">이번 시즌 지출</div>
            <div className="stat-value">
              {currentData.stats.spent.toLocaleString()}<span className="stat-unit">원</span>
            </div>
          </div>
        </div>

        {/* 최근 직관 기록 */}
        {currentData.games.length > 0 && (
          <div className="recent-games">
            <h3>최근 직관 기록</h3>
            <div className="game-list">
              {currentData.games.map((game, index) => (
                <div key={index} className="game-item">
                  <div>
                    <div className="game-date">{game.date}</div>
                  </div>
                  <div className="game-info">vs {game.opponent}</div>
                  <div className={`game-result ${game.result}`}>
                    {game.result === 'win' ? '승' : '패'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 하단 네비게이션 */}
      <div className="bottom-nav">
        <a href="#" className="nav-item active">
          <div className="nav-icon">🏠</div>
          <div>홈</div>
        </a>
        <a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); navigate('/records'); }}>
          <div className="nav-icon">⚾</div>
          <div>직관기록</div>
        </a>
        <a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); navigate('/expenses'); }}>
          <div className="nav-icon">💰</div>
          <div>소비기록</div>
        </a>
      </div>
    </div>
  );
};

export default Dashboard;