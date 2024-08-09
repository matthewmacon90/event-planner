import {Routes, Route} from 'react-router-dom';
import HomePage from '../../pages/home/HomePage';
import AboutPage from '../../pages/about/AboutPage';
import ContactPage from '../../pages/contact/ContactPage';

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
        </Routes>
    );
};

export default RoutesComponent;