import { LocationCard } from '../components/LocationCard';

const locations = [
  {
    id: 1,
    name: 'Burger Nation Shopping Center',
    address: 'Av. Paulista, 1000 - Bela Vista, São Paulo - SP',
    hours: 'Seg-Sáb: 10h às 22h | Dom: 12h às 20h',
    phone: '(11) 3000-1234',
    isOpen: true
  },
  {
    id: 2,
    name: 'Burger Nation Jardins',
    address: 'Rua Augusta, 2500 - Jardins, São Paulo - SP',
    hours: 'Seg-Dom: 11h às 23h',
    phone: '(11) 3000-5678',
    isOpen: true
  },
  {
    id: 3,
    name: 'Burger Nation Vila Mariana',
    address: 'Av. Domingos de Morais, 1500 - Vila Mariana, São Paulo - SP',
    hours: 'Seg-Dom: 11h às 22h',
    phone: '(11) 3000-9012',
    isOpen: false
  },
  {
    id: 4,
    name: 'Burger Nation Pinheiros',
    address: 'Rua Teodoro Sampaio, 800 - Pinheiros, São Paulo - SP',
    hours: 'Seg-Sex: 10h às 23h | Sáb-Dom: 11h às 00h',
    phone: '(11) 3000-3456',
    isOpen: true
  },
  {
    id: 5,
    name: 'Burger Nation Moema',
    address: 'Av. Ibirapuera, 3000 - Moema, São Paulo - SP',
    hours: 'Seg-Dom: 11h às 22h',
    phone: '(11) 3000-7890',
    isOpen: true
  },
  {
    id: 6,
    name: 'Burger Nation Tatuapé',
    address: 'Rua Tuiuti, 2000 - Tatuapé, São Paulo - SP',
    hours: 'Seg-Dom: 10h às 22h',
    phone: '(11) 3000-2345',
    isOpen: true
  },
];

export function LocationsPage() {
  return (
    <div className="container px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2">Nossas Unidades</h1>
        <p className="text-muted-foreground">
          Encontre a loja mais próxima de você para retirar seu pedido
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((location) => (
          <LocationCard
            key={location.id}
            name={location.name}
            address={location.address}
            hours={location.hours}
            phone={location.phone}
            isOpen={location.isOpen}
          />
        ))}
      </div>
    </div>
  );
}
