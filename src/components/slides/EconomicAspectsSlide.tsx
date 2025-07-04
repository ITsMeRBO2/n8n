import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DollarSign, TrendingUp, Users, Globe } from 'lucide-react';

export default function EconomicAspectsSlide() {
  const pricingModels = [
    {
      title: "Self-hosted",
      price: "Gratuit",
      features: [
        "Fonctionnalités illimitées",
        "Support communauté",
        "Maintenance utilisateur",
        "Code source accessible"
      ],
      color: "from-green-500 to-green-400",
      popular: false
    },
    {
      title: "n8n Cloud",
      price: "20-50€/mois",
      features: [
        "Starter: 5k exécutions",
        "Pro: 10k exécutions", 
        "Infrastructure gérée",
        "Support premium"
      ],
      color: "from-primary to-primary/80",
      popular: true
    },
    {
      title: "Enterprise",
      price: "500€+/mois",
      features: [
        "Support 24/7",
        "SLA garantis",
        "SSO & audit",
        "Formation incluse"
      ],
      color: "from-orange-500 to-orange-400",
      popular: false
    }
  ];

  const marketData = [
    {
      icon: Globe,
      title: "Marché global",
      value: "8,5 Mds $",
      subtitle: "Automatisation 2023",
      growth: "+18% annuel"
    },
    {
      icon: Users,
      title: "Utilisateurs n8n",
      value: "500k+",
      subtitle: "Actifs en 2024",
      growth: "+15-20% mensuel"
    },
    {
      icon: DollarSign,
      title: "Conversion",
      value: "8-12%",
      subtitle: "Freemium → Payant",
      growth: "CLV: 15k€"
    },
    {
      icon: TrendingUp,
      title: "Part de marché",
      value: "2-3%",
      subtitle: "iPaaS open source",
      growth: "Leader OS"
    }
  ];

  const competitorPricing = [
    { tool: "n8n", entry: "0€", mid: "50€", enterprise: "500€" },
    { tool: "Zapier", entry: "25€", mid: "75€", enterprise: "400€" },
    { tool: "Power Automate", entry: "15€", mid: "40€", enterprise: "200€" },
    { tool: "Make", entry: "10€", mid: "35€", enterprise: "300€" }
  ];

  const revenueStreams = [
    {
      name: "n8n Cloud",
      percentage: 70,
      description: "Abonnements SaaS, revenus récurrents, marge 85%"
    },
    {
      name: "Licences Enterprise", 
      percentage: 25,
      description: "Contrats pluriannuels, deals 50k-500k€"
    },
    {
      name: "Services & formation",
      percentage: 5,
      description: "Consulting, formations certifiantes"
    }
  ];

  return (
    <div className="slide-content">
      <div className="max-w-7xl mx-auto">
        <h2 className="slide-title text-center mb-4">Aspects économiques</h2>
        <p className="text-center text-xl text-muted-foreground mb-16">
          Modèle économique et positionnement marché
        </p>

        {/* Pricing Models */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {pricingModels.map((model, index) => (
            <Card 
              key={index} 
              className={`feature-card relative animate-fade-in-up ${model.popular ? 'ring-2 ring-primary' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {model.popular && (
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">
                  Populaire
                </Badge>
              )}
              
              <div className={`w-full h-2 bg-gradient-to-r ${model.color} rounded-t-xl -mt-6 -mx-6 mb-4`}></div>
              
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold mb-2">{model.title}</h3>
                <div className="text-3xl font-bold text-primary mb-1">{model.price}</div>
              </div>
              
              <div className="space-y-3">
                {model.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Market Data */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {marketData.map((data, index) => {
            const IconComponent = data.icon;
            return (
              <Card 
                key={index} 
                className="feature-card text-center animate-fade-in-up"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="w-16 h-16 gradient-n8n rounded-full flex items-center justify-center mx-auto mb-4 glow-primary">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{data.value}</div>
                <div className="text-sm text-muted-foreground mb-2">{data.subtitle}</div>
                <Badge variant="secondary" className="text-xs">{data.growth}</Badge>
              </Card>
            );
          })}
        </div>

        {/* Competitive Pricing */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Comparaison tarifaire</h3>
          <Card className="feature-card animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4">Outil</th>
                    <th className="text-center py-3 px-4">Entrée</th>
                    <th className="text-center py-3 px-4">Moyen</th>
                    <th className="text-center py-3 px-4">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {competitorPricing.map((item, index) => (
                    <tr key={index} className={`border-b border-border/50 ${item.tool === 'n8n' ? 'bg-primary/10' : ''}`}>
                      <td className="py-3 px-4 font-semibold">{item.tool}</td>
                      <td className="text-center py-3 px-4">{item.entry}</td>
                      <td className="text-center py-3 px-4">{item.mid}</td>
                      <td className="text-center py-3 px-4">{item.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Revenue Streams */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Modèle de revenus</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {revenueStreams.map((stream, index) => (
              <Card 
                key={index} 
                className="feature-card animate-fade-in-up"
                style={{ animationDelay: `${1.1 + index * 0.15}s` }}
              >
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-primary mb-2">{stream.percentage}%</div>
                  <h4 className="text-lg font-semibold">{stream.name}</h4>
                </div>
                
                <div className="w-full bg-muted rounded-full h-2 mb-4">
                  <div 
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${stream.percentage}%` }}
                  ></div>
                </div>
                
                <p className="text-sm text-muted-foreground text-center">
                  {stream.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}