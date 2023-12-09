import '../styles/detail.css'

export default function formularioCadastroCliente() {
    return (
        <div className="container">
                 <h1 className="pb-4">
                    <div className="rectangle"></div>
                    Cadastro de Clientes
                </h1>              
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome Social" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" >@</span>
                        <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3 d-flex justify-content-end ">
                        <button className="btn btn-outline-secondary" style={{ backgroundColor: "#4D7A8C", color: "#fff" }} type="button">Cadastrar</button>
                    </div>
                </form>
            </div>
    )
}