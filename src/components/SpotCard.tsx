import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ChevronDown, ChevronUp, Maximize2, Plus } from 'lucide-react';
import { TravelSpot } from '../data/destinations';
import { TiltFrame } from './TiltFrame';
import { ResilientImage } from './ResilientImage';

interface SpotCardProps {
  spot: TravelSpot;
  isSelected: boolean;
  onToggleTrip: (id: string) => void;
  onOpenLightbox: (src: string, alt: string, caption: string) => void;
  index: number;
}

export function SpotCard({
  spot,
  isSelected,
  onToggleTrip,
  onOpenLightbox,
  index,
}: SpotCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      layout="position"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.4,
        delay: Math.min(index * 0.05, 0.2),
        ease: [0.16, 1, 0.3, 1],
      }}
      className="h-full"
    >
      <TiltFrame maxTilt={3.5} className="h-full">
        <div
          className={`flex h-full flex-col overflow-hidden rounded-2xl border bg-white transition-shadow duration-200 hover:shadow-md ${
            isSelected
              ? 'border-teal-600/70 shadow-sm'
              : 'border-slate-200 shadow-sm'
          }`}
        >
          {/* Framed Photo with clean caption & lightbox trigger */}
          <figure className="relative bg-slate-100">
            <button
              type="button"
              onClick={() =>
                onOpenLightbox(spot.image, spot.imageAlt, spot.imageCaption)
              }
              aria-label={`Enlarge photograph of ${spot.title}`}
              className="group relative block aspect-[4/3] w-full overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-teal-700"
            >
              <ResilientImage
                src={spot.image}
                alt={spot.imageAlt}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
              <span
                aria-hidden="true"
                className="absolute right-3 bottom-3 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900/70 text-white opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100"
              >
                <Maximize2 className="h-4 w-4" />
              </span>
            </button>
            <figcaption className="border-b border-slate-100 bg-slate-50/70 px-5 py-2.5 text-xs text-slate-500">
              {spot.imageCaption}
            </figcaption>
          </figure>

          {/* Card Content */}
          <div className="flex flex-1 flex-col p-6">
            <p className="text-xs font-medium text-slate-500">
              {spot.townName} <span aria-hidden="true">·</span> {spot.area}
            </p>

            <h3 className="mt-1.5 font-serif text-xl font-medium text-slate-900">
              {spot.title}
            </h3>

            <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
              {spot.shortDesc}
            </p>

            {/* Interactive Actions */}
            <div className="mt-5 flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => setExpanded((prev) => !prev)}
                aria-expanded={expanded}
                className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-800 transition-colors hover:bg-slate-50 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              >
                {expanded ? (
                  <>
                    Hide Details
                    <ChevronUp className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
                  </>
                ) : (
                  <>
                    Visitor Details
                    <ChevronDown className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => onToggleTrip(spot.id)}
                aria-pressed={isSelected}
                className={`inline-flex min-h-[40px] items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 ${
                  isSelected
                    ? 'bg-teal-700 text-white hover:bg-teal-800'
                    : 'bg-teal-50 text-teal-900 hover:bg-teal-100'
                }`}
              >
                {isSelected ? (
                  <>
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    Added to Trip
                  </>
                ) : (
                  <>
                    <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                    Add to Trip
                  </>
                )}
              </button>
            </div>

            {/* Expandable Practical Visitor Details */}
            {expanded && (
              <div className="mt-5 space-y-4 border-t border-slate-200 pt-4 text-sm">
                <div>
                  <h4 className="text-xs font-semibold tracking-wide text-slate-800">
                    What to expect
                  </h4>
                  <p className="mt-1 leading-relaxed text-slate-600">{spot.whatToExpect}</p>
                </div>

                <div className="grid grid-cols-1 gap-3 border-t border-slate-100 pt-3 sm:grid-cols-2">
                  <div>
                    <h4 className="text-xs font-semibold tracking-wide text-slate-800">
                      General area
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">{spot.area}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold tracking-wide text-slate-800">
                      Best time of day
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      {spot.bestTime}
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-3">
                  <h4 className="text-xs font-semibold tracking-wide text-slate-800">
                    Simple travel reminders
                  </h4>
                  <ul className="mt-1.5 list-disc space-y-1.5 pl-4 text-xs leading-relaxed text-slate-600 marker:text-slate-400">
                    {spot.reminders.map((tip) => (
                      <li key={tip}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </TiltFrame>
    </motion.article>
  );
}
