import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Plus } from 'lucide-react';

interface MenuCardProps {
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isNew?: boolean;
  onAddToCart?: () => void;
}

export function MenuCard({
  name,
  description,
  price,
  category,
  image,
  isNew,
  onAddToCart
}: MenuCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        {isNew && (
          <Badge className="absolute top-2 right-2 bg-destructive text-destructive-foreground">
            Novo
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <Badge variant="secondary" className="mb-2">
          {category}
        </Badge>
        <h3 className="mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {description}
        </p>
        <p className="text-xl text-primary">
          R$ {price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" onClick={onAddToCart}>
          <Plus className="size-4 mr-2" />
          Adicionar
        </Button>
      </CardFooter>
    </Card>
  );
}
