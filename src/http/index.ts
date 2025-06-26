import senhorDosAneisImg from "../assets/images/imgBooks/osenhordosaneis-asda.jpg";
import orwell1984Img from "../assets/images/imgBooks/1984.jpg";
import cemAnosSolidaoImg from "../assets/images/imgBooks/100cads.jpg";
import pequenoPrincipeImg from "../assets/images/imgBooks/opp.jpg";
import domQuixoteImg from "../assets/images/imgBooks/dq.jpg";

export function getCategories() {
  return [
    {
      name: "O Senhor dos Anéis: A Sociedade do Anel",
      img: senhorDosAneisImg,
      information: [
        "Fantasia Aventura",
        "Reino Unido",
        "J. R. R. Tolkien",
        1954,
        576,
      ],
    },
    {
      name: "1984",
      img: orwell1984Img,
      information: [
        "Ficção Distópica",
        "Reino Unido",
        "George Orwell",
        1949,
        328,
      ],
    },
    {
      name: "Cem Anos de Solidão",
      img: cemAnosSolidaoImg,
      information: [
        "Realismo Mágico",
        "Colômbia",
        "Gabriel García Márquez",
        1967,
        417,
      ],
    },
    {
      name: "O Pequeno Príncipe",
      img: pequenoPrincipeImg,
      information: [
        "Literatura Infantil Filosófica",
        "França",
        "Antoine de Saint-Exupéry",
        1943,
        96,
      ],
    },
    {
      name: "Dom Quixote",
      img: domQuixoteImg,
      information: [
        "Romance Satírico",
        "Espanha",
        "Miguel de Cervantes",
        1605,
        1072,
      ],
    },
  ];
}
