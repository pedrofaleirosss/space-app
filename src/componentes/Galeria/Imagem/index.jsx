import styled from "styled-components";
import BotaoIcone from "../../BotaoIcone";

const FigureEstilizada = styled.figure`
  width: ${(props) => (props.$expandida ? "90%" : "460px")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001634;
    padding: 16px;
    border-radius: 0 0 20px 20px;
    color: white;
    box-sizing: border-box;
  }
  h3 {
    font-family: "GandhiSansBold";
  }
  h4 {
    flex-grow: 1;
  }
  h3,
  h4 {
    margin: 0;
    font-size: 16px;
    font-weight: 400;
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  div {
    display: flex;
  }
`;

const Imagem = ({
  foto,
  expandida = false,
  aoZoomSolicitado,
  aoAlternarFavorito,
}) => {
  const iconeFavorito = foto.favorita
    ? "/icones/favorito-ativo.png"
    : "/icones/favorito.png";

  return (
    <FigureEstilizada $expandida={expandida}>
      <img src={foto.path} alt={foto.alt} />
      <figcaption>
        <h3>{foto.titulo}</h3>
        <footer>
          <h4>{foto.fonte}</h4>
          <div>
            <BotaoIcone onClick={() => aoAlternarFavorito(foto)}>
              <img src={iconeFavorito} alt="Botão favoritar" />
            </BotaoIcone>
            {!expandida && (
              <BotaoIcone onClick={() => aoZoomSolicitado(foto)}>
                <img src="/icones/expandir.png" alt="Botão expandir" />
              </BotaoIcone>
            )}
          </div>
        </footer>
      </figcaption>
    </FigureEstilizada>
  );
};

export default Imagem;
