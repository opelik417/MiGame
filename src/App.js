import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainMenu from './components/MainMenu/MainMenu';
import Game from './components/Game/Game';

const App = (props) => {
  return (
    <Routes >
      <Route
        path='/'
        element={
          <MainMenu />
        } 
      />
      <Route
        path='/game'
        element={
          <Game />
        } 
      />
    </Routes>
  );
}

export default App;
