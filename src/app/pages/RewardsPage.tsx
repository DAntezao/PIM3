import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Button } from '../components/ui/button';
import { Gift, Award, TrendingUp, Star } from 'lucide-react';
import { toast } from 'sonner';

interface RewardsPageProps {
  points: number;
}

const rewards = [
  {
    id: 1,
    name: 'Batata Frita Grátis',
    points: 100,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=200&h=150&fit=crop',
    description: 'Resgate uma porção de batata frita média'
  },
  {
    id: 2,
    name: 'Refrigerante Grátis',
    points: 150,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=200&h=150&fit=crop',
    description: 'Resgate um refrigerante 500ml'
  },
  {
    id: 3,
    name: 'Desconto 20% no Combo',
    points: 250,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=150&fit=crop',
    description: '20% de desconto em qualquer combo'
  },
  {
    id: 4,
    name: 'Burger Grátis',
    points: 400,
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=200&h=150&fit=crop',
    description: 'Resgate um hambúrguer de sua escolha'
  },
  {
    id: 5,
    name: 'Combo Completo Grátis',
    points: 800,
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=200&h=150&fit=crop',
    description: 'Combo com burger, batata e bebida'
  },
];

const recentTransactions = [
  { id: 1, type: 'earned', points: 50, description: 'Compra no Shopping Center', date: '15/05/2026' },
  { id: 2, type: 'earned', points: 75, description: 'Compra em Pinheiros', date: '10/05/2026' },
  { id: 3, type: 'redeemed', points: -100, description: 'Resgate: Batata Frita', date: '08/05/2026' },
  { id: 4, type: 'earned', points: 60, description: 'Compra em Jardins', date: '03/05/2026' },
];

export function RewardsPage({ points }: RewardsPageProps) {
  const nextMilestone = 500;
  const progress = (points / nextMilestone) * 100;

  const handleRedeem = (rewardName: string, rewardPoints: number) => {
    if (points >= rewardPoints) {
      toast.success(`${rewardName} resgatado com sucesso!`);
    } else {
      toast.error(`Você precisa de ${rewardPoints - points} pontos a mais`);
    }
  };

  return (
    <div className="container px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2">Programa de Pontos</h1>
        <p className="text-muted-foreground">
          Acumule pontos e troque por recompensas incríveis!
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="size-5 text-primary" />
              Seus Pontos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl mb-4">{points} pontos</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Próxima recompensa</span>
                <span>{nextMilestone} pontos</span>
              </div>
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-muted-foreground">
                Faltam {nextMilestone - points} pontos
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="size-5 text-primary" />
              Como Ganhar Pontos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Star className="size-4 text-primary" />
              </div>
              <div>
                <p>Ganhe 10 pontos a cada R$ 10 em compras</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Star className="size-4 text-primary" />
              </div>
              <div>
                <p>Bônus de 100 pontos no seu aniversário</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Star className="size-4 text-primary" />
              </div>
              <div>
                <p>Indique amigos e ganhe 50 pontos</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="mb-4">Recompensas Disponíveis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rewards.map((reward) => (
            <Card key={reward.id} className="overflow-hidden">
              <div className="h-32 overflow-hidden bg-muted">
                <img
                  src={reward.image}
                  alt={reward.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{reward.name}</CardTitle>
                  <Badge variant="secondary">
                    {reward.points} pts
                  </Badge>
                </div>
                <CardDescription>{reward.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full"
                  variant={points >= reward.points ? "default" : "outline"}
                  onClick={() => handleRedeem(reward.name, reward.points)}
                >
                  <Gift className="size-4 mr-2" />
                  {points >= reward.points ? 'Resgatar' : 'Pontos Insuficientes'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-4">Histórico de Pontos</h2>
        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div className={`size-10 rounded-full flex items-center justify-center ${
                      transaction.type === 'earned' ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      {transaction.type === 'earned' ? (
                        <TrendingUp className="size-5 text-green-600" />
                      ) : (
                        <Gift className="size-5 text-red-600" />
                      )}
                    </div>
                    <div>
                      <p>{transaction.description}</p>
                      <p className="text-sm text-muted-foreground">{transaction.date}</p>
                    </div>
                  </div>
                  <div className={`font-medium ${
                    transaction.type === 'earned' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.points > 0 ? '+' : ''}{transaction.points} pts
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
