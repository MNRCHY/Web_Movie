import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail'
import SearchResult from './pages/SearchResult';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<MovieDetail/>}/>
        <Route path='/result/:id' element={<SearchResult/>}/>
        <Route path='/login' element={<SignIn/>}/>
        <Route path='/register' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
