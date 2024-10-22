import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if(!token || !role){
        return <Navigate to="/login" />;
    }
  return children;
}
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default PrivateRoute