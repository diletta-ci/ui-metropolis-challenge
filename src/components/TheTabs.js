import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CardHome from '../assets/media/Home (out of station).svg';
import CardIncidents from '../assets/media/Incidents (with incidents).svg';
import CardTopup from '../assets/media/Topup filled.svg';

function TheTabs() {
    return (
        <Tabs>
            <TabList className="tab-list">
                <Tab>Sobre ti</Tab>
                <Tab>Recarga</Tab>
                <Tab>Informaci&oacute;n</Tab>
            </TabList>
        
            <TabPanel className="tab-panel">
                <div className="info__cards">
                    <img src={CardHome} className="info__cards--home" alt="Home (out of station)" />
                    <img src={CardIncidents} className="info__cards--incidents" alt="Incidents (with incidents)" />
                    <img src={CardTopup} className="info__cards--topup" alt="Topup filled" />
                </div>
                <div className="info__content">
                    <h2>Averigua cuánto viajas</h2>
                    <p>Metropolis y el servicio de metro de Madrid mejora día a día gracias a la información que nos ofreces. Medimos las líneas y rutas más frecuentes y desarrollamos nuestras infraestructuras. Además podrás descubrir qué tipo de viajero eres y cuánto te mueves por la ciudad.</p>
                </div>
            </TabPanel>
            <TabPanel className="tab-panel">
                <div className="info__cards">
                    <img src={CardIncidents} className="info__cards--incidents" alt="Incidents (with incidents)" />
                    <img src={CardTopup} className="info__cards--topup" alt="Topup filled" />
                </div>
                <div className="info__content">
                    <h2>Recarga Titulo</h2>
                    <p>Olvidate de hacer largas colas en el metro y de no tener dinero en efectivo. Con tan sólo un click podrás cargar la cantidad de saldo que desees, además te avisaremos cuando tu saldo sea inferior al mínimo, para que solo te preocupes de lo importante.</p>
                </div>
            </TabPanel>
            <TabPanel className="tab-panel">
                <div className="info__cards">
                    <img src={CardTopup} className="info__cards--topup" alt="Topup filled" />
                </div>
                <div className="info__content">
                    <h2>Informaci&oacute;n</h2>
                    <p>Metropolis muestra los estados y horarios de las líneas a tiempo real. Puedes planear y confiar en la información que ofrecemos. Entérate de los incidentes, de la ubicación de tu próximo tren y de las combinaciones y transbordos posibles que te vengan mejor.</p>
                </div>
            </TabPanel>
        </Tabs>
    )
}

export default TheTabs;