import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Mains.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <section className="app">
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='movies' element={<Movies />}/>
        <Route path='saved-movies' element={<SavedMovies />}/>
        <Route path='profile' element={<Profile />}/>
        <Route path='register' element={<Register />}/>
        <Route path='login' element={<Login />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </section>
  );
}

export default App;
