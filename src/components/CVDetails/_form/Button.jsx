import classNames from "classnames";

export default function Button({
  children,
  loading = false,
  variant = "default",
  ...props
}) {
  return (
    <button
      disabled={loading}
      className={classNames({
        "h-8 rounded-md ml-2 mt-2 px-5 text-center text-white  text-base flex items-center justify-center cursor-pointer disabled:cursor-not-allowed disabled:bg-opacity-100": true,
        "bg-transparent": variant === "default",
        "bg-tertiary": variant === "success",
        "bg-tertiary/95": variant === "warning",
        "bg-primary": variant === "info",
      })}
      {...props}
    >
      {loading ? "...." : children}
    </button>
  );
}
