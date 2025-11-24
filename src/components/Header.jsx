import styled from "styled-components";


export const Header = () => {
return (
<HeaderContainer>
<HeaderTitle>Portal de Vagas</HeaderTitle>
</HeaderContainer>
);
};


const HeaderContainer = styled.header`
width: 100%;
padding: 20px;
background: #4f46e5;
color: #fff;
display: flex;
justify-content: center;
align-items: center;
`;


const HeaderTitle = styled.h1`
font-size: 2rem;
font-weight: bold;
`;
