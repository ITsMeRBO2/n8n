import { Badge } from '@/components/ui/badge';

export default function TitleSlide() {
  return (
    <div className="slide-content">
      <div className="text-center max-w-4xl mx-auto">
        {/* N8N Logo */}
        <div className="relative mb-12">
          <div className="w-32 h-32 mx-auto mb-8 gradient-n8n rounded-full flex items-center justify-center animate-float glow-primary">
            <span className="text-4xl font-black text-white">n8n</span>
          </div>
          <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-primary/20 animate-pulse-glow"></div>
        </div>

        {/* Title */}
        <h1 className="slide-title animate-fade-in-up">
          n8n : L'automatisation
          <br />
          <span className="text-accent">open source</span>
        </h1>

        {/* Subtitle */}
        <p className="slide-subtitle animate-fade-in-up [animation-delay:0.2s]">
          Révolutionner les workflows avec une approche no-code/low-code
        </p>

        {/* Authors */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up [animation-delay:0.4s]">
          <Badge variant="secondary" className="text-lg py-2 px-6 glass-card">
            Rahil Ibrahim
          </Badge>
          <Badge variant="secondary" className="text-lg py-2 px-6 glass-card">
            WIAM BENKRIMEN
          </Badge>
        </div>

        {/* Call to action */}
        <div className="text-muted-foreground animate-fade-in-up [animation-delay:0.6s]">
          <p>Appuyez sur → ou Espace pour commencer</p>
        </div>
      </div>
    </div>
  );
}