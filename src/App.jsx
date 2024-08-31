import HeaderNavigation from "./components/header/HeaderNavigation";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import LeaderBoardPage from "./pages/LeaderBoardPage";

function App() {
  return (
    <BrowserRouter>
       <HeaderNavigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leaderboards" element={<LeaderBoardPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
