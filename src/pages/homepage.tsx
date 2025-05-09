import React, { useEffect, useState } from 'react';
import gears from "../assets/gears.jpg"
import { useNavigate } from 'react-router-dom';
import { loremIpsum } from '../utilities/utilities';
import '../App.css';
import { getUser } from '../services/apiServices';
import { useDispatch } from 'react-redux';
import { setUserRedux } from '../store/userSlice';

const Homepage: React.FC<any> = (props: any) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleButtonClick = () => {
        navigate(`/gestione`);
    };
    const [user, setUser] = useState({name: '', surname: '', email: ''});

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await getUser()
                setUser(user);
                dispatch(setUserRedux({nameSurname: user.name + " " + user.surname, email: user.email})); // Salvataggio su Redux store
            } catch (err: any) {
                alert(err.message);
            }
        }
        fetchUser()
    }, [dispatch]);

    return (
        <div className="homepage-container">
            <div className="content-container">
                <div className="text-section">
                    <h2>Benvenuto {(user.name + " " + user.surname).toLocaleUpperCase()}</h2>
                    {loremIpsum()}
                </div>
                <div className="image-section">
                    <img src={gears} alt="Example" />
                </div>
            </div>
            <div className="button-container">
                <button className="button-management" onClick={handleButtonClick}>Gestisci</button>
            </div>
        </div>
    );
}

export default Homepage;
