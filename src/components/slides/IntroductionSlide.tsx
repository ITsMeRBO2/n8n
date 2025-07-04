import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Code, Users, Calendar, Link, ListChecks, Layers3 } from 'lucide-react';

export default function IntroductionSlide() {
  const definitions = [
    {
      icon: Zap,
      title: "Qu'est-ce que n8n ?",
      content: "Un outil d'automatisation de workflows open source et no-code/low-code permettant de connecter et d'automatiser des tâches entre différentes applications.",
      highlight: "Automatisation visuelle"
    },
    {
      icon: Code,
      title: "Positionnement",
      content: "Se positionne dans l'écosystème no-code/low-code comme l'alternative open source aux solutions propriétaires d'automatisation.",
      highlight: "Open Source"
    },
    {
      icon: Users,
      title: "Créateurs",
      content: "Créé en 2019 par Jan Oberhauser avec une vision d'accessibilité et de transparence dans l'automatisation.",
      highlight: "Communauté active"
    },
    {
      icon: Calendar,
      title: "Évolution",
      content: "Croissance rapide avec plus de 500k utilisateurs, développement continu et écosystème en expansion.",
      highlight: "Innovation continue"
    }
  ];

  return (
    <div className="slide-content">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="slide-title text-center mb-4">Introduction et contexte</h2>
        {/* Grand Card centré */}
        <div className="mb-8">
          <Card className="p-6 flex items-start gap-4 animate-fade-in-up mx-auto max-w-2xl">
            <div className="w-12 h-12 gradient-n8n rounded-lg flex items-center justify-center flex-shrink-0 glow-primary">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Définition : Qu'est-ce que n8n et à quoi sert-il</h3>
              <p className="text-muted-foreground leading-relaxed">
                n8n est une plateforme d'automatisation de workflows open source basée sur des nœuds interconnectés. L'acronyme n8n signifie "nodemation" (node + automation), où le "8" remplace les 8 lettres du milieu.
              </p>
            </div>
          </Card>
        </div>
        {/* Grid 2 par ligne pour les autres Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Explication visuelle */}
          <Card className="w-full p-6 flex items-start gap-4 animate-fade-in-up">
            <div className="w-12 h-12 gradient-n8n rounded-lg flex items-center justify-center flex-shrink-0 glow-primary">
              <Link className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-semibold mb-2 text-foreground">Workflows visuels par nœuds</h3>
              <p className="text-muted-foreground leading-relaxed">
                Elle permet de créer des workflows visuels en connectant des nœuds représentant différentes applications ou actions, créant ainsi des chaînes d'automatisation.
              </p>
            </div>
          </Card>
          {/* Cas d'usage */}
          <Card className="w-full p-6 flex items-start gap-4 animate-fade-in-up">
            <div className="w-12 h-12 gradient-n8n rounded-lg flex items-center justify-center flex-shrink-0 glow-primary">
              <ListChecks className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-semibold mb-2 text-foreground">Cas d'usage principaux</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Synchronisation de données entre applications</li>
                <li>Automatisation de processus métier</li>
                <li>Intégration d'APIs et services web</li>
                <li>Notifications et alertes automatisées</li>
              </ul>
            </div>
          </Card>
          {/* Créateurs (déplacé ici) */}
          <Card className="w-full p-6 flex items-start gap-4 animate-fade-in-up">
            <div className="w-12 h-12 gradient-n8n rounded-lg flex items-center justify-center flex-shrink-0 glow-primary">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-semibold mb-2 text-foreground">Créateurs</h3>
              <p className="text-muted-foreground leading-relaxed">
                Créé en 2019 par Jan Oberhauser avec une vision d'accessibilité et de transparence dans l'automatisation.
              </p>
            </div>
          </Card>
          {/* Évolution */}
          <Card className="w-full p-6 flex items-start gap-4 animate-fade-in-up">
            <div className="w-12 h-12 gradient-n8n rounded-lg flex items-center justify-center flex-shrink-0 glow-primary">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-semibold mb-2 text-foreground">Évolution</h3>
              <p className="text-muted-foreground leading-relaxed">
                Croissance rapide avec plus de 500k utilisateurs, développement continu et écosystème en expansion.
              </p>
            </div>
          </Card>
          {/* Positionnement (déplacé après Évolution) */}
          <Card className="w-full p-6 flex items-start gap-4 animate-fade-in-up md:col-span-2">
            <div className="w-12 h-12 gradient-n8n rounded-lg flex items-center justify-center flex-shrink-0 glow-primary">
              <Layers3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-semibold mb-2 text-foreground">Positionnement : Place dans l'écosystème de l'automatisation et des outils no-code/low-code</h3>
              <p className="text-muted-foreground leading-relaxed mb-2 font-semibold">
                n8n se positionne dans l'écosystème des outils d'automatisation comme une solution hybride entre les plateformes no-code et low-code :
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-2">
                <li><span className="font-semibold">No-code :</span> Interface graphique intuitive permettant de créer des workflows sans programmation</li>
                <li><span className="font-semibold">Low-code :</span> Possibilité d'utiliser du code JavaScript pour des logiques complexes</li>
                <li><span className="font-semibold">Open source :</span> Code source accessible et modifiable, communauté active</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-1 font-semibold">Cette position unique permet à n8n de s'adresser à un large public :</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li><span className="font-semibold">Utilisateurs métier :</span> Création de workflows simples via l'interface graphique</li>
                <li><span className="font-semibold">Développeurs :</span> Customisation avancée avec du code personnalisé</li>
                <li><span className="font-semibold">Équipes IT :</span> Déploiement on-premise et contrôle total des données</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}