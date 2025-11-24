import styled from "styled-components";


export const Hero = () => {
return (
<HeroArea>
<HeroTitle>Encontre a vaga perfeita para você</HeroTitle>
<HeroSubtitulo>As melhores oportunidades em um só lugar</HeroSubtitulo>
</HeroArea>
);
};


const HeroArea = styled.section`
padding: 60px 20px;
text-align: center;
background: #eef2ff;
`;


const HeroTitle = styled.h2`
font-size: 2.2rem;
margin-bottom: 10px;
`;


const HeroSubtitulo = styled.p`
font-size: 1.2rem;
color: #555;
`;
