import { SOURCES_LIST } from '../data/destinations';

export function SourcesFooter() {
  return (
    <footer id="sources" className="bg-[#F4F7F9] py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-serif text-2xl font-medium text-slate-900">Compass</p>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
              An unbiased, easy-to-read travel guide to Urdaneta, Bolinao, and Natividad in
              Pangasinan, Philippines.
            </p>

            <div className="mt-6 border-t border-slate-200/90 pt-5">
              <p className="text-xs font-semibold tracking-wide text-slate-500">
                Group Credit
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                Ace Group 1 | Grade 10 – St. Arnold Janssen
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <h2 className="text-sm font-semibold tracking-wide text-slate-900">
              Sources &amp; Credits
            </h2>
            <dl className="mt-4 grid grid-cols-1 gap-6 border-t border-slate-200/90 pt-5 sm:grid-cols-2">
              {SOURCES_LIST.map((source) => (
                <div key={source.category}>
                  <dt className="text-xs font-semibold text-slate-800">{source.category}</dt>
                  <dd className="mt-1.5 text-xs leading-relaxed text-slate-600">
                    {source.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </footer>
  );
}
