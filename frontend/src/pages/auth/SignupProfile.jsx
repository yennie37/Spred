import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/content.css';

const SignupProfile = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (nickname.length < 2) {
      alert('닉네임은 2자 이상 입력해주세요');
      return;
    }

    console.log('Profile:', { nickname, gender, age });
    navigate('/signup-sport');
  };

  return (
    <div className="wrap">
      <div className="float-container">
        <div className="content">
          <div className="progress-bar">
            <div className="progress-step"></div>
            <div className="progress-step active"></div>
            <div className="progress-step"></div>
            <div className="progress-step"></div>
          </div>

          <div className="header">
            <h1 className="tit-d02">반가워요!<i className="ico-greeting" aria-hidden="true"></i></h1>
            <p>당신에 대해 알려주세요</p>
          </div>

          <form className="form-group-wrap" id="profileForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <h2 className="form-tit" id="nickname"><span>닉네임</span></h2>
              <label className="form-item" htmlFor="nick-form">
                <input 
                  type="text" 
                  id="nick-form" 
                  placeholder="닉네임을 입력해주세요" 
                  maxLength="12" 
                  aria-labelledby="nickname" 
                  aria-describedby="nick-help" 
                  autoComplete="off" 
                  required
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />
              </label>
              <p id="nick-help" className="form-msg">2-12자 이내로 입력해주세요</p>
            </div>

            <div className="form-group" role="radiogroup" aria-labelledby="genderTit">
              <h2 className="form-tit" id="genderTit">성별</h2>
              <div className="group-wrap">
                <label className="form-item" htmlFor="male">
                  <span className="rd-btn-txt">남성</span>
                  <input 
                    type="radio" 
                    name="gender" 
                    id="male" 
                    className="radio-btn" 
                    value="male"
                    checked={gender === 'male'}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </label>
                <label className="form-item" htmlFor="female">
                  <span className="rd-btn-txt">여성</span>
                  <input 
                    type="radio" 
                    name="gender" 
                    id="female" 
                    className="radio-btn" 
                    value="female"
                    checked={gender === 'female'}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </label>
                <label className="form-item" htmlFor="noGender">
                  <span className="rd-btn-txt">선택안함</span>
                  <input 
                    type="radio" 
                    name="gender" 
                    id="noGender" 
                    className="radio-btn" 
                    value="noGender"
                    checked={gender === 'noGender'}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </label>
              </div>
            </div>

            <div className="form-group" role="radiogroup" aria-labelledby="ageGroup">
              <h2 className="form-tit" id="ageGroup">나이대</h2>
              <div className="group-wrap">
                {['10', '20', '30', '40', '50', '60'].map((ageValue) => (
                  <label key={ageValue} className="form-item" htmlFor={`age${ageValue}`}>
                    <span className="rd-btn-txt">{ageValue === '60' ? '60대 이상' : `${ageValue}대`}</span>
                    <input 
                      type="radio" 
                      name="age" 
                      id={`age${ageValue}`} 
                      className="radio-btn" 
                      value={ageValue}
                      checked={age === ageValue}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </label>
                ))}
                <label className="form-item" htmlFor="ageNone">
                  <span className="rd-btn-txt">선택안함</span>
                  <input 
                    type="radio" 
                    name="age" 
                    id="ageNone" 
                    className="radio-btn" 
                    value="none"
                    checked={age === 'none'}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </label>
              </div>
            </div>
          </form>
        </div>

        <footer className="footer">
          <button 
            className="btn-comm-prime" 
            id="nextBtn" 
            disabled={nickname.length < 2}
            onClick={handleSubmit}
          >
            <span>다음</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default SignupProfile;
