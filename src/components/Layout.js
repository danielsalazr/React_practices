import React from 'react';
import Navbar from './Navbar';

function Layout(props) {

    const children = props.children;

    // React.Fragment nos va a permitir insertar mas de 1 elemento al renderizado
    // y va a evitar qe nuestra pagina se llene de divs
    return (
        <React.Fragment>
            <Navbar />
            {children}
        </React.Fragment>   )
}

export default Layout;