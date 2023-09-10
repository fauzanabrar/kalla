import React from "react";
import PropTypes from "prop-types";

interface InputProps {
  color?: any;
  round?: any;
  outline?: any;
  size?: any;
  fullWidth?: any;
  border?: any;
  leftIcon?: any;
  rightIcon?: any;
  type?: string;
  value?: any;
  onChange?: any;
  onClick?: any;
  placeholder?: string;
}

type commonOptions = {
  [key: string]: string;
};

const Input = React.forwardRef((props: InputProps, ref) => {
  const { border, size, leftIcon, rightIcon, type, ...rest } = props;

  const handleRef = React.useRef<HTMLInputElement>(null);
  React.useImperativeHandle(
    ref,
    () => ({
      setChecked(checked: boolean) {
        if (handleRef.current) {
          handleRef.current.checked = checked;
        }
      },
    }),
    []
  );

  const sizes: commonOptions = {
    sm: "px-2 py-2 text-sm ",
    lg: "px-3 py-3 text-sm ",
    regular: "px-3 py-2 text-sm ",
  };
  const borders: commonOptions = {
    border: "border-blueGray-300",
    borderless: "border-transparent shadow",
  };
  let inputClasses =
    sizes[size] +
    " w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-lightBlue-500 focus:ring-1 focus:border-lightBlue-500 border border-solid transition duration-200 ";
  inputClasses = borders[border] + " " + inputClasses;
  let leftAddon = null;
  let rightAddon = null;
  let wrapperClasses = "mb-3 pt-0";
  if (leftIcon) {
    inputClasses = inputClasses + "pl-10 ";
    wrapperClasses = "relative flex w-full flex-wrap items-stretch mb-3";
    leftAddon = (
      <span className="text-blueGray-300 absolute z-10 flex h-full w-8 items-center pl-3 text-center text-sm">
        <i className={leftIcon}></i>
      </span>
    );
  }
  if (rightIcon) {
    inputClasses = inputClasses + "pr-10 ";
    wrapperClasses = "relative flex w-full flex-wrap items-stretch mb-3";
    rightAddon = (
      <span className="text-blueGray-300 absolute right-0 z-10 flex h-full w-8 items-center text-center text-sm">
        <i className={rightIcon}></i>
      </span>
    );
  }
  return (
    <>
      <div className={wrapperClasses} ref={handleRef}>
        {leftAddon}
        {type && type === "textarea" ? (
          <textarea {...rest} className={inputClasses} />
        ) : (
          <input {...rest} type={type} className={inputClasses} />
        )}
        {rightAddon}
      </div>
    </>
  );
});

Input.displayName = "Input";

Input.defaultProps = {
  border: "border",
  size: "regular",
};

Input.propTypes = {
  border: PropTypes.oneOf(["border", "borderless"]),
  size: PropTypes.oneOf(["sm", "lg", "regular"]),
  // NOTE: you sould only pass icon classes
  // // // if you also pass tailwindcss classes
  // // // the output may not be a desired one
  leftIcon: PropTypes.string,
  // NOTE: you sould only pass icon classes
  // // // if you also pass tailwindcss classes
  // // // the output may not be a desired one
  rightIcon: PropTypes.string,
};

export default Input;
