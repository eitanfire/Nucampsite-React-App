import CampsitesList from './features/campsites/CampsitesList';
import { CAMPSITES } from './app/shared/CAMPSITES';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <div className='App'>
            <Header />
            <CampsitesList />
            <Footer />
        </div>
    );
}

export default App;