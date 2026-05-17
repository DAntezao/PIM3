import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { LocationsPage } from './pages/LocationsPage';
import { RewardsPage } from './pages/RewardsPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { Toaster } from './components/ui/sonner';
import { CartItem } from './components/CartDrawer';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isNew?: boolean;
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [points, setPoints] = useState(350);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleLogin = (email: string, name: string) => {
    setUserEmail(email);
    setUserName(name);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
    setUserEmail('');
  };

  const handleAddToCart = (item: MenuItem) => {
    setCartItems(prev => {
      const existingItem = prev.find(i => i.id === item.id);
      if (existingItem) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev =>
        prev.map(item => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleAddPoints = (pointsToAdd: number) => {
    setPoints(prev => prev + pointsToAdd);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Header
          isLoggedIn={isLoggedIn}
          userName={userName}
          points={points}
          onLogout={handleLogout}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
        />
        <main>
          <Routes>
            <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route
              path="/rewards"
              element={
                isLoggedIn ? (
                  <RewardsPage points={points} />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/checkout"
              element={
                <CheckoutPage
                  cartItems={cartItems}
                  userPoints={points}
                  onClearCart={handleClearCart}
                  onAddPoints={handleAddPoints}
                />
              }
            />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}