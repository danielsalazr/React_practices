import React from 'react';

import "./styles/Badge.css"
import confLogo from '../images/badge-header.svg';
import Gravatar from './Gravatar'
// Los componentes son clases 
// La clase Badge extendera la clase React.component
class Badge extends React.Component {

    // el metodo por defecto que requieren los componentes 
    //  es render

    //En react utilizamos className en vez de class
    render() {

        // las props son las propiedades en su nombre abreviado
        // si modificamos parametros que no son props, no veremos interaccion 
        // en la pagina

        /*const {
            firstName,
            lastName,
            avatarUrl,
            jobTitle,
            twitter
            } = this.props;*/

        //const firstName ="Daniel";
        //const lastNAme ="Salazar"
        return (<div className="Badge"> 
            <h1>Badge</h1>
            <div className="Badge__header">
                <img src={confLogo} alt="Logo de la conferencia"/>
            </div>
            <div className='Badge__section-name'>
                <Gravatar 
                    classNAme='Badge__avatar' 
                    email={this.props.email} 
                    alt="Avatar"
                />
                <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
            </div>
            <div className="Badge__section-info">
                <h3>{this.props.jobTitle}</h3>
                <div>{this.props.twitter}</div>
            </div>
            <div className="Badge__footer"> #Ganador </div>

        </div>)
    }
}


export default Badge;