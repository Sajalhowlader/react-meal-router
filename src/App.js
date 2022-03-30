import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
