import React from "react";

const SelectCategory = React.forwardRef(
  ({ options, label, styles, register, name, error }, ref) => {
    return (
      <div className='flex flex-col mt-2'>
        <p className='text-Black text-sm mb-1 '>{label}</p>

        <select
          name={name}
          ref={ref}
          className={`rounded-md bg-Gray border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-base px-4 py-2 ${styles}`}
          {...register}
          aria-invalid={error ? "true" : "false"}
        >
          {options.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {error && <span className='text-xs text-red-500 mt-0.5 '>{error}</span>}
      </div>
    );
  }
);

export default SelectCategory;
