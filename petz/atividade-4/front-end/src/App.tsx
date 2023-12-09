import { Component } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./componentes/Navbar";

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