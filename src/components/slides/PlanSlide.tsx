import { Card } from '@/components/ui/card';

export default function PlanSlide() {
  const planItems = [
    {
      number: "01",
      title: "Introduction et contexte",
      description: "Définition, positionnement et origine de n8n",
      delay: "0s"
    },
    {
      number: "02", 
      title: "Analyse technique",
      description: "Architecture, fonctionnalités et sécurité",
      delay: "0.1s"
    },
    {
      number: "03",
      title: "Étude comparative", 
      description: "Concurrents, avantages et limitations",
      delay: "0.2s"
    },
    {
      number: "04",
      title: "Cas d'usage et applications",
      description: "Secteurs, exemples concrets et retours d'expérience",
      delay: "0.3s"
    },
    {
      number: "05",
      title: "Aspects économiques",
      description: "Modèle économique, marché et adoption",
      delay: "0.4s"
    },
    {
      number: "06",
      title: "Perspectives et enjeux",
      description: "Tendances futures, défis et opportunités",
      delay: "0.5s"
    }
  ];

  return (
    <div className="slide-content">
      <div className="max-w-6xl mx-auto">
        <h2 className="slide-title text-center mb-16">Plan de présentation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {planItems.map((item, index) => (
            <Card 
              key={index} 
              className="feature-card group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: item.delay }}
            >
              <div className="relative overflow-hidden">
                {/* Number Badge */}
                <div className="absolute -top-2 -right-2 w-12 h-12 gradient-n8n rounded-full flex items-center justify-center font-bold text-white text-lg glow-primary">
                  {item.number}
                </div>
                
                {/* Content */}
                <div className="pt-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}