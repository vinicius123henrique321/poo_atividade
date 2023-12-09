import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import ListaClientes from "./pages/ListaClientes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import CadastroClientes from './pages/CadastroClientes';
import InfoCliente from './pages/InfoCliente';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <Routes>
            <Route element={ <App /> }>
                <Route index element={ <ListaClientes /> } />
                <Route path='/cadastro' element={ <CadastroClientes /> } />
                <Route path='/cliente/:id' element={ <InfoCliente /> } />
            </Route>
        </Routes>
    </BrowserRouter>
);