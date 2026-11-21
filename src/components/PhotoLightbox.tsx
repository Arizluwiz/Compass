import { useEffect } from 'react';
import { X } from 'lucide-react';
import { ResilientImage } from './ResilientImage';

interface PhotoLightboxProps {
  photo: {
    src: string;
    alt: string;
    caption: string;
  } | null;
  onClose: () => void;
}

export function PhotoLightbox({ photo, onClose }: PhotoLightboxProps) {
  useEffect(() => {
    if (!photo) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [photo, onClose]);

  if (!photo) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged destination photograph"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close photograph viewer"
          className="absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900/80 text-white transition-colors hover:bg-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="bg-slate-100">
          <ResilientImage
            src={photo.src}
            alt={photo.alt}
            loading="eager"
            className="max-h-[72vh] w-full object-contain bg-slate-950"
          />
        </div>

        <div className="border-t border-slate-200 bg-white px-5 py-4">
          <p className="text-sm font-medium text-slate-900">{photo.caption}</p>
          <p className="mt-1 text-xs text-slate-500">{photo.alt}</p>
        </div>
      </div>
    </div>
  );
}
