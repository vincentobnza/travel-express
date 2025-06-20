import Hero from "./Hero";
import Main from "./Main";

export default function HomePage() {
  return (
    <div className="w-full space-y-8 bg-gray-800 text-white">
      <Hero />
      <main className="mx-auto w-full max-w-screen-xl p-8">
        <Main />
      </main>
    </div>
  );
}
