import { useField } from "formik";
import classNames from "classnames";
import { useWords } from "../../../hooks";

export default function Select({ label, sizeFull = false, options, ...props }) {
  const [fields, meta, helpers] = useField(props);
  const words = useWords();
  return (
    <label
      className={classNames({
        "flex flex-col p-2": true,
        "w-1/2": !sizeFull,
        "w-full": sizeFull,
      })}
    >
      <select
        className=
          "w-full border-b-2 text-black border-gray-400 bg-transparent h-[30px] text-md px-2 outline-none flex-shrink-0 appearance-none transition-all duration-1000 ease-linear"
         
        {...fields}
        {...props}
      >
        <option className="bg-gray-200" value="">
          {words.select}
        </option>
        {options.map((option, index) => (
          <option className="bg-gray-200" key={index} value={option.key}>
            {option.value}
          </option>
        ))}
      </select>
      {meta.error && (
        <span className="mt-1 px-1 text-sm text-red-600">
          {meta.error}
        </span>
      )}
    </label>
  );
}
