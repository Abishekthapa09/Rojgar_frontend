import classNames from "classnames";
import { useField } from "formik";

export default function File({ label, changeHandle, ...props }) {
  const [fields, meta, helpers] = useField(props);

  // const changeHandle = (e) => {
  //   helpers.setValue(e.target.files[0]);
  // };

  return (
    <label className="flex flex-col w-full p-2">
      <div className="text-base text-black flex items-center">{label}</div>
      <input
        type="file"
        accept=".jpeg,.jpg,.png"
        className=
          "w-full text-black text-opacity-100 border-b-2  border-gray-400 focus:border-opacity-100 outline-none placeholder:text-black placeholder:text-opacity-30 focus:placeholder:text-opacity-100 transition-all duration-1000 ease-linear"
         

        onChange={changeHandle}
      />
      {meta.error && (
        <span className="text-sm px-1 mt-1 text-red-600 ">
          {meta.error}
        </span>
      )}
    </label>
  );
}
