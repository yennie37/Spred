import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@/assets/css/ExpenseList.css';

const ExpenseList = () => {
  const navigate = useNavigate();
  const [selectedSeason, setSelectedSeason] = useState('2025');
  const [activeChart, setActiveChart] = useState('category');

  const expenses = [
    {
      id: 1,
      category: 'ticket',
      categoryName: '티켓',
      title: '1루 내야지정석',
      date: '2025.04.05',
      amount: 35000,
      icon: '🎫',
      bgColor: '#fff0e6'
    },
    {
      id: 2,
      category: 'food',
      categoryName: '식비',
      title: '구장 내 식사',
      date: '2025.04.05',
      amount: 18500,
      icon: '🍔',
      bgColor: '#e6f7ff'
    },
    {
      id: 3,
      category: 'transport',
      categoryName: '교통비',
      title: '서울-대전 왕복',
      date: '2025.04.05',
      amount: 42000,
      icon: '🚗',
      bgColor: '#fff1f0'
    },
    {
      id: 4,
      category: 'goods',
      categoryName: '굿즈',
      title: '유니폼',
      date: '2025.03.28',
      amount: 89000,
      icon: '🎁',
      bgColor: '#f6ffed'
    }
  ];

  const categoryData = [
    { name: '티켓', amount: 687000, percentage: 100, color: '#FF6600' },
    { name: '식비', amount: 378000, percentage: 55, color: '#1890ff' },
    { name: '교통비', amount: 172000, percentage: 25, color: '#ff4d4f' },
    { name: '굿즈', amount: 102000, percentage: 18, color: '#52c41a' }
  ];

  return (
    <div className="expense-list-page">
      <div className="header">
        <div className="header-title">지출기록 💰</div>
      </div>

      <div className="container">
        <div className="total-expense">
          <div className="total-label">이번 시즌 이 지출</div>
          <div className="total-amount">1,339,000<span style={{ fontSize: '20px' }}>원</span></div>
          <div className="total-period">2025.03.22 ~ 현재</div>
        </div>

        <div className="season-select">
          <select value={selectedSeason} onChange={(e) => setSelectedSeason(e.target.value)}>
            <option value="2025">2025 시즌</option>
            <option value="2026">2026 시즌</option>
            <option value="2027">2027 시즌</option>
          </select>
        </div>

        <div className="chart-section">
          <div className="chart-header">
            <div className="chart-title">📊 지출 분석</div>
            <div className="chart-toggle">
              <button
                className={`chart-toggle-btn ${activeChart === 'category' ? 'active' : ''}`}
                onClick={() => setActiveChart('category')}
              >
                분류별
              </button>
              <button
                className={`chart-toggle-btn ${activeChart === 'monthly' ? 'active' : ''}`}
                onClick={() => setActiveChart('monthly')}
              >
                월별
              </button>
            </div>
          </div>

          {activeChart === 'category' && (
            <div className="category-chart">
              <div className="category-list">
                {categoryData.map((category, index) => (
                  <div key={index} className="category-item">
                    <div className="category-icon" style={{ background: category.bgColor }}>
                      {category.name === '티켓' ? '🎫' : category.name === '식비' ? '🍔' : category.name === '교통비' ? '🚗' : '🎁'}
                    </div>
                    <div className="category-info">
                      <div className="category-name">{category.name}</div>
                      <div className="category-bar-container">
                        <div className="category-bar" style={{ width: `${category.percentage}%`, background: category.color }} />
                      </div>
                    </div>
                    <div className="category-amount">{category.amount.toLocaleString()}원</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeChart === 'monthly' && (
            <div className="monthly-trend">
              <div className="monthly-bars">
                {[
                  { month: '3월', amount: 180, height: 40 },
                  { month: '4월', amount: 380, height: 80 },
                  { month: '5월', amount: 310, height: 65 },
                  { month: '6월', amount: 265, height: 55 },
                  { month: '7월', amount: 204, height: 43 },
                  { month: '8월', amount: 204, height: 43 }
                ].map((data, idx) => (
                  <div key={idx} className="bar-item">
                    <div className="bar" style={{ height: `${data.height}%` }}>
                      <span className="bar-value">{data.amount}K</span>
                    </div>
                    <span className="bar-label">{data.month}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="expense-list-section">
          <div className="section-title">최근 지출 내역</div>
          <div className="expense-list">
            {expenses.map((expense) => (
              <div
                key={expense.id}
                className="expense-item"
                onClick={() => alert(`지출 상세보기 (ID: ${expense.id})`)}
              >
                <div className="expense-icon" style={{ background: expense.bgColor }}>
                  {expense.icon}
                </div>
                <div className="expense-info">
                  <div className="expense-category">{expense.categoryName}</div>
                  <div className="expense-title">{expense.title}</div>
                  <div className="expense-date">{expense.date}</div>
                </div>
                <div className="expense-amount">{expense.amount.toLocaleString()}원</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fab" onClick={() => navigate('/expenses/add')}>+</div>

      <div className="bottom-nav">
        <a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
          <div className="nav-icon">🏠</div>
          <div>홈</div>
        </a>
        <a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); navigate('/records'); }}>
          <div className="nav-icon">⚾</div>
          <div>직관기록</div>
        </a>
        <a href="#" className="nav-item active">
          <div className="nav-icon">💰</div>
          <div>돈기록</div>
        </a>
      </div>
    </div>
  );
};

export default ExpenseList;