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
  }, [dispatch]);

  if (isPreload) {
    return null;
  }
  
  return (
    <>
      <LoadingBar className="bg-blue-500 h-1 absolute" />
      <HeaderNavigation authUser={authUser} onLogout={onLogout} />
      <Routes>
        <Route path="/" element={<Navigate to="/ghreatine" />} />
        <Route path="/ghreatine" element={<HomePage />} />
        <Route path="/thread/:id" element={<ThreadPage />} />
        <Route path="/login" element={authUser?<Navigate to="/ghreatine" />:<LoginPage />} />
        <Route path="/register" element={authUser?<Navigate to="/ghreatine" />:<RegisterPage />} />
        <Route path="/leaderboards" element={<LeaderBoardPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
