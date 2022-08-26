import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' ;
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './pages/Home'
import About from './pages/About'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App(){
    return(        
        <div className='App'>
            <Router>
                <NavBar />   
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/about' element={<About />}/>
                </Routes>
                <Footer />
            </Router>
            
        </div>
    )
}

export default App; 