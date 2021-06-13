import React from 'react';
import '../components/styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
    state = {
        // Para evotar los anuncios de warning es recomendable inivcializar los valores del formulario
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        }
    };

    handleChange = (e) => {

        // las 2 siguientes lineas se ponen por  ue setState sobreescribe el estado de form
        // con esto se evita que solo se guarde una variable y se puedan almacenar todas las 
        // que deben almacenarse en form

        // const nextForm = this.state.form
        // nextForm[e.target.name] = e.target.value

        this.setState({
            //form : nextForm
            form :{
                ...this.state.form, // esta linea reemplaza las anteriores que se utilizan para evitar la sobreescritura
            [e.target.name] : e.target.value
            }
            
        })
    }
    render() {
        return (
            <div>
                <Navbar/>
                <div className="BadgeNew__hero">
                    <img className= "img-fluid" src={header}alt="Logo" />
                </div>
                <div className="container">
                        <div className="row">
                            <div className="col">
                                <Badge 
                                firstName={this.state.form.firstName} 
                                lastName={this.state.form.lastName} 
                                avatarUrl ="https://www.gravatar.com/avatar?d=identicon"
                                jobTitle = {this.state.form.jobTitle} 
                                email ={this.state.form.email} 
                                twitter = {this.state.form.twitter} 
                                 />
                            </div>
                            <div className="col">
                                <BadgeForm  
                                onChange={this.handleChange} 
                                formValues={this.state.form} 

                                />
                            </div>
                        </div>
                    </div>
            </div>
        )
    }

}

export default BadgeNew;