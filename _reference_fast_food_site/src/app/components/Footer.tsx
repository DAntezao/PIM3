import { Link } from 'react-router';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { Separator } from './ui/separator';

export function Footer() {
  return (
    <footer className="border-t bg-muted/50 mt-16">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="size-10 rounded-lg bg-destructive flex items-center justify-center">
                <span className="text-xl">🍔</span>
              </div>
              <h3>Burger Nation</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Os melhores hambúrgueres artesanais da cidade. Sabor e qualidade em cada mordida.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 rounded-full bg-background border flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 rounded-full bg-background border flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 rounded-full bg-background border flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Twitter className="size-4" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cardápio
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Nossas Unidades
                </Link>
              </li>
              <li>
                <Link to="/rewards" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Programa de Pontos
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Trabalhe Conosco
                </a>
              </li>
            </ul>
          </div>

          {/* Atendimento */}
          <div>
            <h4 className="mb-4">Atendimento</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Política de Entrega
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 mt-0.5 flex-shrink-0" />
                <span>Av. Paulista, 1000<br />São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="size-4 flex-shrink-0" />
                <a href="tel:+551130001234" className="hover:text-foreground transition-colors">
                  (11) 3000-1234
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="size-4 flex-shrink-0" />
                <a href="mailto:contato@burgernation.com.br" className="hover:text-foreground transition-colors">
                  contato@burgernation.com.br
                </a>
              </li>
            </ul>
            <div className="mt-4 p-3 rounded-lg bg-accent">
              <p className="text-xs font-medium mb-1">Horário de Funcionamento</p>
              <p className="text-xs text-muted-foreground">
                Seg-Dom: 11h às 23h
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 Burger Nation. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">
              Política de Cookies
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              LGPD
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
