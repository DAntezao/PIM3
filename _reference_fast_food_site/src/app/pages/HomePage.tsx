import { useState } from 'react';
import { MenuCard } from '../components/MenuCard';
import { ComboCard } from '../components/ComboCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { toast } from 'sonner';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isNew?: boolean;
  originalPrice?: number;
  includes?: string[];
  isPopular?: boolean;
}

const menuItems: MenuItem[] = [
  // Combos
  {
    id: 101,
    name: 'Combo Classic',
    description: 'A escolha perfeita para matar a fome',
    price: 39.90,
    originalPrice: 49.70,
    category: 'Combos',
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=300&fit=crop',
    includes: ['X-Burger Clássico', 'Batata Frita Média', 'Refrigerante 500ml'],
    isPopular: true
  },
  {
    id: 102,
    name: 'Combo Bacon Supreme',
    description: 'Para os amantes de bacon',
    price: 44.90,
    originalPrice: 55.70,
    category: 'Combos',
    image: 'https://images.unsplash.com/photo-1619740455993-557c4c90bb8e?w=400&h=300&fit=crop',
    includes: ['Bacon Burger', 'Batata Frita Grande', 'Refrigerante 500ml'],
    isPopular: false
  },
  {
    id: 103,
    name: 'Combo Duplo',
    description: 'Dois hambúrgueres para compartilhar',
    price: 59.90,
    originalPrice: 74.70,
    category: 'Combos',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop',
    includes: ['2x X-Burger Clássico', 'Batata Frita Grande', '2x Refrigerante 500ml'],
    isPopular: true
  },
  {
    id: 104,
    name: 'Combo Kids',
    description: 'Perfeito para as crianças',
    price: 29.90,
    originalPrice: 37.70,
    category: 'Combos',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop',
    includes: ['Mini Burger', 'Batata Pequena', 'Suco Natural', 'Brinde Surpresa'],
    isPopular: false
  },
  {
    id: 105,
    name: 'Combo Premium',
    description: 'A melhor experiência FastBurger',
    price: 69.90,
    originalPrice: 89.60,
    category: 'Combos',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop',
    includes: ['Double Smash Burger', 'Batata Frita Grande', 'Onion Rings', 'Milkshake'],
    isPopular: true
  },
  {
    id: 106,
    name: 'Combo Chicken',
    description: 'Para quem prefere frango',
    price: 42.90,
    originalPrice: 53.70,
    category: 'Combos',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop',
    includes: ['Chicken Burger', 'Nuggets (6un)', 'Batata Frita Média', 'Refrigerante 500ml'],
    isPopular: false
  },

  // Hambúrgueres
  {
    id: 1,
    name: 'X-Burger Clássico',
    description: 'Hambúrguer artesanal, queijo, alface, tomate e molho especial',
    price: 25.90,
    category: 'Hambúrgueres',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    isNew: false
  },
  {
    id: 2,
    name: 'Bacon Burger',
    description: 'Hambúrguer, bacon crocante, queijo cheddar, cebola caramelizada',
    price: 29.90,
    category: 'Hambúrgueres',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop',
    isNew: false
  },
  {
    id: 3,
    name: 'Chicken Burger',
    description: 'Frango empanado, maionese temperada, alface e picles',
    price: 24.90,
    category: 'Hambúrgueres',
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=300&fit=crop',
    isNew: false
  },
  {
    id: 10,
    name: 'Double Smash Burger',
    description: 'Dois hambúrgueres smash, queijo americano, picles e molho especial',
    price: 35.90,
    category: 'Hambúrgueres',
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop',
    isNew: true
  },
  {
    id: 11,
    name: 'BBQ Burger',
    description: 'Hambúrguer, bacon, onion rings, queijo e molho barbecue',
    price: 32.90,
    category: 'Hambúrgueres',
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&h=300&fit=crop',
    isNew: false
  },
  {
    id: 12,
    name: 'Veggie Burger',
    description: 'Hambúrguer vegetariano, queijo, alface, tomate e maionese de ervas',
    price: 27.90,
    category: 'Hambúrgueres',
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&h=300&fit=crop',
    isNew: true
  },
  {
    id: 13,
    name: 'Cheddar Bacon Burger',
    description: 'Hambúrguer, muito queijo cheddar derretido e bacon crocante',
    price: 31.90,
    category: 'Hambúrgueres',
    image: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400&h=300&fit=crop',
    isNew: false
  },
  {
    id: 14,
    name: 'Spicy Burger',
    description: 'Hambúrguer, jalapeños, pimenta, queijo pepper jack e molho picante',
    price: 28.90,
    category: 'Hambúrgueres',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop',
    isNew: true
  },

  // Acompanhamentos
  {
    id: 4,
    name: 'Batata Frita Grande',
    description: 'Porção generosa de batatas crocantes',
    price: 15.90,
    category: 'Acompanhamentos',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop',
    isNew: false
  },
  {
    id: 5,
    name: 'Onion Rings',
    description: 'Anéis de cebola empanados e crocantes',
    price: 18.90,
    category: 'Acompanhamentos',
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop',
    isNew: false
  },
  {
    id: 6,
    name: 'Nuggets (10un)',
    description: 'Nuggets crocantes de frango com molho barbecue',
    price: 22.90,
    category: 'Acompanhamentos',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop',
    isNew: false
  },
  {
    id: 15,
    name: 'Batata Rústica',
    description: 'Batatas rústicas com casca, temperadas com ervas',
    price: 17.90,
    category: 'Acompanhamentos',
    image: 'https://images.unsplash.com/photo-1639744091701-8b28f6a08a10?w=400&h=300&fit=crop',
    isNew: true
  },
  {
    id: 16,
    name: 'Batata Cheddar e Bacon',
    description: 'Batatas fritas cobertas com queijo cheddar e bacon',
    price: 24.90,
    category: 'Acompanhamentos',
    image: 'https://images.unsplash.com/photo-1630431341973-02e3b5a3e2b7?w=400&h=300&fit=crop',
    isNew: false
  },
  {
    id: 17,
    name: 'Chicken Tenders (6un)',
    description: 'Tiras de frango empanadas com molho à escolha',
    price: 26.90,
    category: 'Acompanhamentos',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop',
    isNew: false
  },
  {
    id: 18,
    name: 'Salada Caesar',
    description: 'Alface romana, croutons, parmesão e molho caesar',
    price: 19.90,
    category: 'Acompanhamentos',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
    isNew: false
  },

  // Bebidas
  {
    id: 7,
    name: 'Refrigerante 500ml',
    description: 'Coca-Cola, Guaraná ou Sprite',
    price: 7.90,
    category: 'Bebidas',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=300&fit=crop',
    isNew: false
  },
  {
    id: 8,
    name: 'Milkshake',
    description: 'Chocolate, morango ou baunilha',
    price: 16.90,
    category: 'Bebidas',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop',
    isNew: false
  },
  {
    id: 9,
    name: 'Suco Natural',
    description: 'Laranja, limão ou morango',
    price: 12.90,
    category: 'Bebidas',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop',
    isNew: false
  },
  {
    id: 19,
    name: 'Refrigerante 1L',
    description: 'Coca-Cola, Guaraná ou Sprite',
    price: 12.90,
    category: 'Bebidas',
    image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&h=300&fit=crop',
    isNew: false
  },
  {
    id: 20,
    name: 'Água Mineral',
    description: 'Água mineral 500ml',
    price: 4.90,
    category: 'Bebidas',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=300&fit=crop',
    isNew: false
  },
  {
    id: 21,
    name: 'Chá Gelado',
    description: 'Limão ou pêssego',
    price: 9.90,
    category: 'Bebidas',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
    isNew: true
  },
  {
    id: 22,
    name: 'Café Expresso',
    description: 'Café expresso tradicional',
    price: 6.90,
    category: 'Bebidas',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop',
    isNew: false
  },

  // Sobremesas
  {
    id: 23,
    name: 'Torta de Maçã',
    description: 'Torta crocante de maçã com canela',
    price: 12.90,
    category: 'Sobremesas',
    image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=400&h=300&fit=crop',
    isNew: false
  },
  {
    id: 24,
    name: 'Brownie com Sorvete',
    description: 'Brownie de chocolate quente com sorvete de baunilha',
    price: 18.90,
    category: 'Sobremesas',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop',
    isNew: true
  },
  {
    id: 25,
    name: 'Casquinha de Sorvete',
    description: 'Sorvete de chocolate, baunilha ou morango',
    price: 8.90,
    category: 'Sobremesas',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
    isNew: false
  },
  {
    id: 26,
    name: 'Donuts (3un)',
    description: 'Donuts variados com cobertura',
    price: 15.90,
    category: 'Sobremesas',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop',
    isNew: false
  },
];

interface HomePageProps {
  onAddToCart: (item: MenuItem) => void;
}

export function HomePage({ onAddToCart }: HomePageProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  const handleAddToCart = (item: MenuItem) => {
    onAddToCart(item);
    toast.success(`${item.name} adicionado ao carrinho!`);
  };

  return (
    <div className="container px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2">Nosso Cardápio</h1>
        <p className="text-muted-foreground">
          Escolha seus produtos favoritos e ganhe pontos a cada compra!
        </p>
      </div>

      <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
        <TabsList className="w-full md:w-auto grid grid-cols-3 md:grid-cols-6 gap-1">
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="Combos">Combos</TabsTrigger>
          <TabsTrigger value="Hambúrgueres">Burgers</TabsTrigger>
          <TabsTrigger value="Acompanhamentos">Acompanhamentos</TabsTrigger>
          <TabsTrigger value="Bebidas">Bebidas</TabsTrigger>
          <TabsTrigger value="Sobremesas">Sobremesas</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => {
          if (item.category === 'Combos') {
            return (
              <ComboCard
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                originalPrice={item.originalPrice || item.price}
                image={item.image}
                includes={item.includes || []}
                isPopular={item.isPopular}
                onAddToCart={() => handleAddToCart(item)}
              />
            );
          }
          return (
            <MenuCard
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              category={item.category}
              image={item.image}
              isNew={item.isNew}
              onAddToCart={() => handleAddToCart(item)}
            />
          );
        })}
      </div>
    </div>
  );
}
