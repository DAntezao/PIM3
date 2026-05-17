import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Plus, Check } from 'lucide-react';

interface ComboCardProps {
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
  includes: string[];
  isPopular?: boolean;
  onAddToCart?: () => void;
}

export function ComboCard({
  name,
  description,
  price,
  originalPrice,
  image,
  includes,
  isPopular,
  onAddToCart
}: ComboCardProps) {
  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        {isPopular && (
          <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
            Mais Vendido
          </Badge>
        )}
        {discount > 0 && (
          <Badge className="absolute top-2 right-2 bg-destructive text-destructive-foreground">
            {discount}% OFF
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-3">
          {description}
        </p>

        <div className="space-y-2 mb-4 p-3 rounded-lg bg-accent/50">
          <p className="text-sm font-medium">Inclui:</p>
          {includes.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <Check className="size-3 text-green-600" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {originalPrice > price && (
            <span className="text-sm text-muted-foreground line-through">
              R$ {originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-2xl text-primary">
            R$ {price.toFixed(2)}
          </span>
        </div>
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
