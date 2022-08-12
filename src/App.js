import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import './App.css';
import { fetchPartners } from  './features/partners/partnersSlice';
import { fetchPromotions } from './features/promotions/promotionsSlice';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCampsites());
        dispatch(fetchPartners());
        dispatch(fetchPromotions());
    }, [dispatch]);

    return (
        <div className='App'>
            <Header />
            <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='contact' element={<ContactPage />} />
                    <Route path='directory' element={<CampsitesDirectoryPage />} />
                    <Route path='about' element={<AboutPage />} />
                    <Route
                        path='directory/:campsiteId'
                        element={<CampsiteDetailPage />}
                    />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;