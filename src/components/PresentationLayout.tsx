import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Maximize, Minimize } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PresentationLayoutProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  autoPlayDelay?: number;
}

export default function PresentationLayout({ 
  children, 
  autoPlay = false, 
  autoPlayDelay = 8000 
}: PresentationLayoutProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const layoutRef = useRef<HTMLDivElement>(null);

  const totalSlides = children.length;

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, autoPlayDelay);

    return () => clearInterval(interval);
  }, [isPlaying, autoPlayDelay, totalSlides]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
        case ' ':
          event.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          prevSlide();
          break;
        case 'Escape':
          setIsPlaying(false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, totalSlides]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      layoutRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div ref={layoutRef} className={`relative min-h-screen bg-background ${isFullscreen ? 'overflow-auto' : 'overflow-hidden'}`}>
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent"></div>
      </div>

      {/* Current Slide */}
      <div className="relative z-10">
        {children[currentSlide]}
      </div>

      {/* Navigation Controls */}
      <div className="fixed top-1/2 right-4 -translate-y-1/2 z-20">
        <div className="glass-card p-2 flex flex-col items-center gap-2 w-auto">
          {/* Previous Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="hover:bg-primary/20 h-7 w-7"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {/* Play/Pause Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsPlaying(!isPlaying)}
            className="hover:bg-primary/20 h-7 w-7"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>

          {/* Fullscreen Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleFullscreen}
            className="hover:bg-primary/20 h-7 w-7"
            aria-label={isFullscreen ? 'Quitter le plein écran' : 'Plein écran'}
          >
            {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
          </Button>

          {/* Slide Indicators */}
          <div className="flex flex-col gap-1 my-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-primary scale-110 glow-primary'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="hover:bg-primary/20 h-7 w-7"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="fixed top-8 right-8 z-20">
        <div className="glass-card px-4 py-2">
          <span className="text-sm font-medium">
            {currentSlide + 1} / {totalSlides}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-20 h-1 bg-border">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />
      </div>
    </div>
  );
}