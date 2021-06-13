import React from 'react';
import './styles/BadgeList.css';


class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <img
          className="BadgesListItem__avatar"
          src={this.props.badge.avatarUrl}
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