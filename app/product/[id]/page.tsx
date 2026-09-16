import Link from "next/link";

export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
    { id: "10" },
  ];
}

const imgs = [
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
];

export default function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  const image = imgs[(id - 1) % imgs.length];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link href="/" className="text-2xl font-bold text-blue-400">
            Nexora
          </Link>

          <Link
            href="/"
            className="text-sm text-slate-300 hover:text-white"
          >
            Home
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-8">
        <Link
          href="/"
          className="mb-6 inline-block text-sm text-blue-400"
        >
          ← Back to Products
        </Link>

        <section className="grid gap-8 rounded-2xl border border-slate-800 bg-slate-900 p-5 md:grid-cols-2">
          <div>
            <img
              src={`${image}?auto=format&fit=crop&w=1000&q=80`}
              alt="Nexora product"
              className="w-full rounded-xl object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-2 text-sm text-blue-400">
              Nexora Product
            </p>

            <h1 className="text-3xl font-bold">
              Featured Product {params.id}
            </h1>

            <p className="mt-5 leading-7 text-slate-300">
              Discover useful products selected for the Nexora
              product discovery platform.
            </p>

            <a
              href="#"
              className="mt-7 inline-flex w-fit rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white"
            >
              View Product
            </a>

            <p className="mt-6 text-xs leading-5 text-slate-500">
              Nexora may earn a commission from qualifying purchases
              made through affiliate links.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
