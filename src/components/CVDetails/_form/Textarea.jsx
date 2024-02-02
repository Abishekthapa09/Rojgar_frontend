import { useField } from "formik";
import classNames from "classnames";

export default function Textarea({ label, ...props }) {
  const [fields, meta, helpers] = useField(props);
  return (
    <label className="flex flex-col w-full p-2">
      <textarea
        className=
          "w-full resize-none bg-transparent text-black text-opacity-100 border-b-2 focus:border-opacity-100 outline-none placeholder:text-black placeholder:text-opacity-30 focus:placeholder:text-opacity-100 transition-all duration-100 ease-linear border-gray-400"
          
        autoComplete="off"
        {...fields}
        {...props}
      />
      {meta.error && (
        <span className="text-sm px-1 mt-1 text-red-600">
          {meta.error}
        </span>
      )}
    </label>
  );
}
