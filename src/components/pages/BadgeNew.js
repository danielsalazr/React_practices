import React from 'react';
import '../styles/BadgeNew.css';
import header from '../../images/badge-header.svg';
import Navbar from '../Navbar';
import Badge from '../Badge';
import BadgeForm from '../BadgeForm';

class BadgeNew extends React.Component {
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
                                <Badge firstName="jerson" 
                                lastName="Vasquez"
                                avatarUrl ="https://www.gravatar.com/avatar?d=identicon"
                                jobTitle = "Listo para lo que venga"
                                twitter = "danielsalaz"/>
                            </div>
                            <div className="col">
                                <BadgeForm />
                            </div>
                        </div>
                    </div>
            </div>
        )
    }

}

export default BadgeNew;