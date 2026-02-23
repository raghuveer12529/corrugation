import React from 'react';
import './StatsSection.css';

function StatsSection() {
    return (
        <div className="stats-container">
            <div className="stats-wrapper">
                <div className="stats-item">
                    <h2 className="stats-number">29</h2>
                    <p className="stats-label">Years of Experience</p>
                </div>
                <div className="stats-item">
                    <h2 className="stats-number">80+</h2>
                    <p className="stats-label">Employees</p>
                </div>
                <div className="stats-item">
                    <h2 className="stats-number">30+</h2>
                    <p className="stats-label">Global Customers</p>
                </div>
                <div className="stats-item">
                    <h2 className="stats-number">15000</h2>
                    <p className="stats-label">Ton's of Corrugated Boxes</p>
                </div>
            </div>
        </div>
    );
}

export default StatsSection;
