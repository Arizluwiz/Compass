import { motion } from 'motion/react';
import { ArrowDownRight, Compass as CompassIcon } from 'lucide-react';
import { HERO_MEDIA, TOWNS, TownId } from '../data/destinations';
import { TiltFrame } from './TiltFrame';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  onSelectTownFilter: (townId: TownId) => void;
  onOpenLightbox: (src: string, alt: string, caption: string) => void;
}

export function Hero({ onSelectTownFilter, onOpenLightbox }: HeroProps) {
  return (
    <section id="top" className="border-b border-slate-200/80 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Two-column editorial split with equal-height alignment */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left column: typographic lead */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-6"
          >
            <p className="text-xs font-medium tracking-wide text-slate-500">
              Pangasinan, Philippines · Urdaneta · Bolinao · Natividad
            </p>

            <h1 className="mt-4 font-serif text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl lg:text-[3.35rem] lg:leading-[1.12]">
              Explore three distinct towns across Pangasinan.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-[17px]">
              Compass is a straightforward, practical guide to visiting Urdaneta, Bolinao, and
              Natividad. From a convenient eastern city gateway to rocky western shores and quiet
              mountain foothills, compare what each town offers and pick the stops that fit your
              pace.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#places"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-teal-700 px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-teal-800 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              >
                <CompassIcon className="h-4 w-4" aria-hidden="true" />
                Browse Places to Visit
              </a>
              <a
                href="#destinations"
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              >
                Read Town Overviews
                <ArrowDownRight className="h-4 w-4 text-slate-400" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* Right column: matching height 3D-layered coastal visual */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <TiltFrame maxTilt={3.5} className="h-full">
              <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                <button
                  type="button"
                  onClick={() =>
                    onOpenLightbox(HERO_MEDIA.image, HERO_MEDIA.alt, HERO_MEDIA.caption)
                  }
                  aria-label="View full photograph of Pangasinan coastline"
                  className="group relative flex-1 overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-teal-700"
                >
                  <ResilientImage
                    src={HERO_MEDIA.image}
                    alt={HERO_MEDIA.alt}
                    loading="eager"
                    className="h-64 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02] sm:h-80 lg:h-full"
                  />
                </button>
                <figcaption className="border-t border-slate-200/80 bg-white px-4 py-3 text-xs leading-relaxed text-slate-600">
                  {HERO_MEDIA.caption}
                </figcaption>
              </figure>
            </TiltFrame>
          </motion.div>
        </div>

        {/* Full-width 3-column regional orientation strip */}
        <div className="mt-10 grid grid-cols-1 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-[#F8FAFB] md:grid-cols-3 md:divide-x md:divide-y-0">
          {TOWNS.map((town) => (
            <button
              key={town.id}
              type="button"
              onClick={() => onSelectTownFilter(town.id)}
              className="group flex flex-col justify-between p-5 text-left transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-teal-700"
            >
              <div>
                <p className="text-xs font-medium text-teal-800">{town.regionLabel}</p>
                <p className="mt-1 font-serif text-xl font-medium text-slate-900 group-hover:text-teal-800">
                  {town.name}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {town.character}
                </p>
              </div>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-slate-700 group-hover:text-teal-700">
                Filter {town.name} spots
                <ArrowDownRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
