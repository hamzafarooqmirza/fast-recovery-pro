export function ServiceCard({ image, title, desc }: { image: string; title: string; desc: string }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur-xl transition hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={image} alt={title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}