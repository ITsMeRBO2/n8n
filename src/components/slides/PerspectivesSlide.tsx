import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Zap, AlertTriangle, Target, Globe, Lightbulb } from 'lucide-react';

export default function PerspectivesSlide() {
  const futureTrends = [
    {
      icon: Brain,
      title: "Intégration IA",
      features: [
        "Génération automatique de workflows",
        "Suggestions intelligentes",
        "Détection d'anomalies",
        "Optimisation automatique",
        "Workflows en langage naturel"
      ],
      color: "from-purple-500 to-purple-400"
    },
    {
      icon: Zap,
      title: "Évolution technologique",
      features: [
        "Microservices avancés",
        "Edge computing",
        "Blockchain & Web3",
        "IoT industriel",
        "Connectivité universelle"
      ],
      color: "from-cyan-500 to-cyan-400"
    }
  ];

  const challenges = [
    {
      icon: AlertTriangle,
      title: "Défis techniques",
      items: [
        "Scalabilité et performance",
        "Load balancing distribué",
        "Interface workflows complexes",
        "Debugging avancé",
        "Sécurité renforcée (MFA, chiffrement)"
      ],
      color: "from-red-500 to-red-400"
    },
    {
      icon: Target,
      title: "Défis business",
      items: [
        "Concurrence des géants tech",
        "Équilibre freemium/payant",
        "Recrutement talents",
        "Expansion internationale",
        "Écosystème partenaires"
      ],
      color: "from-orange-500 to-orange-400"
    }
  ];

  const opportunities = [
    {
      icon: Globe,
      title: "Nouveaux marchés",
      items: [
        "Secteur public & gouvernemental",
        "Santé et télémédecine",
        "Éducation digitale",
        "Industrie 4.0",
        "Marchés émergents (Asie, Afrique)"
      ],
      color: "from-green-500 to-green-400"
    },
    {
      icon: Lightbulb,
      title: "Innovation & partenariats",
      items: [
        "Cloud providers (AWS, Azure, GCP)",
        "Éditeurs logiciels enterprise",
        "Cabinets de conseil",
        "Marketplace d'intégrations",
        "Écosystème formation"
      ],
      color: "from-blue-500 to-blue-400"
    }
  ];

  const vision2030 = {
    strategic: [
      "Leader open-source automatisation",
      "10 000+ intégrations tierces", 
      "10M utilisateurs actifs",
      "500M$ revenus annuels"
    ],
    impact: [
      "Automatisation accessible à tous",
      "+50M heures/an économisées",
      "Transformation digitale PME",
      "Création emplois qualifiés"
    ]
  };

  return (
    <div className="slide-content">
      <div className="max-w-7xl mx-auto">
        <h2 className="slide-title text-center mb-4">Perspectives et enjeux</h2>
        <p className="text-center text-xl text-muted-foreground mb-16">
          Vers l'avenir de l'automatisation intelligente
        </p>

        {/* Future Trends */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Tendances futures</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {futureTrends.map((trend, index) => {
              const IconComponent = trend.icon;
              return (
                <Card 
                  key={index} 
                  className="feature-card animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${trend.color} rounded-xl flex items-center justify-center glow-primary`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold">{trend.title}</h4>
                  </div>
                  
                  <div className="space-y-3">
                    {trend.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Challenges */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Défis à relever</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => {
              const IconComponent = challenge.icon;
              return (
                <Card 
                  key={index} 
                  className="feature-card animate-fade-in-up"
                  style={{ animationDelay: `${0.4 + index * 0.2}s` }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${challenge.color} rounded-xl flex items-center justify-center glow-primary`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold">{challenge.title}</h4>
                  </div>
                  
                  <div className="space-y-3">
                    {challenge.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-destructive rounded-full"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Opportunities */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Opportunités stratégiques</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => {
              const IconComponent = opportunity.icon;
              return (
                <Card 
                  key={index} 
                  className="feature-card animate-fade-in-up"
                  style={{ animationDelay: `${0.8 + index * 0.2}s` }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${opportunity.color} rounded-xl flex items-center justify-center glow-primary`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold">{opportunity.title}</h4>
                  </div>
                  
                  <div className="space-y-3">
                    {opportunity.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Vision 2030 */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8">Vision 2030</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="feature-card animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              <h4 className="text-xl font-bold mb-6 text-primary">Objectifs stratégiques</h4>
              <div className="space-y-4">
                {vision2030.strategic.map((goal, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Badge variant="secondary" className="w-8 h-8 rounded-full p-0 flex items-center justify-center">
                      {index + 1}
                    </Badge>
                    <span className="text-muted-foreground">{goal}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="feature-card animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
              <h4 className="text-xl font-bold mb-6 text-accent">Impact sociétal</h4>
              <div className="space-y-4">
                {vision2030.impact.map((impact, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Badge variant="secondary" className="w-8 h-8 rounded-full p-0 flex items-center justify-center">
                      {index + 1}
                    </Badge>
                    <span className="text-muted-foreground">{impact}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}