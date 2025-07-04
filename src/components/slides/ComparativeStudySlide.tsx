import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

export default function ComparativeStudySlide() {
  const competitors = [
    {
      name: "Zapier",
      position: "Leader du marché",
      pros: ["Interface intuitive", "5000+ intégrations", "Communauté large"],
      cons: ["Coût élevé", "Propriétaire", "Limitations code"],
      color: "from-orange-500 to-orange-400"
    },
    {
      name: "Microsoft Power Automate", 
      position: "Écosystème Microsoft",
      pros: ["Intégration Office 365", "IA intégrée", "Enterprise ready"],
      cons: ["Dépendance Microsoft", "Complexité", "Coût par user"],
      color: "from-blue-500 to-blue-400"
    },
    {
      name: "Make (ex-Integromat)",
      position: "Concurrent direct",
      pros: ["Interface visuelle", "Pricing flexible", "Fonctions avancées"],
      cons: ["Courbe apprentissage", "Support limité", "Moins d'intégrations"],
      color: "from-purple-500 to-purple-400"
    }
  ];

  const n8nAdvantages = [
    {
      icon: CheckCircle,
      title: "Open Source",
      description: "Code source accessible, contributions communautaires, transparence totale"
    },
    {
      icon: CheckCircle,
      title: "Flexibilité maximale",
      description: "Code personnalisé, self-hosting, contrôle total des données"
    },
    {
      icon: CheckCircle,
      title: "Coût réduit",
      description: "Version gratuite complète, pricing transparent, pas de vendor lock-in"
    },
    {
      icon: CheckCircle,
      title: "Sécurité renforcée",
      description: "Données on-premise, conformité RGPD, audit possible"
    }
  ];

  const limitations = [
    {
      icon: AlertCircle,
      title: "Écosystème plus jeune",
      description: "Moins d'intégrations que Zapier, communauté en croissance"
    },
    {
      icon: AlertCircle,
      title: "Courbe d'apprentissage",
      description: "Nécessite des compétences techniques pour les cas complexes"
    }
  ];

  return (
    <div className="slide-content">
      <div className="max-w-7xl mx-auto">
        <h2 className="slide-title text-center mb-4">Étude comparative</h2>
        <p className="text-center text-xl text-muted-foreground mb-16">
          n8n face à la concurrence
        </p>
        
        {/* Competitors */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {competitors.map((competitor, index) => (
            <Card 
              key={index} 
              className="feature-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`w-full h-2 bg-gradient-to-r ${competitor.color} rounded-t-xl -mt-6 -mx-6 mb-4`}></div>
              
              <h3 className="text-xl font-bold mb-2">{competitor.name}</h3>
              <Badge variant="outline" className="mb-4">{competitor.position}</Badge>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-400 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Avantages
                  </h4>
                  <ul className="space-y-1">
                    {competitor.pros.map((pro, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-red-400 mb-2 flex items-center gap-2">
                    <XCircle className="w-4 h-4" />
                    Inconvénients
                  </h4>
                  <ul className="space-y-1">
                    {competitor.cons.map((con, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* N8N Advantages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">Avantages distinctifs de n8n</h3>
            <div className="space-y-4">
              {n8nAdvantages.map((advantage, index) => {
                const IconComponent = advantage.icon;
                return (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 animate-fade-in-up"
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <IconComponent className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">{advantage.title}</h4>
                      <p className="text-sm text-muted-foreground">{advantage.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-orange-400">Limitations à considérer</h3>
            <div className="space-y-4">
              {limitations.map((limitation, index) => {
                const IconComponent = limitation.icon;
                return (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 animate-fade-in-up"
                    style={{ animationDelay: `${0.9 + index * 0.1}s` }}
                  >
                    <IconComponent className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">{limitation.title}</h4>
                      <p className="text-sm text-muted-foreground">{limitation.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}