import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@/assets/css/ContactUs.css';

const ContactUs = () => {
  const navigate = useNavigate();

  const [selectedType, setSelectedType] = useState('bug');
  const [formData, setFormData] = useState({
    email: '',
    title: '',
    content: ''
  });

  const categories = [
    { value: 'bug', label: '오류 신고', icon: '🐛' },
    { value: 'feature', label: '기능 제안', icon: '✨' },
    { value: 'improvement', label: '개선 의견', icon: '💡' },
    { value: 'etc', label: '기타', icon: '📝' }
  ];

  const categoryNames = {
    bug: '오류 신고',
    feature: '기능 제안',
    improvement: '개선 의견',
    etc: '기타'
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 이메일 본문 구성
    const mailBody = `문의 유형: ${categoryNames[selectedType]}%0D%0A` +
                    `이메일: ${formData.email}%0D%0A` +
                    `제목: ${formData.title}%0D%0A%0D%0A` +
                    `내용:%0D%0A${encodeURIComponent(formData.content)}%0D%0A%0D%0A` +
                    `----%0D%0A` +
                    `보낸 날짜: ${new Date().toLocaleString('ko-KR')}`;

    const mailSubject = `[${categoryNames[selectedType]}] ${formData.title}`;

    // mailto 링크 생성
    const mailtoLink = `mailto:support@spred.com?subject=${encodeURIComponent(mailSubject)}&body=${mailBody}`;

    // 메일 클라이언트 열기
    window.location.href = mailtoLink;

    // 확인 메시지
    setTimeout(() => {
      if (confirm('메일 앱이 열렸나요?\n열리지 않았다면 "확인"을 눌러 다시 시도해주세요.')) {
        window.location.href = mailtoLink;
      } else {
        alert('의견을 보내주셔서 감사합니다! 💌');
        navigate(-1);
      }
    }, 1000);
  };

  return (
    <div className="contact-us-page">
      <div className="header">
        <button className="back-btn" onClick={() => navigate(-1)}>←</button>
        <div className="header-title">문의하기 / 의견 보내기</div>
      </div>

      <div className="container">
        <div className="intro-box">
          <div className="intro-icon">💌</div>
          <div className="intro-title">소중한 의견을 들려주세요</div>
          <div className="intro-desc">
            불편사항, 제안사항, 오류 신고 등<br />
            무엇이든 편하게 보내주세요!
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <div className="form-group">
              <label className="form-label">문의 유형 <span className="required">*</span></label>
              <div className="category-buttons">
                {categories.map(category => (
                  <button
                    key={category.value}
                    type="button"
                    className={`category-btn ${selectedType === category.value ? 'selected' : ''}`}
                    onClick={() => setSelectedType(category.value)}
                  >
                    {category.icon} {category.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">이메일 <span className="required">*</span></label>
              <input
                type="email"
                className="form-input"
                placeholder="답변 받으실 이메일 주소"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
              />
              <div className="helper-text">답변이 필요한 경우 입력해주세요</div>
            </div>

            <div className="form-group">
              <label className="form-label">제목 <span className="required">*</span></label>
              <input
                type="text"
                className="form-input"
                placeholder="간단한 제목을 입력해주세요"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">내용 <span className="required">*</span></label>
              <textarea
                className="form-textarea"
                placeholder="자세한 내용을 작성해주세요.

예시:
- 발생한 문제나 상황
- 기대했던 동작
- 실제로 발생한 동작
- 재현 방법"
                value={formData.content}
                onChange={(e) => handleInputChange('content', e.target.value)}
                required
              />
              <div className="helper-text">구체적으로 작성해주실수록 빠른 해결이 가능합니다</div>
            </div>
          </div>

          <button type="submit" className="submit-btn">의견 보내기</button>

          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span>이메일: support@spred.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">⏰</span>
              <span>평균 응답 시간: 2-3 영업일</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;