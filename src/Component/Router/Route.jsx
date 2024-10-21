import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Login from '../Login/Login';
import Acceuil from '../Acceuil/Acceuil';
import Dashboard from '../Admin/Dashboard/dashbord';
import Inscription from '../Login/Inscription';
import PrivateRoute from './PrivateRoute';
import Text from './../Text';
import { useEffect } from 'react';

const Root = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/Login' && '/Inscription'){
            import ('../../assets/Login/css/material-kit.css');
            import ('../../assets/Login/css/nucleo-icons.css');
            import ('../../assets/Login/css/nucleo-svg.css');
        }else if(location.pathname === '/Admin'){
            import ('../../assets/admin/demo/demo.css');
            import ('../../assets/admin/css/bootstrap.min.css');
            import ('../../assets/admin/css/now-ui-dashboard.min.css');
        }else{
            import ('../../assets/acceuil/lib/owlcarousel/assets/owl.carousel.min.css');
            import ('../../assets/acceuil/css/style.css');
            import ('../../assets/acceuil/fontawesome/css/all.css');
        }
    },[location])
    return (
        <>
            <Routes>
                <Route path="/Login" element={<Login />} />
                <Route path="/Inscription" element={<Inscription />} />
                <Route path="/" element={<Acceuil />} />
                <Route path="/teste" element={<Text />} />
                <Route path="/Admin" element={
                    <PrivateRoute>   
                        <Dashboard />
                    </PrivateRoute>
                } />
            </Routes>
        </>
    );
}

const AppWrapper = () => {
    return (
        <Router>
            <Root />
        </Router>
    )
};

export default AppWrapper;
