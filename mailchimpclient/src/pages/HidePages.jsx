import React from 'react'
import '../styles/HidePages.css'
import { useNavigate } from 'react-router-dom'
const HidePages = () => {
    const navigate = useNavigate();
    return (
        <div style={{ padding: '30px' }}>
            <h2>Our Hide Pages</h2>
            <br />
            <div className="item">
                <button onClick={() => navigate("/addcontacts")}>Add Contact</button>
                <button onClick={() => navigate("/viewallcompaingshides")}>View All Comapings</button>
                {/* Edit campaings or edit report pages */}
                <button onClick={() => navigate("/myreports")}>View All Reports</button>
                <button onClick={() => navigate("/viewfroms")}>View Froms</button>
                <button onClick={() => navigate("/from")}>Add From</button>
            </div>
        </div>
    )
}

export default HidePages