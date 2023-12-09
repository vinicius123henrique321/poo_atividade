import { app } from "./app";

const PORT = 8080;

app.listen(PORT, () => console.log(`Rodando a aplicação na URL http://localhost:${ PORT }`));