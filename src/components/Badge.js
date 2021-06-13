import React from 'react';

import "./styles/Badge.css"
import confLogo from '../images/badge-header.svg';

// Los componentes son clases 
// La clase Badge extendera la clase React.component
class Badge extends React.Component {

    // el metodo por defecto que requieren los componentes 
    //  es render

    //En react utilizamos className en vez de class
    render() {
        return (<div className="Badge"> 
            <h1>Badge</h1>
            <div className="Badge__header">
                <img src={confLogo} alt="Logo de la conferencia"/>
            </div>
            <div className='Badge__section-name'>
                <img className='Badge__avatar' src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
                <h1>Soy el perris <br/> Salazar</h1>
            </div>
            <div className="Badge__section-info">
                <h3>Ingeniero electronico</h3>
                <div>@soyTuPapi</div>
            </div>
            <div className="Badge__footer"> #Ganador </div>

        </div>)
    }
}


export default Badge;