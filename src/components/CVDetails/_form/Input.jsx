import { useField } from "formik";
import classNames from "classnames";

export default function Input({ label, sizeFull = false, ...props }) {
  const [fields, meta, helpers] = useField(props);
  return (
    <label
      className={classNames({
        "flex flex-col p-2": true,
        "w-1/2": !sizeFull,
        "w-full": sizeFull,
      })}
    >
      <input
        className=
          "w-full pl-0 pb-0 p-1 bg-transparent text-black text-opacity-100 border-b-2 border-gray-400   focus:border-opacity-100 outline-none placeholder:text-black placeholder:text-opacity-30 focus:placeholder:text-opacity-100 transition-all duration-1000 ease-linear"
          
        autoComplete="off"
        {...fields}
        {...props}
      />
      {meta.error && meta.touched && (
        <span className="text-sm px-1 mt-1 text-red-600 ">{meta.error}</span>
      )}
    </label>
  );
}
