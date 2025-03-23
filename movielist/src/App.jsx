import './css/App.css'
import MovieCard from './components/MovieCard';
import Favourites from './pages/Favourites';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';

function App(){
  return(
    <div>
      <NavBar/>
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/favourites' element={<Favourites/>}></Route>
      </Routes>
    </main>
    </div>
  );
}


export default App;