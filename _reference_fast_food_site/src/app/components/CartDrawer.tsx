import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerTrigger, DrawerFooter } from './ui/drawer';
import { Separator } from './ui/separator';
import { useNavigate } from 'react-router';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartDrawerProps {
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

export function CartDrawer({ items, onUpdateQuantity, onRemoveItem }: CartDrawerProps) {
  const navigate = useNavigate();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 relative transition-colors">
          <ShoppingCart className="size-5" />
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 size-5 rounded-full p-0 flex items-center justify-center">
              {totalItems}
            </Badge>
          )}
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Seu Carrinho ({totalItems} {totalItems === 1 ? 'item' : 'itens'})</DrawerTitle>
          <DrawerDescription>
            {totalItems === 0
              ? 'Adicione itens do cardápio ao seu carrinho'
              : 'Revise seus itens antes de finalizar o pedido'
            }
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4 pb-4 max-h-[60vh] overflow-y-auto">
          {items.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <ShoppingCart className="size-12 mx-auto mb-2 opacity-50" />
              <p>Seu carrinho está vazio</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="size-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="mb-1">{item.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      R$ {item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="size-8"
                        onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      >
                        <Minus className="size-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        size="icon"
                        variant="outline"
                        className="size-8"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="size-3" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="size-8 ml-auto"
                        onClick={() => onRemoveItem(item.id)}
                      >
                        <Trash2 className="size-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {items.length > 0 && (
          <DrawerFooter className="pt-4">
            <Separator className="mb-4" />
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg">Total</span>
              <span className="text-2xl">R$ {totalPrice.toFixed(2)}</span>
            </div>
            <Button size="lg" className="w-full" onClick={() => navigate('/checkout')}>
              Finalizar Pedido
            </Button>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
}
