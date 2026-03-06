import InputPanel from "../features/input/InputPanel";
import OutputPanel from "../features/output/OutputPanel";
import Logo from "../ui/Logo";

function AppTranslator() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[url('/hero_img.jpg')] bg-cover bg-no-repeat">
      <Logo className="h-14 w-14 object-contain sm:h-16 sm:w-16" />

      <div className="flex w-full max-w-5xl flex-col gap-6 sm:flex-row sm:gap-8">
        <InputPanel />

        <OutputPanel />
      </div>
    </div>
  );
}

export default AppTranslator;
