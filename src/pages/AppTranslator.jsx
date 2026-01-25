import InputPanel from "../features/input/InputPanel";
import OutputPanel from "../features/output/OutputPanel";
import Logo from "../ui/Logo";

function AppTranslator() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-[url('/29188.jpg')] bg-cover bg-center px-4 py-8 sm:px-6">
      <header className="mb-6 sm:mb-8">
        <Logo className="h-14 w-14 rounded-xl object-contain sm:h-16 sm:w-16" />
      </header>
      <div className="flex w-full max-w-4xl flex-col gap-6 sm:flex-row sm:gap-8">
        <InputPanel />
        <OutputPanel />
      </div>
    </div>
  );
}

export default AppTranslator;
