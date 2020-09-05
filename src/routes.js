import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import Login from './pages/cadastro/Login';
import Register from './pages/cadastro/Register';

import NotFound from './pages/NotFound';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route path="/home" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/cadastro/video" component={CadastroVideo}/>
                <Route path="/cadastro/categoria" component={CadastroCategoria}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
};