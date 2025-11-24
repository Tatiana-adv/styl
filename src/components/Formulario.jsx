import styled from "styled-components";


export const Formulario = () => {
return (
<FormBox>
<label>Buscar vaga:</label>
<input type="text" placeholder="Digite o nome da vaga" />
</FormBox>
);
};


const FormBox = styled.form`
display: flex;
flex-direction: column;
gap: 10px;
padding: 20px;
max-width: 400px;
margin: 0 auto;


label {
font-weight: 600;
}


input {
padding: 10px;
border-radius: 8px;
border: 1px solid #ccc;
}
`;
