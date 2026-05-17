import { LoginForm } from '../components/LoginForm';
import { useNavigate } from 'react-router';

interface LoginPageProps {
  onLogin: (email: string, name: string) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const navigate = useNavigate();

  const handleLogin = (email: string, name: string) => {
    onLogin(email, name);
    navigate('/');
  };

  return (
    <div className="container px-4 py-16 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="text-center mb-8">
        <h1 className="mb-2">Bem-vindo à Burger Nation</h1>
        <p className="text-muted-foreground">
          Entre ou cadastre-se para ganhar pontos e resgatar prêmios
        </p>
      </div>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}
