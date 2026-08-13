import carne from "@/assets/pastel-carne.jpg";
import queijo from "@/assets/pastel-queijo.jpg";
import frango from "@/assets/pastel-frango.jpg";
import bebidasImg from "@/assets/bebidas.jpg";

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

export const WHATSAPP_NUMBER = "5514999999999";

export const categories: MenuCategory[] = [
  {
    id: "tradicionais",
    name: "Tradicionais",
    subtitle: "Os clássicos que fizeram a casa — massa fininha e crocante",
    items: [
      {
        id: "t-frango",
        name: "Pastel de Frango",
        description: "Frango desfiado temperado na hora com cheiro-verde e milho.",
        price: 13,
        image: frango,
      },
      {
        id: "t-bauru",
        name: "Pastel Bauru",
        description: "Presunto, queijo mussarela e rodela de tomate com orégano.",
        price: 13,
      },
      {
        id: "t-carne",
        name: "Pastel de Carne",
        description: "Carne moída suculenta refogada com cebola e temperos da casa.",
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
        description: "Mussarela, tomate, presunto e orégano — a pizza em formato de pastel.",
        price: 15,
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
        image: frango,
        tag: "Favorito da casa",
      },
      {
        id: "e-frango-queijo",
        name: "Frango com Queijo",
        description: "Frango temperado e mussarela em camadas bem servidas.",
        price: 18,
      },
      {
        id: "e-carne-queijo",
        name: "Carne com Queijo",
        description: "Carne moída da casa com mussarela cremosa e pimenta opcional.",
        price: 18,
        image: carne,
      },
      {
        id: "e-carne-ovo",
        name: "Carne com Ovo",
        description: "Carne moída, ovo cozido e azeitona — receita de família.",
        price: 18,
      },
    ],
  },
  {
    id: "molhos",
    name: "Molhos da Casa",
    subtitle: "Nossa assinatura: cada pastel merece o molho certo",
    items: [
      {
        id: "m-alho",
        name: "Molho de Alho Rolih",
        description: "Cremoso, encorpado e levemente tostado. O queridinho da galera.",
        price: 5,
      },
      {
        id: "m-pimenta",
        name: "Pimenta Artesanal",
        description: "Pimenta dedo-de-moça curtida no azeite com alho.",
        price: 5,
      },
      {
        id: "m-barbecue",
        name: "Barbecue Defumado",
        description: "Agridoce na medida, com toque defumado de páprica.",
        price: 6,
      },
      {
        id: "m-cheddar",
        name: "Cheddar Cremoso",
        description: "Cheddar quentinho servido no potinho para mergulhar.",
        price: 7,
      },
    ],
  },
  {
    id: "bebidas",
    name: "Bebidas",
    subtitle: "Geladas para acompanhar",
    items: [
      {
        id: "b-caldo",
        name: "Caldo de Cana 500ml",
        description: "Moído na hora, servido bem gelado. Com limão, se preferir.",
        price: 9,
        image: bebidasImg,
      },
      {
        id: "b-refri-lata",
        name: "Refrigerante Lata",
        description: "Coca-Cola, Guaraná, Fanta ou Sprite.",
        price: 7,
      },
      {
        id: "b-suco",
        name: "Suco Natural 400ml",
        description: "Laranja, maracujá, abacaxi com hortelã ou limonada suíça.",
        price: 10,
      },
      {
        id: "b-agua",
        name: "Água Mineral",
        description: "Com ou sem gás, 500ml.",
        price: 5,
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
