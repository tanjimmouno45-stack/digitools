const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "200+", label: "Premium Tools" },
  { value: "4.9", label: "Rating" },
];

export default function Stats() {
  return (
    <section className="bg-brand text-white py-10">
      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:divide-x divide-white/30">
        {stats.map((s) => (
          <div key={s.label}>
            <h3 className="text-3xl font-extrabold">{s.value}</h3>
            <p className="text-sm text-white/80">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
