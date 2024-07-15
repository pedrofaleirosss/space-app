import styled from "styled-components";
import tags from "./tags.json";

const AreaTags = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 50px;
`;

const TituloTag = styled.h3`
  font-size: 24px;
  font-weight: 400;
  color: #d9d9d9;
  line-height: 28px;
`;

const ListaTags = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Tag = styled.button`
  padding: 12px;
  border-radius: 10px;
  border: none;
  background-color: rgba(217, 217, 217, 0.3);
  color: #d9d9d9;
  font-size: 24px;
  font-weight: 400;
  transition: background-color 0.3s ease;
  cursor: pointer;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #7b78e6;
  }
`;

const Tags = ({ setTag, tagSelecionada }) => {
  return (
    <AreaTags>
      <TituloTag>Busque por tags:</TituloTag>
      <ListaTags>
        {tags.map((tag) => (
          <Tag
            key={tag.id}
            onClick={() => setTag(tag.tag)}
            style={
              tagSelecionada === tag.tag
                ? { border: "2px solid #7b78e6" }
                : { border: "2px solid transparent" }
            }
          >
            {tag.titulo}
          </Tag>
        ))}
      </ListaTags>
    </AreaTags>
  );
};

export default Tags;
