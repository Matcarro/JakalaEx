import React from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { resetUserRedux } from '../store/userSlice';

const Header: React.FC<any> = (props: any) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user);

    function logout(): void {
        if (localStorage.getItem('jwtToken')) {
            // Rimuove i token di autenticazione dal localStorage e reindirizza alla pagina di login
            localStorage.removeItem('jwtToken');
            localStorage.removeItem('refreshToken');
            dispatch(resetUserRedux());
            navigate('/login');
        }
    }

    return (
        <div className="header">
            <div className="header-left">
                <FontAwesomeIcon icon={faArrowLeft} className="back-icon" onClick={() => navigate(-1)} />
                <Link to="/homepage" className="home-button">Home</Link>
            </div>
            <h1 className="header-title">Gestione Automezzi e Filiali</h1>
            <div className="header-left">
                <FontAwesomeIcon icon={faSignOut} className="back-icon" onClick={() => logout()} />
                <h2>{user?.email || 'Guest'}</h2>
            </div>

        </div>
    );
}

export default Header;