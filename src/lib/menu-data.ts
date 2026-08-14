import carne from "@/assets/pastel-carne.jpeg";
import fantaUva from "@/assets/fanta-uva.webp";
import coca from "@/assets/coca-cola.webp";
import sprite from "@/assets/sprite.webp";
import carneq from "@/assets/pastel-carne-queijo.png";
import molhoRolih from "@/assets/molho-rolih.png";
import rolih from "@/assets/pastel-especial-rolih.png";
import carneovo from "@/assets/pastel-carne-ovo.png";
import bauru from "@/assets/pastel-bauru.png";
import frangoq from "@/assets/pastel-frango-queijo.png";
import pizza from "@/assets/pastel-pizza.png";
import queijo from "@/assets/pastel-queijo.png";
import frango from "@/assets/pastel-frango.png";
import requeijao from "@/assets/frango-requeijao.png";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  tag?: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  subtitle: string;
  items: MenuItem[];
};

export const WHATSAPP_NUMBER = "5511949423560";

export const categories: MenuCategory[] = [
  {
    id: "tradicionais",
    name: "Tradicionais",
    subtitle: "Os clássicos que fizeram a casa — massa fininha e crocante",
    items: [
      {
        id: "t-frango",
        name: "Pastel de Frango",
        description: "Frango desfiado temperado e soltinho na hora.",
        price: 13,
        image: frango,
      },
      {
        id: "t-bauru",
        name: "Pastel Bauru",
        description: "Presunto, queijo mussarela e rodela de tomate com orégano.",
        price: 13,
        image: bauru,
      },
      {
        id: "t-carne",
        name: "Pastel de Carne",
        description: "Carne moída suculenta refogada com temperos da casa.",
        price: 15,
        image: carne,
        tag: "Mais pedido",
      },
      {
        id: "t-queijo",
        name: "Pastel de Queijo",
        description: "Mussarela derretida de ponta a ponta, do jeitinho que puxa.",
        price: 15,
        image: queijo,
      },
      {
        id: "t-pizza",
        name: "Pastel de Pizza",
        description: "Mussarela, tomate e orégano — a pizza em formato de pastel.",
        price: 15,
        image: pizza,
      },
    ],
  },
  {
    id: "especiais",
    name: "Especiais",
    subtitle: "Recheios generosos, feitos para dividir (ou não)",
    items: [
      {
        id: "e-frango-requeijao",
        name: "Frango com Requeijão",
        description: "Frango desfiado com requeijão cremoso derretendo a cada mordida.",
        price: 18,
        image: requeijao,
        tag: "Favorito da casa",
      },
      {
        id: "e-frango-queijo",
        name: "Frango com Queijo",
        description: "Frango temperado e mussarela em camadas bem servidas.",
        price: 18,
        image: frangoq,
      },
      {
        id: "e-carne-queijo",
        name: "Carne com Queijo",
        description: "Carne moída da casa bem temperada com mussarela cremosa.",
        price: 18,
        image: carneq,
      },
      {
        id: "e-carne-ovo",
        name: "Carne com Ovo",
        description: "Carne moída bem temperada e soltinha com ovo cozido no dia — receita de família.",
        price: 18,
        image: carneovo,
      },
      {
        id: "e-especial-rolih",
        name: "Mega Rolih",
        description: "Carne, queijo, frango, ovo, Requeijão e Presunto.",
        price: 20,
        image: rolih,
      },
    ],
  },
  {
    id: "molhos",
    name: "Molhos da Casa",
    subtitle: "Nossa assinatura: cada pastel merece o molho certo",
    items: [
      {
        id: "m-verde",
        name: "Molho Verde Rolih",
        description: "Cremoso, encorpado e levemente tostado. O queridinho da galera.",
        price: 3,
        image: molhoRolih,
      },
      
    ],
  },
  {
    id: "bebidas",
    name: "Bebidas",
    subtitle: "Geladas para acompanhar",
    items: [
      {
        id: "b-fantaUva-220ml",
        name: "Fanta Uva 220ml",
        description: "Refrigerante Fanta Uva, 220ml.",
        price: 5,
        image: fantaUva,
      },
      {
        id: "b-Sprite-220ml",
        name: "Sprite 220ml",
        description: "Refrigerante Sprite, 220ml.",
        price: 5,
        image: sprite,
      },
      {
        id: "b-Coca-220ml",
        name: "Coca-Cola 220ml",
        description: "Refrigerante Coca-Cola, 220ml.",
        price: 5,
        image: coca,
      },
      
    ],
  },
];

export const highlights: MenuItem[] = [
  "e-frango-requeijao",
  "t-carne",
  "m-alho",
  "b-caldo",
]
  .map((id) => categories.flatMap((c) => c.items).find((item) => item.id === id))
  .filter((item): item is MenuItem => Boolean(item));


export const formatPrice = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
