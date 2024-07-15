import styled from "styled-components";
import Titulo from "../../Titulo";

const ColunaFotos = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Imagem = styled.img`
  max-width: 212px;
  border-radius: 20px;
`;

const Botao = styled.button`
  background-color: transparent;
  color: #ffffff;
  border: 2px solid #c98cf1;
  padding: 12px 20px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 16px;
`;

const Populares = ({ fotos }) => {
  return (
    <section>
      <Titulo $alinhamento="center">Populares</Titulo>
      <ColunaFotos>
        {fotos.map((foto) => (
          <Imagem key={foto.id} src={foto.path} alt={foto.alt} />
        ))}
      </ColunaFotos>
      <Botao>Ver mais</Botao>
    </section>
  );
};

export default Populares;