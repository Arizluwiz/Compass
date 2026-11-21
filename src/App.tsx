import { useEffect, useMemo, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { TRAVEL_SPOTS, TownId } from './data/destinations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TownOverview } from './components/TownOverview';
import { SpotCard } from './components/SpotCard';
import { TripPicker } from './components/TripPicker';
import { SourcesFooter } from './components/SourcesFooter';
import { PhotoLightbox } from './components/PhotoLightbox';

type FilterValue = 'all' | TownId;

const STORAGE_KEY = 'compass_pangasinan_trip_stops';

const FILTER_OPTIONS: { id: FilterValue; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'urdaneta', label: 'Urdaneta' },
  { id: 'bolinao', label: 'Bolinao' },
  { id: 'natividad', label: 'Natividad' },
];

export default function App() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');
  const [selectedSpotIds, setSelectedSpotIds] = useState<string[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed.filter((item): item is string => typeof item === 'string');
        }
      }
    } catch {
      // Ignore storage read errors
    }
    return [];
  });

  const [lightboxPhoto, setLightboxPhoto] = useState<{
    src: string;
    alt: string;
    caption: string;
  } | null>(null);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedSpotIds));
    } catch {
      // Ignore storage write errors
    }
  }, [selectedSpotIds]);

  const filteredSpots = useMemo(() => {
    if (activeFilter === 'all') return TRAVEL_SPOTS;
    return TRAVEL_SPOTS.filter((spot) => spot.townId === activeFilter);
  }, [activeFilter]);

  const countForFilter = (filter: FilterValue) => {
    if (filter === 'all') return TRAVEL_SPOTS.length;
    return TRAVEL_SPOTS.filter((spot) => spot.townId === filter).length;
  };

  const handleToggleSpot = (spotId: string) => {
    setSelectedSpotIds((prev) =>
      prev.includes(spotId)
        ? prev.filter((id) => id !== spotId)
        : [...prev, spotId]
    );
  };

  const handleSelectTownAndScroll = (townId: TownId) => {
    setActiveFilter(townId);
    const el = document.getElementById('places');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleJumpToPicker = () => {
    const el = document.getElementById('trip-picker');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectSample = () => {
    setSelectedSpotIds([
      'urdaneta-temple',
      'bolinao-old-rock',
      'bolinao-patar-lighthouse',
      'natividad-rrebs-farm',
    ]);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#F8FAFB] text-slate-900">
        <Navbar
          selectedCount={selectedSpotIds.length}
          onJumpToPicker={handleJumpToPicker}
        />

        <main>
          <Hero
            onSelectTownFilter={handleSelectTownAndScroll}
            onOpenLightbox={(src, alt, caption) =>
              setLightboxPhoto({ src, alt, caption })
            }
          />

          <TownOverview onSelectTownFilter={handleSelectTownAndScroll} />

          {/* Section 2: Interactive Places & 3D Spot Cards */}
          <section
            id="places"
            className="border-b border-slate-200/80 bg-[#F8FAFB] py-16 sm:py-20"
          >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs font-medium tracking-wide text-teal-800">
                    02. Places &amp; Visitor Guide
                  </p>
                  <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
                    Browse spots by town
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">
                    Open any card’s visitor details for practical reminders, barangay context, and
                    the best time of day to go. Click any photo to inspect it larger.
                  </p>
                </div>

                {/* Interactive Destination Filter Bar */}
                <div
                  role="tablist"
                  aria-label="Filter places by town"
                  className="inline-flex flex-wrap items-center gap-1 rounded-xl border border-slate-200 bg-white p-1 self-start md:self-auto"
                >
                  {FILTER_OPTIONS.map((option) => {
                    const active = activeFilter === option.id;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => setActiveFilter(option.id)}
                        className={`min-h-[40px] rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 ${
                          active
                            ? 'bg-teal-700 text-white shadow-xs'
                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                        }`}
                      >
                        {option.label}{' '}
                        <span
                          className={`ml-1 font-mono tabular-nums ${
                            active ? 'text-teal-100' : 'text-slate-400'
                          }`}
                        >
                          {countForFilter(option.id)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Spot Cards Grid */}
              <div className="mt-10 grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                {filteredSpots.map((spot, idx) => (
                  <SpotCard
                    key={spot.id}
                    spot={spot}
                    index={idx}
                    isSelected={selectedSpotIds.includes(spot.id)}
                    onToggleTrip={handleToggleSpot}
                    onOpenLightbox={(src, alt, caption) =>
                      setLightboxPhoto({ src, alt, caption })
                    }
                  />
                ))}
              </div>
            </div>
          </section>

          <TripPicker
            selectedIds={selectedSpotIds}
            onToggleSpot={handleToggleSpot}
            onClearAll={() => setSelectedSpotIds([])}
            onSelectSample={handleSelectSample}
          />
        </main>

        <SourcesFooter />

        <PhotoLightbox
          photo={lightboxPhoto}
          onClose={() => setLightboxPhoto(null)}
        />
      </div>
    </MotionConfig>
  );
}
