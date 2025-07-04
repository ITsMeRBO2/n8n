import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail, Github } from 'lucide-react';

export default function ConclusionSlide() {
  return (
    <div className="slide-content">
      <div className="text-center max-w-4xl mx-auto">
        {/* N8N Logo */}
        <div className="relative mb-12">
          <div className="w-32 h-32 mx-auto mb-8 gradient-n8n rounded-full flex items-center justify-center animate-float glow-primary">
            <span className="text-4xl font-black text-white">n8n</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="slide-title animate-fade-in-up">
          Merci pour votre
          <br />
          <span className="text-accent">attention !</span>
        </h1>

        {/* Summary */}
        <div className="mb-12 animate-fade-in-up [animation-delay:0.2s]">
          <p className="text-xl text-muted-foreground mb-8">
            n8n révolutionne l'automatisation avec une approche open source, 
            <br />
            démocratisant l'accès aux workflows intelligents
          </p>
          
          {/* Key Takeaways */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-base py-2 px-6 glass-card">
              Open Source & Flexible
            </Badge>
            <Badge variant="secondary" className="text-base py-2 px-6 glass-card">
              500k+ Utilisateurs
            </Badge>
            <Badge variant="secondary" className="text-base py-2 px-6 glass-card">
              400+ Intégrations
            </Badge>
            <Badge variant="secondary" className="text-base py-2 px-6 glass-card">
              Croissance 18%/an
            </Badge>
          </div>
        </div>

        {/* Questions Section */}
        <div className="animate-fade-in-up [animation-delay:0.4s]">
          <h2 className="text-3xl font-bold mb-8 text-gradient-n8n">
            Questions & Discussion
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Questions techniques</h3>
              <p className="text-sm text-muted-foreground">
                Architecture, intégrations, performance
              </p>
            </div>
            
            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <Mail className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Cas d'usage</h3>
              <p className="text-sm text-muted-foreground">
                Implémentation, ROI, bonnes pratiques
              </p>
            </div>
            
            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <Github className="w-8 h-8 text-orange-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Perspectives</h3>
              <p className="text-sm text-muted-foreground">
                Évolution, roadmap, communauté
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="animate-fade-in-up [animation-delay:0.6s]">
          <div className="glass-card p-8 max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-4">Présenté par</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <span className="font-semibold">Rahil Ibrahim</span>
                <span className="text-muted-foreground">•</span>
                <span className="font-semibold">WIAM BENKRIMEN</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Analyse approfondie de n8n - 2024
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-sm text-muted-foreground animate-fade-in-up [animation-delay:0.8s]">
          <p>Naviguez avec les flèches ← → ou cliquez sur les indicateurs</p>
        </div>
      </div>
    </div>
  );
}