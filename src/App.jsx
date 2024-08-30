import './assets/fonts/fonts.css';
import Home from "./pages/HomePage"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import DestacadosPage from './pages/DestacadosPage';
import DescubriArgPage from './pages/DescubriArgPage';




function App() {
return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/destacados/:id' element={<DestacadosPage/>}/>
            <Route path='/provincias/:id' element={<DescubriArgPage/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
)
}

export default App
