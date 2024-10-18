import React from 'react';
import './Header.css'; 
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom';
const Header: React.FC = () => {
    const navigate = useNavigate()
    return (
        <header className="header">
        <Button
                label="About"
                onClick={() => navigate("/about")} 
                color="purple"
                size="large"
            />
            <Button
                label="Home"
                onClick={() => window.open("http://localhost:5173/about")} 
                color="purple"
                size="large"
            />
            <Button
                label="Talent"
                onClick={() => window.open("http://localhost:5173/about")} 
                color="purple"
                size="large"
            />
            <Button
                label="News"
                onClick={() => window.open("http://localhost:5173/about")} 
                color="purple"
                size="large"
            />
            <Button
                label="Merch"
                onClick={() => window.open("http://localhost:5173/about")} 
                color="purple"
                size="large"
            /> 
        </header>
    );
};

export default Header;