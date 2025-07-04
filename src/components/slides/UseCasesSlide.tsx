import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, ShoppingCart, Stethoscope, Code, TrendingUp, Users } from 'lucide-react';

export default function UseCasesSlide() {
  const sectors = [
    {
      icon: Code,
      title: "Entreprises technologiques",
      examples: [
        "Automatisation CI/CD",
        "Synchronisation GitHub ↔ Slack",
        "Monitoring et alertes",
        "Déploiements automatisés"
      ],
      color: "from-blue-500 to-blue-400"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & PME",
      examples: [
        "Sync boutique ↔ ERP ↔ Compta",
        "Automatisation marketing",
        "Gestion des stocks",
        "Facturation automatique"
      ],
      color: "from-green-500 to-green-400"
    },
    {
      icon: Building2,
      title: "Secteurs traditionnels",
      examples: [
        "Réconciliation financière",
        "Reporting réglementaire",
        "Synchronisation dossiers",
        "Communications automatisées"
      ],
      color: "from-purple-500 to-purple-400"
    }
  ];

  const useCaseExamples = [
    {
      title: "Lead nurturing automatisé",
      workflow: [
        "Nouveau contact HubSpot",
        "Enrichissement Clearbit",
        "Ajout liste Mailchimp",
        "Notification Slack",
        "Création tâche Asana"
      ],
      color: "from-orange-500 to-orange-400"
    },
    {
      title: "Sync e-commerce temps réel",
      workflow: [
        "Nouvelle commande WooCommerce",
        "Mise à jour client Airtable",
        "Gestion stock Google Sheets",
        "Génération facture QuickBooks",
        "Email confirmation client"
      ],
      color: "from-cyan-500 to-cyan-400"
    },
    {
      title: "Onboarding employé",
      workflow: [
        "Nouveau profil BambooHR",
        "Création compte Active Directory",
        "Ajout groupes Slack",
        "Accès Jira/Confluence",
        "Planification formations"
      ],
      color: "from-pink-500 to-pink-400"
    }
  ];

  const successStories = [
    {
      company: "Startup FinTech",
      size: "50 employés",
      challenge: "15 outils à intégrer, pas d'équipe dev dédiée",
      solution: "25 workflows, 80% tâches automatisées",
      results: ["+20h/semaine/employé", "ROI 400% en 6 mois", "-95% erreurs manuelles"],
      icon: TrendingUp
    },
    {
      company: "E-commerce B2B",
      size: "200 employés", 
      challenge: "Sync ERP, CRM, web complexe",
      solution: "n8n self-hosted, workflows critiques",
      results: ["50k produits sync temps réel", "Commandes: 48h→2h", "150k€/an économisés"],
      icon: Users
    }
  ];

  return (
    <div className="slide-content">
      <div className="max-w-7xl mx-auto">
        <h2 className="slide-title text-center mb-4">Cas d'usage et applications</h2>
        <p className="text-center text-xl text-muted-foreground mb-16">
          Applications concrètes dans différents secteurs
        </p>

        {/* Sectors */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {sectors.map((sector, index) => {
            const IconComponent = sector.icon;
            return (
              <Card 
                key={index} 
                className="feature-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${sector.color} rounded-lg flex items-center justify-center glow-primary`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold">{sector.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {sector.examples.map((example, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{example}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Example Workflows */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Exemples de workflows</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {useCaseExamples.map((example, index) => (
              <Card 
                key={index} 
                className="feature-card animate-fade-in-up"
                style={{ animationDelay: `${0.5 + index * 0.15}s` }}
              >
                <div className={`w-full h-1 bg-gradient-to-r ${example.color} rounded-t-xl -mt-6 -mx-6 mb-4`}></div>
                
                <h4 className="text-lg font-bold mb-4">{example.title}</h4>
                
                <div className="space-y-3">
                  {example.workflow.map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-6 h-6 bg-gradient-to-r ${example.color} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                        {i + 1}
                      </div>
                      <span className="text-sm text-muted-foreground">{step}</span>
                    </div>
                  ))}
                </div>

                {/* Placeholder for demo image */}
                {index === 0 && (
                  <div className="mt-4 p-4 bg-muted/20 rounded-lg border-2 border-dashed border-muted">
                    <p className="text-center text-sm text-muted-foreground">
                      Image 1.gif sera affichée ici
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Section Exemple de n8n */}
        <div className="mt-12 flex flex-col items-center">
          <Badge variant="secondary" className="text-2xl px-6 py-3 mb-6">Exemple de n8n</Badge>
          <img src="/1.jpg" alt="Exemple de n8n" className="rounded-xl shadow-lg max-w-full h-auto border border-muted" style={{ maxWidth: '700px' }} />
        </div>
      </div>
    </div>
  );
}