import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@/assets/css/ExpenseAdd.css';

const ExpenseAdd = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    category: 'ticket',
    date: '2025-04-05',
    place: '',
    title: '',
    amount: 35000,
    memo: ''
  });

  const categories = [
    { value: 'ticket', label: '티켓', icon: '🎫' },
    { value: 'goods', label: '굿즈', icon: '🎁' },
    { value: 'food', label: '식비', icon: '🍔' },
    { value: 'transport', label: '교통비', icon: '🚗' },
    { value: 'accommodation', label: '숙박비', icon: '🏨' },
    { value: 'etc', label: '기타', icon: '📝' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAmountChange = (delta) => {
    setFormData(prev => ({
      ...prev,
      amount: Math.max(0, (prev.amount || 0) + delta)
    }));
  };

  const clearAmount = () => {
    setFormData(prev => ({ ...prev, amount: 0 }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('지출 기록이 저장되었습니다! 💰');
    navigate('/expenses');
  };

  return (
    <div className="expense-add-page">
      <div className="header">
        <button className="back-btn" onClick={() => navigate(-1)}>←</button>
        <div className="header-title">지출 추가하기</div>
      </div>

      <div className="container">
        <form onSubmit={handleSubmit}>
          {/* 분류 선택 */}
          <div className="form-section">
            <div className="section-title">💳 분류 선택</div>

            <div className="category-grid">
              {categories.map(category => (
                <button
                  key={category.value}
                  type="button"
                  className={`category-btn ${formData.category === category.value ? 'selected' : ''}`}
                  onClick={() => handleInputChange('category', category.value)}
                >
                  <div className="category-icon">{category.icon}</div>
                  <div className="category-label">{category.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 기본 정보 */}
          <div className="form-section">
            <div className="section-title">📋 기본 정보</div>

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
              <label className="form-label">사용처</label>
              <input
                type="text"
                className="form-input"
                placeholder="예: 한화생명 이글스파크"
                value={formData.place}
                onChange={(e) => handleInputChange('place', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">내용 <span className="required">*</span></label>
              <input
                type="text"
                className="form-input"
                placeholder="예: 1루 내야지정석"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                required
              />
            </div>
          </div>

          {/* 금액 */}
          <div className="form-section">
            <div className="section-title">💰 금액</div>

            <div className="form-group">
              <label className="form-label">금액 <span className="required">*</span></label>
              <div className="amount-input-wrapper">
                <input
                  type="number"
                  className="form-input amount-input"
                  placeholder="0"
                  value={formData.amount}
                  onChange={(e) => handleInputChange('amount', parseInt(e.target.value) || 0)}
                  required
                />
                <span className="currency">원</span>
              </div>
              <div className="quick-amounts">
                <button type="button" className="quick-amount-btn" onClick={() => handleAmountChange(10000)}>
                  +1만
                </button>
                <button type="button" className="quick-amount-btn" onClick={() => handleAmountChange(5000)}>
                  +5천
                </button>
                <button type="button" className="quick-amount-btn" onClick={() => handleAmountChange(1000)}>
                  +1천
                </button>
                <button type="button" className="quick-amount-btn" onClick={clearAmount}>
                  초기화
                </button>
              </div>
            </div>
          </div>

          {/* 추가 정보 */}
          <div className="form-section">
            <div className="section-title">📝 추가 정보</div>

            <div className="form-group">
              <label className="form-label">메모</label>
              <textarea
                className="form-textarea"
                placeholder="메모를 남겨보세요"
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

export default ExpenseAdd;