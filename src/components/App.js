import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Badges from '../pages/Badges';
//import Badge from './components/Badge';
import BadgeNew from '../pages/BadgeNew';

function App() {

    // hay que tener cuidado con los paths ya que react puede llevar a una pagina por coincidencia por sus primeros caracteres
    // para evitarlo hay que decirle que las rutas van a ser exactas
    return  (
        <BrowserRouter>
            <Switch>

                <Route exact path="/badges" component={Badges} />
                <Route exact path="/badges/new" component={BadgeNew} />
            </Switch>
            
        </BrowserRouter>
    );
}

export default App;