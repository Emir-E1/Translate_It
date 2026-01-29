import InputPanel from "../features/input/InputPanel";
import OutputPanel from "../features/output/OutputPanel";
import Logo from "../ui/Logo";

function AppTranslator() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-[url('/hero_img.jpg')] bg-cover bg-fixed bg-center bg-no-repeat px-4 py-8 bg-blend-soft-light sm:px-6">
      <header className="relative z-10 mb-6 sm:mb-8">
        <div className="rounded-xl bg-black/40 p-2 shadow-lg backdrop-blur">
          <Logo className="h-14 w-14 object-contain sm:h-16 sm:w-16" />
        </div>
      </header>

      <div className="flex w-full max-w-5xl flex-col gap-6 sm:flex-row sm:gap-8">
        <InputPanel />

        <OutputPanel />
      </div>
    </div>
  );
}

export default AppTranslator;
