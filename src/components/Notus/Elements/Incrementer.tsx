import React from "react";
import PropTypes from "prop-types";

// components
import Button from "./Button.jsx";
import Input from "./Input.jsx";

interface IncrementerProps {
  defaultValue?: any;
  size?: any;
  color?: any;
  onChange?: any;
  onMinus?: any;
  onPlus?: any;
  max?: any;
  min?: any;
  changeValue?: any;
}

export default function Incrementer(props: IncrementerProps) {
  const {
    defaultValue,
    size,
    color,
    onChange,
    onMinus,
    onPlus,
    max,
    min,
    changeValue,
  } = props;
  const [inputValue, setInputValue] = React.useState(defaultValue);
  const decrement = () => {
    onChange(inputValue - changeValue < min ? min : inputValue - changeValue);
    onMinus(inputValue - changeValue < min ? min : inputValue - changeValue);
    setInputValue(
      inputValue - changeValue < min ? min : inputValue - changeValue
    );
  };
  const increment = () => {
    onChange(inputValue + changeValue > max ? max : inputValue + changeValue);
    onPlus(inputValue + changeValue > max ? max : inputValue + changeValue);
    setInputValue(
      inputValue + changeValue > max ? max : inputValue + changeValue
    );
  };
  return (
    <>
      <div className="relative inline-flex w-full flex-row items-stretch">
        <div className="mr-2">
          <Button color={color} size={size} onClick={decrement}>
            <i className="fas fa-minus"></i>
          </Button>
        </div>
        <div className="mr-2">
          <Input
            value={inputValue}
            onChange={(e: any) => {
              e.preventDefault();
            }}
            type="text"
          />
          ``
        </div>
        <div>
          <Button color={color} size={size} onClick={increment}>
            <i className="fas fa-plus"></i>
          </Button>
        </div>
      </div>
    </>
  );
}

Incrementer.defaultProps = {
  // onChange: () => {},
  // onMinus: () => {},
  // onPlus: () => {},
  color: "orange",
  defaultValue: 0,
  min: -100,
  max: 100,
  changeValue: 1,
  size: "regular",
};

Incrementer.propTypes = {
  defaultValue: PropTypes.number,
  // the number with which the increment should increase
  // and the decrement should decrease
  changeValue: PropTypes.number,
  // what is the last number you can decrement to
  min: PropTypes.number,
  // what is the last number you can increment to
  max: PropTypes.number,
  size: PropTypes.oneOf(["sm", "lg", "regular"]),
  color: PropTypes.oneOf([
    "facebook",
    "twitter",
    "instagram",
    "github",
    "pinterest",
    "youtube",
    "vimeo",
    "slack",
    "dribbble",
    "reddit",
    "tumblr",
    "linkedin",
    "white",
    "light",
    "dark",
    "blueGray",
    "red",
    "orange",
    "amber",
    "emerald",
    "teal",
    "lightBlue",
    "indigo",
    "purple",
    "pink",
  ]),
  // this function will be called for both
  // increment and decrement actions
  // Example of usage: onChange={(value) => console.log(value)}
  // the above example will show you the new value
  onChange: PropTypes.func,
  // this function will be called for
  // the decrement action
  // Example of usage: onMinus={(value) => console.log(value)}
  // the above example will show you the new value
  onMinus: PropTypes.func,
  // this function will be called for
  // the increment action
  // Example of usage: onMinus={(value) => console.log(value)}
  // the above example will show you the new value
  onPlus: PropTypes.func,
};
