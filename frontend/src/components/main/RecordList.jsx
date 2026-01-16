import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@/assets/css/RecordList.css';

const RecordList = () => {
  const navigate = useNavigate();
  const [selectedSeason, setSelectedSeason] = useState('2025');
  const [activeChart, setActiveChart] = useState('winRate');

  const records = [
    {
      id: 1,
      date: '2025.04.05 (토) 18:30',
      result: 'win',
      match: '한화 vs 삼성 (5:3)',
      stadium: '대전 한화생명',
      mood: '😊',
      seat: '1루 내야지정석',
      price: 35000,
      companions: '지인, 은진'
    },
    {
      id: 2,
      date: '2025.03.28 (금) 18:30',
      result: 'win',
      match: '한화 vs KT (7:2)',
      stadium: '대전 한화생명',
      mood: '🤩',
      seat: '외야자유석',
      price: 12000,
      companions: null
    },
    {
      id: 3,
      date: '2025.03.22 (토) 14:00',
      result: 'lose',
      match: '한화 vs 두산 (3:8)',
      stadium: '잠실 야구장',
      mood: '😐',
      seat: '3루 테이블석',
      price: 45000,
      companions: '가족'
    }
  ];

  return (
    <div className="record-list-page">
      <div className="header">
        <div className="header-title">직관기록 ⚾</div>
      </div>

      <div className="container">
        <div className="season-stats">
          <div className="season-select">
            <select value={selectedSeason} onChange={(e) => setSelectedSeason(e.target.value)}>
              <option value="2025">2025 시즌</option>
              <option value="2026">2026 시즌</option>
              <option value="2027">2027 시즌</option>
            </select>
          </div>
          <div className="quick-stats">
            <div className="quick-stat">
              <div className="quick-stat-label">이 관람</div>
              <div className="quick-stat-value">44회</div>
            </div>
            <div className="quick-stat">
              <div className="quick-stat-label">승률</div>
              <div className="quick-stat-value">59%</div>
            </div>
            <div className="quick-stat">
              <div className="quick-stat-label">이 지출</div>
              <div className="quick-stat-value">1.3M</div>
            </div>
          </div>
        </div>

        <div className="filter-tabs">
          <button className="filter-tab active">전체</button>
          <button className="filter-tab">정규시즌</button>
          <button className="filter-tab">포스트시즌</button>
          <button className="filter-tab">시범경기</button>
        </div>

        {/* 차트 섹션 */}
        <div className="chart-section">
          <div className="chart-header">
            <div className="chart-title">📊 통계</div>
            <div className="chart-toggle">
              <button
                className={`chart-toggle-btn ${activeChart === 'winRate' ? 'active' : ''}`}
                onClick={() => setActiveChart('winRate')}
              >
                승률
              </button>
              <button
                className={`chart-toggle-btn ${activeChart === 'monthly' ? 'active' : ''}`}
                onClick={() => setActiveChart('monthly')}
              >
                월별
              </button>
              <button
                className={`chart-toggle-btn ${activeChart === 'stadium' ? 'active' : ''}`}
                onClick={() => setActiveChart('stadium')}
              >
                구장
              </button>
            </div>
          </div>

          {activeChart === 'winRate' && (
            <div className="chart-content">
              <div className="win-rate-summary">
                <div className="win-rate-circle">
                  <div className="percentage">59%</div>
                  <div className="label">승률</div>
                </div>
                <div className="win-rate-details">
                  <div className="detail-item">
                    <span className="win">승리: 26회 (59%)</span>
                  </div>
                  <div className="detail-item">
                    <span className="lose">패배: 18회 (41%)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeChart === 'monthly' && (
            <div className="chart-content">
              <div className="monthly-bars">
                {['3월', '4월', '5월', '6월', '7월', '8월'].map((month, idx) => {
                  const heights = [40, 80, 100, 70, 60, 90];
                  return (
                    <div key={month} className="bar-item">
                      <div className="bar" style={{ height: `${heights[idx]}%` }}>
                        <span className="bar-value">{[4, 8, 10, 7, 6, 9][idx]}</span>
                      </div>
                      <span className="bar-label">{month}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeChart === 'stadium' && (
            <div className="chart-content">
              <div className="stadium-list">
                {[
                  { name: '대전', count: 28, percentage: 100 },
                  { name: '잠실', count: 10, percentage: 35 },
                  { name: '고척', count: 5, percentage: 18 },
                  { name: '기타', count: 1, percentage: 4 }
                ].map(stadium => (
                  <div key={stadium.name} className="stadium-item">
                    <span className="stadium-name">{stadium.name}</span>
                    <div className="stadium-bar-container">
                      <div className="stadium-bar" style={{ width: `${stadium.percentage}%` }} />
                      <span className="stadium-count">{stadium.count}회</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="record-list">
          {records.map((record) => (
            <div
              key={record.id}
              className="record-card"
              onClick={() => navigate(`/records/${record.id}`)}
            >
              <div className="record-header">
                <div className="record-date">{record.date}</div>
                <div className={`record-badge ${record.result}`}>
                  {record.result === 'win' ? '승' : '패'}
                </div>
              </div>
              <div className="record-content">
                <div className="record-image">📸</div>
                <div className="record-info">
                  <div className="record-match">{record.match}</div>
                  <div className="record-details">
                    <div className="record-detail">
                      <span className="mood-emoji">{record.mood}</span>
                      <strong>{record.stadium}</strong>
                    </div>
                    <div className="record-detail">
                      {record.seat} / {record.price.toLocaleString()}원
                    </div>
                    {record.companions && (
                      <div className="record-detail">
                        👥 {record.companions}와 함께
                      </div>
                    )}
                    {!record.companions && (
                      <div className="record-detail">👤 혼자 관람</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fab" onClick={() => navigate('/records/add')}>+</div>

      <div className="bottom-nav">
        <a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
          <div className="nav-icon">🏠</div>
          <div>홈</div>
        </a>
        <a href="#" className="nav-item active">
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

export default RecordList;