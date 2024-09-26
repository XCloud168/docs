import LocaleSwitcher from "./components/LocaleSwitcher";

export default function Footer() {
  return (
    <div className="custom-footer dark:bg-black bg-white mx-auto w-full h-[120px] flex flex-row max-lg:flex-col-reverse max-sm:flex-col-reverse max-lg:items-center max-sm:items-center items-start gap-8 justify-between">
      <div className="flex flex-col pl-6">
        <div className="logo_Footer bg-[url('/logo.svg')] w-[180px] h-[27px] bg-no-repeat mb-2" />
        <div>
          Leading Web3 Data Applications, Committed to Delivering Accurate and
          Timely Value Information.
        </div>
      </div>
      <div className="flex items-center pr-8 justify-between">
        <label>Change Language:</label>
        <LocaleSwitcher />
      </div>
    </div>
  );
}
