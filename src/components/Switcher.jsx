import { Switch } from "@headlessui/react";

const Switcher = (props) => {
  //https://larainfo.com/blogs/toggle-switch-in-react-js-with-tailwind-css-example
  return (
    <div className="my-1 font-bold flex flex-col items-center">
      <label>{props.label}</label>

      <Switch
        checked={props.bank}
        onChange={props.setBank}
        disabled={!props.power}
        className={`${props.bank ? "bg-[#50644d]" : "bg-teal-900"}
          relative inline-flex h-[26px] w-[62px] my-2 shrink-0 cursor-pointer rounded-[5px] border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${props.bank ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[22px] w-[22px] transform rounded-[5px] bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
};

export default Switcher;
