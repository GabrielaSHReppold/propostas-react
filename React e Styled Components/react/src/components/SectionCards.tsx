import { Card } from "../components/styleds/card";
import { Avatar } from "./styleds/Avatar";
import { Container } from "./styleds/Container";

import image2 from "../assets/imagens/image2.png";
import image3 from "../assets/imagens/image3.png";
import image4 from "../assets/imagens/image4.png";

type CardContent = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
};

const cardsContent: CardContent[] = [
  {
    imgSrc: image2,
    imgAlt: "Ícone de desktop",
    title: "Somente para desktop",
    description: "Vamos aprender como utilizar um framework.",
  },
  {
    imgSrc: image3,
    imgAlt: "Ícone de componentes",
    title: "Criado com componentes",
    description: "Utilizamos o Styled Components.",
  },
  {
    imgSrc: image4,
    imgAlt: "Ícone de aproveitamento",
    title: "Fácil aproveitamento",
    description: "Estamos no caminho.",
  },
];

export function SectionCards() {
  return (
    <Container>
      {cardsContent.map((card, index) => (
        <Card key={index}>
          <Avatar src={card.imgSrc} alt={card.imgAlt} />
          <h2>{card.title}</h2>
          <p>{card.description}</p>
        </Card>
      ))}
    </Container>
  );
}
