import React from 'react';
import TheTabs from '../components/TheTabs';
import CardHome from '../assets/media/Home (out of station).svg';
import CardIncidents from '../assets/media/Incidents (with incidents).svg';
import CardTopup from '../assets/media/Topup filled.svg';
import '../assets/style/components/_info-section.scss';

function Tabs() {
    return (
        <div className="info-container">
            <div className="info__cards">
                <img src={CardHome} className="info__cards--home" alt="Home (out of station)" />
                <img src={CardIncidents} className="info__cards--incidents" alt="Incidents (with incidents)" />
                <img src={CardTopup} className="info__cards--topup" alt="Topup filled" />
            </div>
            <div className="info__tabs">
                <nav className="navigation">
                    <TheTabs /> 
                </nav>
            </div>
        </div>
    )
}

export default Tabs;