import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Database, Workflow, Cloud, Shield } from 'lucide-react';

export default function TechnicalAnalysisSlide() {
  const technicalAspects = [
    {
      icon: Workflow,
      title: "Architecture",
      points: [
        "Base : Node.js + Vue.js",
        "Fonctionnement : Trigger → Nœuds → Output",
        "BDD : SQLite/PostgreSQL/MySQL"
      ],
      color: "from-primary to-primary/80"
    },
    {
      icon: Database,
      title: "Fonctionnalités principales",
      points: [
        "400+ intégrations natives",
        "Éditeur visuel drag-and-drop",
        "Code JavaScript personnalisé",
        "Webhooks temps réel",
        "Debugger intégré"
      ],
      color: "from-accent to-accent/80"
    },
    {
      icon: Cloud,
      title: "Modèles de déploiement",
      points: [
        "n8n Cloud (SaaS hébergé)",
        "Self-hosted (auto-hébergement)",
        "Docker & Kubernetes",
        "Options d'intégration flexible"
      ],
      color: "from-orange-500 to-orange-400"
    },
    {
      icon: Shield,
      title: "Sécurité",
      points: [
        "Chiffrement des données sensibles",
        "Gestion fine des accès",
        "Conformité RGPD",
        "Audit et logs complets"
      ],
      color: "from-green-500 to-green-400"
    }
  ];

  return (
    <div className="slide-content">
      <div className="max-w-6xl mx-auto">
        <h2 className="slide-title text-center mb-4">Analyse technique</h2>
        <p className="text-center text-xl text-muted-foreground mb-16">
          Architecture robuste et fonctionnalités avancées
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {technicalAspects.map((aspect, index) => {
            const IconComponent = aspect.icon;
            return (
              <Card 
                key={index} 
                className="feature-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-r ${aspect.color} rounded-xl flex items-center justify-center glow-primary`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {aspect.title}
                    </h3>
                  </div>
                  
                  {/* Points */}
                  <div className="space-y-3">
                    {aspect.points.map((point, pointIndex) => (
                      <div 
                        key={pointIndex} 
                        className="flex items-start gap-3 animate-fade-in-up"
                        style={{ animationDelay: `${(index * 0.2) + (pointIndex * 0.1)}s` }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Decorative gradient */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-l ${aspect.color} opacity-10 rounded-bl-3xl`}></div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Technical Stack */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Stack technique</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Node.js", "TypeScript", "Vue.js", "SQLite/PostgreSQL", 
              "Docker", "Redis", "REST API", "WebSockets"
            ].map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-lg py-2 px-4 glass-card animate-fade-in-up"
                style={{ animationDelay: `${0.8 + index * 0.05}s` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}