import styled from "styled-components";
import { Vaga } from "./Vaga";


export const ListaVagas = ({ vagas }) => {
return (
<QuadroVagas>
{vagas.map((v, index) => (
<Vaga key={index} titulo={v.titulo} descricao={v.descricao} salario={v.salario} />
))}
</QuadroVagas>
);
};


const QuadroVagas = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 20px;
padding: 20px;
`;
