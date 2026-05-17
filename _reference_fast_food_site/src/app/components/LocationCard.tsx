import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Button } from './ui/button';

interface LocationCardProps {
  name: string;
  address: string;
  hours: string;
  phone: string;
  isOpen: boolean;
}

export function LocationCard({ name, address, hours, phone, isOpen }: LocationCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle>{name}</CardTitle>
          <Badge variant={isOpen ? "default" : "secondary"}>
            {isOpen ? 'Aberto' : 'Fechado'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-start gap-2">
          <MapPin className="size-4 mt-0.5 text-muted-foreground" />
          <p className="text-sm">{address}</p>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="size-4 text-muted-foreground" />
          <p className="text-sm">{hours}</p>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="size-4 text-muted-foreground" />
          <p className="text-sm">{phone}</p>
        </div>
        <Button className="w-full mt-4" variant="outline">
          <MapPin className="size-4 mr-2" />
          Ver no Mapa
        </Button>
      </CardContent>
    </Card>
  );
}
