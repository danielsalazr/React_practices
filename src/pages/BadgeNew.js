import React from 'react';
import './styles/BadgeNew.css'
import header from '../images/platziconf.svg';

import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading  from '../components/PageLoading'
import api from '../api';


class BadgeNew extends React.Component {
    state = {
        
        // Para evotar los anuncios de warning es recomendable inivcializar los valores del formulario
        loading : false,
        error : null,
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

    handleSubmit = async e =>  {
        e.preventDefault();
        this.setState({ loading : true, error: null})

        try {
            await api.badges.create(this.state.form);
            this.setState({
                loading : false,
            })

        } catch (error) {
            this.setState({
                loading : false, error: error,
            })
        }
    }

    render() {
        if (this.state.loading) {
            return <PageLoading />
        }
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className= "img-fluid" src={header}alt="Logo" />
                </div>
                <div className="container">
                        <div className="row">
                            <div className="col">
                                <Badge 
                                firstName={this.state.form.firstName || 'name'} 
                                lastName={this.state.form.lastName || 'last name'} 
                                avatarUrl ="https://www.gravatar.com/avatar?d=identicon"
                                jobTitle = {this.state.form.jobTitle || 'Job'} 
                                email ={this.state.form.email || 'Email'} 
                                twitter = {this.state.form.twitter || 'Twitter'} 
                                 />
                            </div>
                            <div className="col">
                                <BadgeForm 
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form} 

                                />
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        )
    }

}

export default BadgeNew;