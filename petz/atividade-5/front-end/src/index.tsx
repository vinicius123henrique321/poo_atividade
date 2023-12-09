import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import ListaClientes from "./pages/ListaClientes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ListaProdutos from './pages/ListaProdutos';
import ListaServicos from './pages/ListaServicos';
import CadastroClientes from './pages/CadastroClientes';
import CadastroServicos from './pages/CadastroServicos';
import CadastroProdutos from './pages/CadastroProdutos';
import CadastroPets from './pages/CadastroPets';
import InfoCliente from './pages/InfoCliente';
import InfoProuto from './pages/InfoProduto';
import InfoServico from './pages/InfoServico';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <Routes>
            <Route element={ <App /> }>
                <Route index element={ <ListaClientes /> } />
                <Route path='/servico' element={ <ListaServicos /> } />
                <Route path='/produto' element={ <ListaProdutos /> } />
                <Route path='/cadastro'>
                    <Route path='cliente' element={ <CadastroClientes /> } />
                    <Route path='pet' element={ <CadastroPets /> } />
                    <Route path='servico' element={ <CadastroServicos /> } />
                    <Route path='produto' element={ <CadastroProdutos /> } />
                </Route>
                <Route path='/alterar'>
                    <Route path='cliente/:id' element={ <InfoCliente /> } />
                    {/* <Route path='pet/:id' element={ <InfoCliente /> } /> */}
                    <Route path='servico/:id' element={ <InfoServico /> } />
                    <Route path='produto/:id' element={ <InfoProuto /> } />
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
);