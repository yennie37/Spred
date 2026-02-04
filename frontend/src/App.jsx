import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

// Pages - Auth
import Login from './pages/auth/Login'
import InitialSetup from './pages/auth/InitialSetup'
import SignupOAuth from './pages/auth/SignupOAuth'
import SignupProfile from './pages/auth/SignupProfile'
import SignupSport from './pages/auth/SignupSport'
import SignupTeam from './pages/auth/SignupTeam'

// TODO: 대시보드 페이지 생성 후 import
// import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Routes>
      {/* 기본 경로 - 로그인으로 리다이렉트 */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      
      {/* 로그인 */}
      <Route path="/login" element={<Login />} />
      
      {/* 회원가입 플로우 */}
      <Route path="/initial-setup" element={<InitialSetup />} />
      <Route path="/signup-oauth" element={<SignupOAuth />} />
      <Route path="/signup-profile" element={<SignupProfile />} />
      <Route path="/signup-sport" element={<SignupSport />} />
      <Route path="/signup-team" element={<SignupTeam />} />
      
      {/* 대시보드 (TODO) */}
      <Route path="/dashboard" element={<div>Dashboard (준비중)</div>} />
      
      {/* 404 - 로그인으로 리다이렉트 */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App