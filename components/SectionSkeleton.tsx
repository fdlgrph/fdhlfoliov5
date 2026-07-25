export default function SectionSkeleton({ id }: { id?: string }) {
  return (
    <section id={id} aria-hidden="true" className="container-px py-24 sm:py-32">
      <div className="max-w-content mx-auto animate-pulse space-y-6">
        <div className="h-3 w-24 rounded-full bg-white/5" />
        <div className="h-8 w-2/3 rounded-md bg-white/5" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
          <div className="h-40 rounded-xl bg-white/5" />
          <div className="h-40 rounded-xl bg-white/5" />
          <div className="h-40 rounded-xl bg-white/5" />
        </div>
      </div>
    </section>
  );
}
