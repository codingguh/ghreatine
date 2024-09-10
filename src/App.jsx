import HeaderNavigation from "./components/header/HeaderNavigation";

import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import LeaderBoardPage from "./pages/LeaderBoardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { LoadingBar } from "react-redux-loading-bar";
import { useDispatch, useSelector } from "react-redux";
import { asyncLogout } from './redux/states/authUser/action';
import { asyncIsPreload } from './redux/states/isPreload/action';
import { useEffect } from "react";
import ThreadPage from "./pages/ThreadPage";

function App() {
  const dispatch = useDispatch();
  const { authUser, isPreload } = useSelector((state) => state);
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(asyncLogout()).then(({ status }) => {
      if (status === 'success') navigate('/login');
    });
  };

  useEffect(() => {
    dispatch(asyncIsPreload());
  }, []);

  if (isPreload) {
    return null;
  }
  
  return (
    <>
      <HeaderNavigation authUser={authUser} onLogout={onLogout} />
      <LoadingBar style={{ backgroundColor: 'blue', height: '4px', position: 'fixed', top: '0', zIndex: '9999' }} />

      <main className="mx-auto max-w-7xl p-4">
    
      <Routes>
        <Route path="/" element={<Navigate to="/ghreatine" />} />
        <Route path="/ghreatine" element={<HomePage />} />
        <Route path="/thread/:id" element={<ThreadPage />} />
        <Route path="/login" element={authUser?<Navigate to="/ghreatine" />:<LoginPage />} />
        <Route path="/register" element={authUser?<Navigate to="/ghreatine" />:<RegisterPage />} />
        <Route path="/leaderboards" element={<LeaderBoardPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      </main>
    </>
  );
}

export default App;
