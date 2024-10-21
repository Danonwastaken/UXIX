import React from 'react';
import './Header.css'; 
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const navigate = useNavigate();
    return (
        <header className="header">
            <img src="./src/grape.png" alt="Logo" className="logo" />
            <div className="button-container">
                <Button
                    label="Home"
                    onClick={() => navigate("/")} 
                    size="large"
                    variant='outlined'
                />
                <Button
                    label="About"
                    onClick={() => navigate("/about")} 
                    size="large"
                    variant="text"
                />
                <Button
                    label="Talent"
                    onClick={() => navigate("/talent")} 
                    size="large"
                    variant="text"
                />
                <Button
                    label="News"
                    onClick={() => navigate("/news")} 
                    size="large"
                    variant="text"
                />
                <Button
                    label="Merch"
                    onClick={() => navigate("/merch")} 
                    size="large"
                    variant="text"
                />
            </div>
        </header>
    );
};

export default Header;