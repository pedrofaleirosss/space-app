import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const SecaoFluida = styled.section`
  flex-grow: 1;
`;

const ImagensContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const Galeria = ({
  aoFotoSelecionada,
  fotos = [],
  aoAlternarFavorito,
  setTag,
  tag,
}) => {
  return (
    <>
      <Tags setTag={setTag} tagSelecionada={tag} />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <ImagensContainer>
            {fotos.map((foto) => (
              <Imagem
                aoZoomSolicitado={aoFotoSelecionada}
                aoAlternarFavorito={aoAlternarFavorito}
                foto={foto}
                key={foto.id}
              />
            ))}
          </ImagensContainer>
        </SecaoFluida>
        <Populares fotos={fotos} />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
