import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menusidebar from './Components/Menusidebar';




function App() {
  return (
    <>
        <Router>
          <Navbar />
          <Menusidebar/>
          <Routes>
            <Route  path='/' element='{}' />
            <Route  path='/' element='{}' />
            <Route  path='/' element='{}' />
            <Route  path='/' element='{}' />
          </Routes>
        </Router>
    </>
  );
}

export default App;

