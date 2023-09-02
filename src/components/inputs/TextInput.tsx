import React from "react";
import cn from "classnames";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const TextInput = ({
  label,
  name,
  error,
  type = "text",
  ...rest
}: InputProps) => {
  return (
    <>
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        className={cn(
          "bg-gray-50  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:border-primary-light block w-full p-2.5",
          { "border-danger-main focus:border-danger-main": error }
        )}
        {...rest}
      />
      {error && (
        <span className="block my-2 text-xs font-medium text-danger-main">
          {error}
        </span>
      )}
    </>
  );
};

export default TextInput;
