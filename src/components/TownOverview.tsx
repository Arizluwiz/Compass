import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { TOWNS, TownId } from '../data/destinations';
import { TiltFrame } from './TiltFrame';
import { ResilientImage } from './ResilientImage';

interface TownOverviewProps {
  onSelectTownFilter: (townId: TownId) => void;
}

export function TownOverview({ onSelectTownFilter }: TownOverviewProps) {
  return (
    <section
      id="destinations"
      className="border-b border-slate-200/80 bg-[#F8FAFB] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-wide text-teal-800">
            01. Destination Profiles
          </p>
          <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
            What sets each town apart
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Pangasinan spans wide plains, mountain edges, and a western peninsula. Knowing the
            character of each municipality helps you plan realistic travel times and choose the
            kind of stop you want.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {TOWNS.map((town, idx) => (
            <motion.article
              key={town.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex h-full flex-col"
            >
              <TiltFrame maxTilt={4} className="h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <ResilientImage
                      src={town.previewImage}
                      alt={town.previewAlt}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-medium text-slate-500">{town.regionLabel}</p>
                    <h3 className="mt-1.5 font-serif text-2xl font-medium text-slate-900">
                      {town.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {town.summary}
                    </p>

                    <div className="mt-5 border-t border-slate-100 pt-4">
                      <p className="text-xs font-semibold text-slate-800">Notable highlights</p>
                      <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm text-slate-600 marker:text-teal-700">
                        {town.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-5">
                      <p className="border-t border-slate-100 pt-4 text-xs leading-relaxed text-slate-500">
                        {town.accessNote}
                      </p>
                      <button
                        type="button"
                        onClick={() => onSelectTownFilter(town.id)}
                        className="mt-4 inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-teal-800 transition-colors hover:text-teal-900 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                      >
                        See {town.name} places
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </TiltFrame>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
