import React from 'react';

class BadgesList extends React.Component {

    render() {
        return(
        <ul className="list-unlisted">
                            {this.props.badges.map((badge) => {
                                //ponemos el key para que react pueda verificar que los datos se renderisen sin repetirse
                                return (
                                    <li key={badge.id}>   
                                        <p>
                                            {badge.firstName} {badge.lastName}
                                        </p>
                                    </li>)
                            })}
                        </ul>
                        )
    }
}

export default BadgesList;