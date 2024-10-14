import NavLinks from "@/app/_ui/nav-links";

export default function Home() {
  return (
    <section className="h-fit min-h-screen px-4 py-20">
      <h1 className="bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-center text-2xl font-bold tracking-wide text-transparent md:text-4xl">
        QR Code options
      </h1>
      <NavLinks />
    </section>
  );
}
