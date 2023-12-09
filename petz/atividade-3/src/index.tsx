import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ListaClientes from "./pages/listaClientes";
import ListaPets from "./pages/listaPets";
import ListaProdutos from "./pages/listaProdutos";
import Formulario from "./pages/formularioCadastroCliente";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<ListaClientes />} />
          <Route path="/produtos" element={<ListaProdutos />} />
          <Route path="/pets" element={<ListaPets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
