import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';

const SignupProfile = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedAge, setSelectedAge] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nickname.trim().length < 2) {
      alert('닉네임은 2자 이상 입력해주세요');
      return;
    }

    console.log('Profile:', { nickname, gender: selectedGender, age: selectedAge });
    navigate('/signup/sport');
  };

  const selectGender = (value) => {
    setSelectedGender(value);
  };

  const selectAge = (value) => {
    setSelectedAge(value);
  };

  return (
    <div className="container">
      <ProgressBar step={2} totalSteps={4} />

      <div className="header">
        <h1>반가워요! 👋</h1>
        <p>당신에 대해 알려주세요</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">
            닉네임<span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-input"
            placeholder="닉네임을 입력해주세요"
            maxLength="12"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          />
          <div className="helper-text">2-12자 이내로 입력해주세요</div>
        </div>

        <div className="form-group">
          <label className="form-label">성별</label>
          <div className="button-group">
            {['male', 'female', 'none'].map((gender) => (
              <button
                key={gender}
                type="button"
                className={`option-btn ${selectedGender === gender ? 'selected' : ''}`}
                onClick={() => selectGender(gender)}
              >
                {gender === 'male' ? '남성' : gender === 'female' ? '여성' : '선택안함'}
              </button>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">나이대</label>
          <div className="button-group">
            {['10s', '20s', '30s', '40s', '50s', '60+', 'none'].map((age) => (
              <button
                key={age}
                type="button"
                className={`option-btn ${selectedAge === age ? 'selected' : ''}`}
                onClick={() => selectAge(age)}
              >
                {age === 'none' ? '선택안함' : age === '60+' ? '60대 이상' : `${age.replace('s', '')}대`}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="next-btn"
          disabled={nickname.trim().length < 2}
        >
          다음
        </button>
      </form>
    </div>
  );
};

export default SignupProfile;