import Link from "next/link";

export default function Home() {
  return (
    <section className="h-screen py-20 px-4">
      <h1 className="bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-center text-2xl font-bold tracking-wide text-transparent md:text-4xl">
        QR Code options
      </h1>
      <Link href="/website">Website</Link>
    </section>
  );
}
