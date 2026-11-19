// Satu kotak untuk semua catatan "apa yang ada dan tidak ada di rekam jejak proyek".
// Dipakai ADIPPATI dan Forest Fire supaya batasan tidak berserakan di setiap bagian.
export default function EvidenceBox({
  title,
  rows,
  accent,
  line,
  mute,
  bg,
}: {
  title: string;
  rows: { h: string; body: string }[];
  accent: string;
  line: string;
  mute: string;
  bg: string;
}) {
  return (
    <aside className="rounded-2xl border p-6 md:p-8" style={{ borderColor: line, background: bg }} aria-label={title}>
      <p className="text-[13px] font-semibold uppercase tracking-[0.14em]" style={{ color: accent }}>
        {title}
      </p>
      <dl className="mt-5 grid gap-6 md:grid-cols-3 md:gap-8">
        {rows.map((r) => (
          <div key={r.h}>
            <dt className="text-[15px] font-semibold leading-6">{r.h}</dt>
            <dd className="mt-2 text-[15px] leading-[24px]" style={{ color: mute }}>
              {r.body}
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
