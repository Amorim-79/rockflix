import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

import NotFound from './pages/NotFound';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/cadastro/video" component={CadastroVideo}/>
                <Route path="/cadastro/categoria" component={CadastroCategoria}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
};