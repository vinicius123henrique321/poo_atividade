import { Component } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import ListaCliente from "./pages/listaClientes";
import FormularioCadastroCliente from "./pages/formularioCadastroCliente";

class App extends Component {
    render() : JSX.Element {
        return (
            <> 
                <Navbar />
                <Outlet />
            </>
        );
    }
}

export default App;