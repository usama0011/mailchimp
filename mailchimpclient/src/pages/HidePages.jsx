import React from 'react'
import '../styles/HidePages.css'
import { useNavigate } from 'react-router-dom'
const HidePages = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Our Hide Pages</h2>
            <br />
            <div className="item">
                <button onClick={() => navigate("/addcontacts")}>Add Contact</button>
                <button onClick={() => navigate("/viewallcompaingshides")}>View All Comapings</button>
                <button></button>
            </div>
        </div>
    )
}

export default HidePages