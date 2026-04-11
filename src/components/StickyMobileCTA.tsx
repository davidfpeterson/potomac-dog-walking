export default function StickyMobileCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]"
      aria-label="Contact Potomac Dog Walking"
    >
      <div className="grid grid-cols-2 gap-0">
        <a
          href="tel:3012653647"
          className="flex items-center justify-center gap-2 py-3.5 bg-green-800 text-white font-semibold active:bg-green-900"
          aria-label="Call (301) 265-3647"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="flex flex-col items-start leading-tight">
            <span className="text-sm">Call</span>
            <span className="text-xs font-normal text-green-100">Answered 7 days</span>
          </span>
        </a>
        <a
          href="sms:3012653647"
          className="flex items-center justify-center gap-2 py-3.5 bg-amber-500 text-green-950 font-semibold active:bg-amber-600"
          aria-label="Text (301) 265-3647"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="flex flex-col items-start leading-tight">
            <span className="text-sm">Text</span>
            <span className="text-xs font-normal text-green-950/70">Quick reply</span>
          </span>
        </a>
      </div>
    </div>
  );
}
