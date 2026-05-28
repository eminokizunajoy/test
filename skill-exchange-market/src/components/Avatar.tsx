import Image from "next/image";

function initials(name: string) {
  const trimmed = name.trim();
  if (!trimmed) return "U";
  const parts = trimmed.split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase() ?? "").join("") || "U";
}

export function Avatar({
  src,
  name,
  size = 44
}: {
  src?: string | null;
  name: string;
  size?: number;
}) {
  if (src) {
    return (
      <div
        className="shrink-0 overflow-hidden rounded-full ring-1 ring-black/10"
        style={{ width: size, height: size }}
      >
        <Image src={src} alt={name} width={size} height={size} className="h-full w-full object-cover" />
      </div>
    );
  }

  return (
    <div
      className="grid shrink-0 place-items-center rounded-full bg-zinc-200 text-xs font-semibold text-zinc-700 ring-1 ring-black/10"
      style={{ width: size, height: size }}
      aria-label={name}
      title={name}
    >
      {initials(name)}
    </div>
  );
}

