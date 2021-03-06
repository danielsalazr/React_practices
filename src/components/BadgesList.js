import React from 'react';
import './styles/BadgeList.css';

import {Link} from 'react-router-dom';
import Gravatar from './Gravatar';

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}
class BadgesList extends React.Component {


    render() {
      
      if (this.props.badges.length === 0){
        return (
          <div>
            <h3>No encontramos ningun badge</h3>
            <Link to="/badges/new" className="btn btn-primary">
              Create new Badge
            </Link>
          </div>
        )
      }
        return(
            <div className="list-unlisted">
                <ul className="list-unstyled" >
                    {this.props.badges.map((badge) => {
                        //ponemos el key para que react pueda verificar que los datos se renderisen sin repetirse
                        return (
                            <li key={badge.id}>   
                                <BadgesListItem badge={badge} />
                            </li>)
                    })}
                </ul>
            </div>
        
                        )
    }
}

export default BadgesList;