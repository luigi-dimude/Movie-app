import './App.css';
import Navbar from './components/layout/navbar/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import MyList from './pages/MyList';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Title from './pages/Title';

function App() {







  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/title/:title" element={<Title />} />
            <Route path="/my-list/" element={<MyList />} />
          </Routes>
        </div>
      </Router>


    </>
  );
}

export default App;
