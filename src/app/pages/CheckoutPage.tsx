import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Button } from '../components/ui/button';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Separator } from '../components/ui/separator';
import { Badge } from '../components/ui/badge';
import { MapPin, CreditCard, Wallet, Clock, Award } from 'lucide-react';
import { toast } from 'sonner';
import { CartItem } from '../components/CartDrawer';

interface CheckoutPageProps {
  cartItems: CartItem[];
  userPoints: number;
  onClearCart: () => void;
  onAddPoints: (points: number) => void;
}

export function CheckoutPage({ cartItems, userPoints, onClearCart, onAddPoints }: CheckoutPageProps) {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [usePoints, setUsePoints] = useState(false);

  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('São Paulo');
  const [zipCode, setZipCode] = useState('');

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 8.90;
  const pointsDiscount = usePoints && userPoints >= 100 ? 10 : 0;
  const total = subtotal + deliveryFee - pointsDiscount;
  const pointsToEarn = Math.floor(total / 10) * 10;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      toast.error('Seu carrinho está vazio!');
      return;
    }

    if (!address || !number || !neighborhood || !zipCode) {
      toast.error('Preencha todos os campos obrigatórios');
      return;
    }

    // Simular processamento do pedido
    toast.success('Pedido realizado com sucesso!');
    onAddPoints(pointsToEarn);
    onClearCart();

    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  if (cartItems.length === 0) {
    return (
      <div className="container px-4 py-16">
        <Card className="max-w-md mx-auto">
          <CardContent className="pt-6 text-center">
            <div className="size-16 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
              <MapPin className="size-8 text-muted-foreground" />
            </div>
            <h2 className="mb-2">Carrinho Vazio</h2>
            <p className="text-muted-foreground mb-6">
              Adicione itens ao seu carrinho para fazer um pedido
            </p>
            <Button onClick={() => navigate('/')}>
              Ver Cardápio
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container px-4 py-8">
      <h1 className="mb-8">Finalizar Pedido</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {/* Endereço de Entrega */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="size-5" />
                  Endereço de Entrega
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="zipCode">CEP *</Label>
                    <Input
                      id="zipCode"
                      placeholder="00000-000"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      required
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="address">Endereço *</Label>
                    <Input
                      id="address"
                      placeholder="Rua, Avenida..."
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="number">Número *</Label>
                    <Input
                      id="number"
                      placeholder="123"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="complement">Complemento</Label>
                    <Input
                      id="complement"
                      placeholder="Apto, Bloco..."
                      value={complement}
                      onChange={(e) => setComplement(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="neighborhood">Bairro *</Label>
                    <Input
                      id="neighborhood"
                      placeholder="Bairro"
                      value={neighborhood}
                      onChange={(e) => setNeighborhood(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">Cidade *</Label>
                    <Input
                      id="city"
                      placeholder="Cidade"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-accent">
                  <Clock className="size-4 text-muted-foreground" />
                  <span className="text-sm">Tempo estimado de entrega: 30-40 minutos</span>
                </div>
              </CardContent>
            </Card>

            {/* Forma de Pagamento */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="size-5" />
                  Forma de Pagamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent cursor-pointer">
                    <RadioGroupItem value="credit" id="credit" />
                    <Label htmlFor="credit" className="flex-1 cursor-pointer">
                      <div className="flex items-center gap-2">
                        <CreditCard className="size-4" />
                        <span>Cartão de Crédito</span>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent cursor-pointer">
                    <RadioGroupItem value="debit" id="debit" />
                    <Label htmlFor="debit" className="flex-1 cursor-pointer">
                      <div className="flex items-center gap-2">
                        <CreditCard className="size-4" />
                        <span>Cartão de Débito</span>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent cursor-pointer">
                    <RadioGroupItem value="pix" id="pix" />
                    <Label htmlFor="pix" className="flex-1 cursor-pointer">
                      <div className="flex items-center gap-2">
                        <Wallet className="size-4" />
                        <span>PIX</span>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent cursor-pointer">
                    <RadioGroupItem value="cash" id="cash" />
                    <Label htmlFor="cash" className="flex-1 cursor-pointer">
                      <div className="flex items-center gap-2">
                        <Wallet className="size-4" />
                        <span>Dinheiro</span>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </div>

          {/* Resumo do Pedido */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle>Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>
                        {item.quantity}x {item.name}
                      </span>
                      <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>R$ {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxa de entrega</span>
                    <span>R$ {deliveryFee.toFixed(2)}</span>
                  </div>
                  {pointsDiscount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Desconto (pontos)</span>
                      <span>- R$ {pointsDiscount.toFixed(2)}</span>
                    </div>
                  )}
                </div>

                <Separator />

                <div className="flex justify-between text-lg">
                  <span>Total</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>

                {userPoints >= 100 && (
                  <div className="p-3 rounded-lg bg-accent space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="usePoints" className="cursor-pointer flex items-center gap-2">
                        <Award className="size-4 text-primary" />
                        Usar 100 pontos
                      </Label>
                      <input
                        type="checkbox"
                        id="usePoints"
                        checked={usePoints}
                        onChange={(e) => setUsePoints(e.target.checked)}
                        className="size-4 cursor-pointer"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Ganhe R$ 10,00 de desconto usando seus pontos
                    </p>
                  </div>
                )}

                <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                  <div className="flex items-center gap-2 text-green-700">
                    <Award className="size-4" />
                    <span className="text-sm">
                      Você vai ganhar {pointsToEarn} pontos neste pedido!
                    </span>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Confirmar Pedido
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}
