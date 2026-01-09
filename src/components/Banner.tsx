import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative overflow-hidden text-white h-100">
      <Image
        src="/images/banner1.jpg"
        alt="Banner Ideas"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 z-10 bg-black/40" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold">Ideas</h1>
        <p>Where all our great things begin</p>
      </div>
      <div className="absolute left-0 z-30 w-full origin-bottom-left -skew-y-3 bg-white -bottom-100 h-100" />
    </section>
  );
}
