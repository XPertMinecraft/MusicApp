import './App.css'

import Left from './component/Left_block/Left';
import Right from './component/Right_block/Right';

import PlayerProvider from './context/PlayerContext';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";

function AppContent() {
  return (
    <div className="box">

      <Left />

      <Routes>
        <Route path='/' element={<Navigate to="/home" replace={true} />} />
        <Route path='/home' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>

    </div>
  );
}

function App() {
  return (
    <PlayerProvider>
      <BrowserRouter basename="/MusicApp">
        <AppContent />
      </BrowserRouter>
    </PlayerProvider>
  );
}

export default App;