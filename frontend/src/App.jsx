import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import '@/assets/css/content.css';

// Auth 컴포넌트
import Login from './components/auth/Login';
import InitialSetup from './components/auth/InitialSetup';
import SignupOAuth from './components/auth/SignupOAuth';
import SignupProfile from './components/auth/SignupProfile';
import SignupSport from './components/auth/SignupSport';
import SignupTeam from './components/auth/SignupTeam';

// Main 컴포넌트
import Dashboard from './components/main/Dashboard';
import RecordList from './components/main/RecordList';
import RecordAdd from './components/main/RecordAdd';
import ExpenseList from './components/main/ExpenseList';
import ExpenseAdd from './components/main/ExpenseAdd';

// Menu 컴포넌트
import CategoryManagement from './components/menu/CategoryManagement';
import TeamManagement from './components/menu/TeamManagement';
import ContactUs from './components/menu/ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/initial-setup" element={<InitialSetup />} />
        <Route path="/signup" element={<SignupOAuth />} />
        <Route path="/signup/profile" element={<SignupProfile />} />
        <Route path="/signup/sport" element={<SignupSport />} />
        <Route path="/signup/team" element={<SignupTeam />} />

        {/* Main Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/records" element={<RecordList />} />
        <Route path="/records/add" element={<RecordAdd />} />
        <Route path="/expenses" element={<ExpenseList />} />
        <Route path="/expenses/add" element={<ExpenseAdd />} />

        {/* Menu Routes */}
        <Route path="/settings/category" element={<CategoryManagement />} />
        <Route path="/settings/team" element={<TeamManagement />} />
        <Route path="/settings/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;