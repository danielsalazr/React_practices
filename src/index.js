import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
//import Badge from './components/Badge';
//import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';

//import './global.css';
//import App from './components/App';

//const container = document.getElementById('app');

//ReactDOM.render(<App />, container);


/*
const element = React.createElement('a', 
    {href:'https://google.com'},
    'Ir a google');
*/
/*const name = 'el dani'
const jsx =  <div>  
    <h1> hello perritos badges spy {name}</h1>
    <p> Soy el dani</p>
</div>
//const element = React.createElement('h1', {}, `Hola soy el ${name}`)
const element = React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'Hola soy el perris'),
    React.createElement('p', {}, 'el amigo del ms perrisimo')
);*/

const container = document.getElementById('app');

ReactDOM.render( <Badges /> , container);
