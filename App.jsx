import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Formulario } from "./components/Formulario";
import { ListaVagas } from "./components/ListaVagas";


export default function App() {
const vagas = [
{ titulo: "Frontend Developer", descricao: "React, JS, CSS", salario: 4500 },
{ titulo: "Backend Developer", descricao: "Node, API, SQL", salario: 6000 },
];


return (
<>
<Header />
<Hero />
<Formulario />
<ListaVagas vagas={vagas} />
</>
);
}
