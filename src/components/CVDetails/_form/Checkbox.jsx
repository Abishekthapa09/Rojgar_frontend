import { useField } from "formik";
import classNames from "classnames";
import { FiCheck } from "react-icons/fi";

export default function Checkbox({ label, ...props }) {
  const [field, meta, helpers] = useField(props);
  const clickHandle = () => {
    helpers.setValue(!field.value);
  };
  return (
    <label
      className="flex flex-col w-full p-2 cursor-pointer"
      onClick={clickHandle}
    >
      <div className="flex items-center w-full">
        <span
          className={classNames({
            "w-5 h-5 mr-2 border-2 transition-all flex items-center justify-center": true,
            "bg-transparent border-gray-700 text-transparent": !field.value,
            "bg-green-600 text-gray-700": field.value,
            "border-transparent": !meta.error,
            "!border-red-600": meta.error,
          })}
        >
          <FiCheck size={20} />
        </span>
        <span className="text-black text-base">{label}</span>
      </div>
      {meta.error && (
        <span className="mt-2 px-1 text-sm text-red-600">{meta.error}</span>
      )}
    </label>
  );
}
