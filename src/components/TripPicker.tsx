import { useState } from 'react';
import { Check, Copy, MapPin, RotateCcw } from 'lucide-react';
import { TRAVEL_SPOTS, TOWNS, TownId } from '../data/destinations';

interface TripPickerProps {
  selectedIds: string[];
  onToggleSpot: (id: string) => void;
  onClearAll: () => void;
  onSelectSample: () => void;
}

export function TripPicker({
  selectedIds,
  onToggleSpot,
  onClearAll,
  onSelectSample,
}: TripPickerProps) {
  const [copied, setCopied] = useState(false);

  const selectedSpots = TRAVEL_SPOTS.filter((s) => selectedIds.includes(s.id));
  const selectedTowns = new Set<TownId>(selectedSpots.map((s) => s.townId));

  const getRouteNote = (): string => {
    if (selectedSpots.length === 0) {
      return 'Check off spots on the left or directly from any place card above to build your own Pangasinan stop list.';
    }

    const hasUrdaneta = selectedTowns.has('urdaneta');
    const hasBolinao = selectedTowns.has('bolinao');
    const hasNatividad = selectedTowns.has('natividad');

    if (hasBolinao && (hasUrdaneta || hasNatividad)) {
      return 'Route note: Urdaneta and Natividad sit in eastern Pangasinan (about 45–60 minutes apart), while Bolinao is roughly 2.5–3 hours west on the coast. Consider planning an overnight stay in Bolinao rather than rushing all three towns in one day.';
    }
    if (hasUrdaneta && hasNatividad && !hasBolinao) {
      return 'Route note: Both Urdaneta and Natividad are in eastern Pangasinan, making them comfortable to pair in a single relaxed half-day or full-day trip.';
    }
    if (hasBolinao && !hasUrdaneta && !hasNatividad) {
      return 'Route note: Your picks are all in Bolinao. Starting early at inland spots like Bolinao Falls or Enchanted Cave and finishing at Patar Beach or Cape Bolinao Lighthouse works well for afternoon light.';
    }
    if (hasUrdaneta) {
      return 'Route note: Urdaneta works cleanly as a half-day stopover or an easy entry point off TPLEX before heading toward nearby towns.';
    }
    return 'Route note: Natividad is best enjoyed at an unhurried morning pace when mountain air is cool and rural roads are quiet.';
  };

  const handleCopyList = async () => {
    if (selectedSpots.length === 0) return;

    const lines = [
      'Compass — Pangasinan Trip Stops',
      '',
      ...TOWNS.flatMap((town) => {
        const townStops = selectedSpots.filter((s) => s.townId === town.id);
        if (townStops.length === 0) return [];
        return [
          `${town.name}:`,
          ...townStops.map((stop) => `  - ${stop.title} (${stop.area})`),
          '',
        ];
      }),
    ].join('\n');

    try {
      await navigator.clipboard.writeText(lines);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="trip-picker"
      className="border-b border-slate-200/80 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-wide text-teal-800">
              03. Interactive Trip Idea
            </p>
            <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
              Trip Idea & Stop Picker
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Check off the places you want to visit across Urdaneta, Bolinao, and Natividad to
              keep a clean checklist and get realistic distance context.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onSelectSample}
              className="min-h-[40px] rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              Sample Weekend Mix
            </button>
            {selectedIds.length > 0 && (
              <button
                type="button"
                onClick={onClearAll}
                className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                Clear All
              </button>
            )}
          </div>
        </div>

        {/* Two-column layout: Checklist (left) & Selected Summary (right) */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left 7 columns: Checkable list grouped by town */}
          <div className="space-y-8 lg:col-span-7">
            {TOWNS.map((town) => {
              const townSpots = TRAVEL_SPOTS.filter((s) => s.townId === town.id);
              const townSelectedCount = townSpots.filter((s) =>
                selectedIds.includes(s.id)
              ).length;

              return (
                <div
                  key={town.id}
                  className="border-t border-slate-200 pt-5"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-xl font-medium text-slate-900">
                      {town.name}
                    </h3>
                    <span className="font-mono text-xs text-slate-500 tabular-nums">
                      {townSelectedCount}/{townSpots.length} picked
                    </span>
                  </div>

                  <div className="mt-3 divide-y divide-slate-100">
                    {townSpots.map((spot) => {
                      const checked = selectedIds.includes(spot.id);
                      return (
                        <label
                          key={spot.id}
                          className="flex min-h-[52px] cursor-pointer items-start gap-3.5 py-3 transition-colors hover:bg-slate-50/70 px-2 -mx-2 rounded-lg"
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => onToggleSpot(spot.id)}
                            className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-700 accent-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                          />
                          <div className="flex-1">
                            <span
                              className={`block text-sm font-semibold ${
                                checked ? 'text-teal-900' : 'text-slate-900'
                              }`}
                            >
                              {spot.title}
                            </span>
                            <span className="mt-0.5 block text-xs text-slate-500">
                              {spot.area} · Best: {spot.bestTime}
                            </span>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right 5 columns: Clean summary card */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-[#F8FAFB] p-6">
              <div className="flex items-baseline justify-between border-b border-slate-200 pb-4">
                <div>
                  <h3 className="font-serif text-xl font-medium text-slate-900">
                    Your Selected Stops
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Saved automatically in this browser
                  </p>
                </div>
                <span className="font-mono text-lg font-medium text-teal-800 tabular-nums">
                  {selectedSpots.length}
                </span>
              </div>

              {/* Town breakdown counts */}
              <div className="mt-4 grid grid-cols-3 gap-2 border-b border-slate-200 pb-4 text-center">
                {TOWNS.map((town) => {
                  const count = selectedSpots.filter(
                    (s) => s.townId === town.id
                  ).length;
                  return (
                    <div key={town.id} className="py-1">
                      <p className="font-mono text-base font-medium text-slate-900 tabular-nums">
                        {count}
                      </p>
                      <p className="text-xs text-slate-500">{town.name}</p>
                    </div>
                  );
                })}
              </div>

              {/* Selected list or empty state */}
              <div className="mt-4">
                {selectedSpots.length === 0 ? (
                  <p className="py-4 text-sm leading-relaxed text-slate-500">
                    No stops selected yet. Tick any place from the checklist or click “Add to Trip”
                    on a spot card.
                  </p>
                ) : (
                  <ul className="max-h-64 space-y-2.5 overflow-y-auto pr-1">
                    {selectedSpots.map((spot) => (
                      <li
                        key={spot.id}
                        className="flex items-start justify-between gap-3 text-sm"
                      >
                        <div className="flex items-start gap-2">
                          <MapPin
                            className="mt-0.5 h-4 w-4 shrink-0 text-teal-700"
                            aria-hidden="true"
                          />
                          <div>
                            <p className="font-medium text-slate-900">{spot.title}</p>
                            <p className="text-xs text-slate-500">{spot.townName}</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => onToggleSpot(spot.id)}
                          aria-label={`Remove ${spot.title} from trip`}
                          className="text-xs font-medium text-slate-500 hover:text-slate-900 whitespace-nowrap shrink-0"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Practical routing advice */}
              <div className="mt-5 border-t border-slate-200 pt-4">
                <p className="text-xs leading-relaxed text-slate-600">{getRouteNote()}</p>
              </div>

              {/* Copy action */}
              <div className="mt-5">
                <button
                  type="button"
                  disabled={selectedSpots.length === 0}
                  onClick={handleCopyList}
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" aria-hidden="true" />
                      Copied Stop List
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" aria-hidden="true" />
                      Copy Stop List
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
