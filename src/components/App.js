import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './Layout';
import Badges from '../pages/Badges';
//import Badge from './components/Badge';
import BadgeNew from '../pages/BadgeNew';
import NotFound from '../pages/NotFound'

function App() {

    // hay que tener cuidado con los paths ya que react puede llevar a una pagina por coincidencia por sus primeros caracteres
    // para evitarlo hay que decirle que las rutas van a ser exactas
    return  (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
            
        </BrowserRouter>
    );
}

export default App;