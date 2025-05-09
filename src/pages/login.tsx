import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/apiServices';
import '../App.css';

interface LoginResponse {
    token: string;
    refreshToken: string;
}

const Login: React.FC<any> = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
    const [apiError, setApiError] = useState<string | null>(null);

    const validateForm = () => {
        // Validazione del form
        const newErrors: { email?: string; password?: string } = {};
        if (!email) {
            newErrors.email = 'Email è richiesta';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email non è valida';
        }
        if (!password) {
            newErrors.password = 'Password è richiesta';
        } else if (password.length < 6) {
            newErrors.password = 'Password deve essere di almeno 6 caratteri';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                // Chiamata alla api per riceve i token
                const response: LoginResponse = await login(email, password);
                // Memorizza i token in localStorage memorizzando temporaneamente anche il refreshToken nel localStorage
                localStorage.setItem('jwtToken', response.token);
                localStorage.setItem('refreshToken', response.refreshToken); //meglio salvarlo in un cookie httpOnly
                navigate(`/homepage`);
            } catch (error: any) {
                setApiError(error.message || 'An error occurred during login');
            }
        }
    };

    return (
        <div className="homepage-container">
            <div className="content-container">
                <form onSubmit={handleLogin} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='login-input'
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='login-input'
                        />
                        {errors.password && <span className="error-message">{errors.password}</span>}
                    </div>
                    {apiError && <span className="error-message">{apiError}</span>}
                    <button 
                        type="submit" 
                        className='login-button'

                    >
                        Login
                    </button> 
                </form>
            </div>
        </div>
    );
};

export default Login;
