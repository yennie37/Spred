import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@/assets/css/RecordAdd.css';

const RecordAdd = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    gameType: 'regular',
    date: '2025-04-05',
    time: '18:30',
    mood: 'happy',
    stadium: 'daejeon',
    homeAway: 'home',
    opponent: 'samsung',
    ourScore: 5,
    theirScore: 3,
    result: 'win',
    seatType: '1st-base',
    seatLocation: '105블럭 13열 09',
    seatMemo: '',
    photos: [],
    companions: ['ryujiin', 'oheunjin'],
    memo: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('직관기록이 저장되었습니다! 🎉');
    navigate('/records');
  };

  const gameTypes = [
    { value: 'exhibition', label: '시범' },
    { value: 'regular', label: '정규' },
    { value: 'post', label: '포스트' },
    { value: 'other', label: '기타' }
  ];

  const moods = [
    { emoji: '🤩', label: '극희', value: 'very-happy' },
    { emoji: '😊', label: '희', value: 'happy' },
    { emoji: '😐', label: '중', value: 'neutral' },
    { emoji: '😟', label: '소노', value: 'sad' },
    { emoji: '😡', label: '중노', value: 'angry' },
    { emoji: '🤬', label: '극대노', value: 'very-angry' }
  ];

  const stadiums = [
    { value: 'daejeon', label: '대전 한화생명 이글스파크' },
    { value: 'jamsil', label: '서울 잠실야구장' },
    { value: 'gocheok', label: '서울 고척스카이돔' },
    { value: 'suwon', label: '수원 KT위즈파크' },
    { value: 'incheon', label: '인천 SSG랜더스필드' },
    { value: 'changwon', label: '창원 NC파크' },
    { value: 'gwangju', label: '광주 기아챔피언스필드' },
    { value: 'busan', label: '부산 사직야구장' },
    { value: 'daegu', label: '대구 삼성라이온즈파크' }
  ];

  const opponents = [
    { value: 'doosan', label: '두산 베어스' },
    { value: 'lg', label: 'LG 트윈스' },
    { value: 'kt', label: 'KT 위즈' },
    { value: 'ssg', label: 'SSG 랜더스' },
    { value: 'nc', label: 'NC 다이노스' },
    { value: 'kiwoom', label: '키움 히어로즈' },
    { value: 'kia', label: 'KIA 타이거즈' },
    { value: 'lotte', label: '롯데 자이언츠' },
    { value: 'samsung', label: '삼성 라이온즈' }
  ];

  const seatTypes = [
    { value: '1st-base', label: '1루 내야지정석' },
    { value: '3rd-base', label: '3루 내야지정석' },
    { value: 'outfield-free', label: '외야자유석' },
    { value: 'table', label: '테이블석' },
    { value: 'vip', label: 'VIP석' },
    { value: 'sky', label: '스카이박스' }
  ];

  return (
    <div className="record-add-page">
      <div className="header">
        <button className="back-btn" onClick={() => navigate(-1)}>←</button>
        <div className="header-title">직관기록 추가하기</div>
      </div>

      <div className="container">
        <form onSubmit={handleSubmit}>
          {/* 기본 정보 */}
          <div className="form-section">
            <div className="section-title">📋 기본 정보</div>

            <div className="form-group">
              <label className="form-label">경기 종류 <span className="required">*</span></label>
              <div className="button-group">
                {gameTypes.map(type => (
                  <button
                    key={type.value}
                    type="button"
                    className={`option-btn ${formData.gameType === type.value ? 'selected' : ''}`}
                    onClick={() => handleInputChange('gameType', type.value)}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">날짜 <span className="required">*</span></label>
              <input
                type="date"
                className="form-input"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">시간 <span className="required">*</span></label>
              <input
                type="time"
                className="form-input"
                value={formData.time}
                onChange={(e) => handleInputChange('time', e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">기분 <span className="required">*</span></label>
              <div className="mood-buttons">
                {moods.map(mood => (
                  <button
                    key={mood.value}
                    type="button"
                    className={`mood-btn ${formData.mood === mood.value ? 'selected' : ''}`}
                    onClick={() => handleInputChange('mood', mood.value)}
                  >
                    {mood.emoji}
                    <span>{mood.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 경기 정보 */}
          <div className="form-section">
            <div className="section-title">⚾ 경기 정보</div>

            <div className="form-group">
              <label className="form-label">구장 <span className="required">*</span></label>
              <select
                className="form-select"
                value={formData.stadium}
                onChange={(e) => handleInputChange('stadium', e.target.value)}
                required
              >
                {stadiums.map(stadium => (
                  <option key={stadium.value} value={stadium.value}>
                    {stadium.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">홈/원정 <span className="required">*</span></label>
              <div className="button-group">
                <button
                  type="button"
                  className={`option-btn ${formData.homeAway === 'home' ? 'selected' : ''}`}
                  onClick={() => handleInputChange('homeAway', 'home')}
                >
                  홈
                </button>
                <button
                  type="button"
                  className={`option-btn ${formData.homeAway === 'away' ? 'selected' : ''}`}
                  onClick={() => handleInputChange('homeAway', 'away')}
                >
                  원정
                </button>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">상대팀 <span className="required">*</span></label>
              <select
                className="form-select"
                value={formData.opponent}
                onChange={(e) => handleInputChange('opponent', e.target.value)}
                required
              >
                {opponents.map(team => (
                  <option key={team.value} value={team.value}>
                    {team.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">점수 <span className="required">*</span></label>
              <div className="score-input-group">
                <input
                  type="number"
                  className="form-input score-input"
                  placeholder="우리팀"
                  value={formData.ourScore}
                  onChange={(e) => handleInputChange('ourScore', parseInt(e.target.value))}
                  min="0"
                  required
                />
                <span className="vs-text">:</span>
                <input
                  type="number"
                  className="form-input score-input"
                  placeholder="상대팀"
                  value={formData.theirScore}
                  onChange={(e) => handleInputChange('theirScore', parseInt(e.target.value))}
                  min="0"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">경기 결과 <span className="required">*</span></label>
              <div className="button-group">
                {['win', 'lose', 'draw'].map(result => (
                  <button
                    key={result}
                    type="button"
                    className={`option-btn ${formData.result === result ? 'selected' : ''}`}
                    onClick={() => handleInputChange('result', result)}
                  >
                    {result === 'win' ? '승' : result === 'lose' ? '패' : '무'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 좌석 정보 */}
          <div className="form-section">
            <div className="section-title">🎫 좌석 정보</div>

            <div className="form-group">
              <label className="form-label">좌석 종류 <span className="required">*</span></label>
              <select
                className="form-select"
                value={formData.seatType}
                onChange={(e) => handleInputChange('seatType', e.target.value)}
                required
              >
                {seatTypes.map(seat => (
                  <option key={seat.value} value={seat.value}>
                    {seat.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">좌석 위치</label>
              <input
                type="text"
                className="form-input"
                placeholder="예: 105블럭 13열 09"
                value={formData.seatLocation}
                onChange={(e) => handleInputChange('seatLocation', e.target.value)}
              />
              <div className="helper-text">구역, 열, 번호 등을 자유롭게 입력하세요</div>
            </div>

            <div className="form-group">
              <label className="form-label">좌석 메모</label>
              <textarea
                className="form-textarea"
                placeholder="좌석에 대한 메모를 남겨보세요"
                value={formData.seatMemo}
                onChange={(e) => handleInputChange('seatMemo', e.target.value)}
              />
            </div>
          </div>

          {/* 추가 정보 */}
          <div className="form-section">
            <div className="section-title">📝 추가 정보</div>

            <div className="form-group">
              <label className="form-label">자유 메모</label>
              <textarea
                className="form-textarea"
                placeholder="이날의 특별한 순간을 기록해보세요"
                value={formData.memo}
                onChange={(e) => handleInputChange('memo', e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">저장하기</button>
        </form>
      </div>
    </div>
  );
};

export default RecordAdd;