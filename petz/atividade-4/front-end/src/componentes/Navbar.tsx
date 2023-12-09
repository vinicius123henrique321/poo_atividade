import { Component } from "react";
import { Link } from "react-router-dom";
import "../style/detail.css"

class Navbar extends Component {
    render () {
        return (
            <nav className="navbar custom-bg-color sticky-top mb-5" style={{ backgroundColor: "#4D7A8C" }}>
                <div className="container-fluid ">
                <div style={{ display: 'flex', alignItems: 'center', gap: "10px" }}>
                    <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                            <span className="navbar-toggler-icon custom-toggler-span text-white custom-span"></span>
                        </button>
                        <Link to={'/'} className="navbar-brand list-group-item link-hover" style={{ color: '#FAFAF3', fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 600 }}>
                        🦴 Petz
                        </Link>
                </div>
                    <div className="offcanvas offcanvas-start text-bg-dark" tabIndex={ -1 } id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                        <div className="d-flex align-items-center">
                            {/* imagem aqui */}
                            <div className="fw-bold my-2 " style={{ fontSize: '20px' }}>
                            <span style={{ marginRight: '5px' }}>🐾</span>Cadastros
                        </div>
                            </div>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                        <div className="list-group list-group-flush">
                            <div className="fw-bold my-2" style={{ fontSize: '20px' }}>Lista</div>
                            <Link to={'/'} className="list-group-item bg-dark text-white py-1 border-dark " style={{ fontSize: '16px', width: 'fit-content', display: 'inline-block', padding: 0 }}>Lista de clientes</Link>
                            <div className="list-group list-group-flush my-4">
                                <div className="fw-bold my-2" style={{ fontSize: '20px' }}>Cadastro</div>
                                <Link to={ '/cadastro' } className="list-group-item bg-dark text-white py-1 border-dark" style={{ fontSize: '16px', width: 'fit-content', display: 'inline-block', padding: 0 }}> cadastrar um novo cliente </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;