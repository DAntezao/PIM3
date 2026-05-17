import { Link, useLocation } from 'react-router';
import { User, MapPin, Award } from 'lucide-react';
import { Button } from './ui/button';
import { CartDrawer, CartItem } from './CartDrawer';

interface HeaderProps {
  isLoggedIn: boolean;
  userName?: string;
  points?: number;
  onLogout?: () => void;
  cartItems?: CartItem[];
  onUpdateQuantity?: (id: number, quantity: number) => void;
  onRemoveItem?: (id: number) => void;
}

export function Header({
  isLoggedIn,
  userName,
  points,
  onLogout,
  cartItems = [],
  onUpdateQuantity = () => {},
  onRemoveItem = () => {}
}: HeaderProps) {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-10 rounded-lg bg-destructive flex items-center justify-center">
            <span className="text-xl">🍔</span>
          </div>
          <h1 className="text-xl">Burger Nation</h1>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={`transition-colors hover:text-foreground/80 ${
              location.pathname === '/' ? 'text-foreground' : 'text-foreground/60'
            }`}
          >
            Cardápio
          </Link>
          <Link
            to="/locations"
            className={`flex items-center gap-2 transition-colors hover:text-foreground/80 ${
              location.pathname === '/locations' ? 'text-foreground' : 'text-foreground/60'
            }`}
          >
            <MapPin className="size-4" />
            Unidades
          </Link>
          {isLoggedIn && (
            <Link
              to="/rewards"
              className={`flex items-center gap-2 transition-colors hover:text-foreground/80 ${
                location.pathname === '/rewards' ? 'text-foreground' : 'text-foreground/60'
              }`}
            >
              <Award className="size-4" />
              Pontos
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-4">
          <CartDrawer
            items={cartItems}
            onUpdateQuantity={onUpdateQuantity}
            onRemoveItem={onRemoveItem}
          />
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <Link to="/rewards" className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg bg-accent">
                <Award className="size-4 text-primary" />
                <span className="font-medium">{points} pts</span>
              </Link>
              <div className="flex items-center gap-2">
                <User className="size-5" />
                <span className="hidden md:inline">{userName}</span>
              </div>
              <Button variant="ghost" size="sm" onClick={onLogout}>
                Sair
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button>
                <User className="size-4 mr-2" />
                Entrar
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
