import './App.css'
import GamesList from './components/GamesList'
import Navigation from './components/Navigation'
import { SkeletonTheme } from 'react-loading-skeleton';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <>
      <SkeletonTheme baseColor="#5A5A5A" highlightColor="#777777">
        <BrowserRouter  basename="/">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/games" element={<GamesList />}/>
            </Routes>
        </BrowserRouter>
      </SkeletonTheme>
    </>
  )
}

export default App
