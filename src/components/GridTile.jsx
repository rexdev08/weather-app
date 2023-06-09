import styled from "styled-components";

const GridTile = (props) => {
  return (
    <Tile>
      <ImageContainer>
        <Image src={props.img} alt="" />
        {/* <span>{props.subtitle}</span> */}
      </ImageContainer>
      <TextContainer>
        <span>{props.line1}</span>
        <span>{props.line2}</span>
        <span>{props.line3}</span>
      </TextContainer>
    </Tile>
  );
};

const Tile = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: start;
  align-items: center;
  border-radius: 0.5rem;

  overflow: hidden;

  @media (min-width: 700px) {
    flex-flow: column;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 200px;
  background-color: #98dae3d2;
  display: grid;
  place-content: center;
  flex: 1;
  padding: 0.5rem;
`;
const Image = styled.img`
  width: clamp(50px, 7vw, 90px);
  aspect-ratio: 1/1;
  background-color: white;
  border-radius: 50%;
  outline: #2c2ce395 solid;
  padding: 0.5rem;
`;
const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #1616d4c3;
  padding: 0.5rem;
  color: white;
`;

export default GridTile;
