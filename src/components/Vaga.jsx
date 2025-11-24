import styled from "styled-components";


export const Vaga = ({ titulo, descricao, salario }) => {
return (
<VagaCard>
<h3>{titulo}</h3>
<p>{descricao}</p>
<span>Salário: R$ {salario}</span>
</VagaCard>
);
};


const VagaCard = styled.div`
border: 1px solid #ddd;
padding: 20px;
border-radius: 12px;
background: #fff;
display: flex;
flex-direction: column;
gap: 10px;


h3 {
margin: 0;
font-size: 1.4rem;
}


p {
color: #444;
}


span {
font-weight: bold;
color: #4f46e5;
}
`;
