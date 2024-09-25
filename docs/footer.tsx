import LocaleSwitcher from "./components/LocaleSwitcher";

export default function Footer() {
  return (
    <div className="flex flex-row items-center gap-8 justify-between">
      <div>
        <div className="bg-[url('/logo.svg')] w-[180px] h-[27px] bg-no-repeat mb-2" />
        <div>
          Leading Web3 Data Applications, Committed to Delivering Accurate and
          Timely Value Information.
        </div>
      </div>
      <div className="flex items-center">
        <label>Change Language:</label>
        <LocaleSwitcher />
      </div>
    </div>
  );
}
