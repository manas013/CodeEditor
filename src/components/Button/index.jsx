import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[3px]",
};
const variants = {
  outline: {
    red_A200: "border-red-A200 border border-solid",
  },
  fill: {
    light_blue_A700_28: "bg-light_blue-A700_28 text-light_blue-A700",
    light_blue_A700: "bg-light_blue-A700 text-white-A700",
  },
};
const sizes = {
  sm: "h-[36px] px-2.5",
  lg: "h-[40px] pl-5 pr-[35px] text-sm",
  xs: "h-[20px] px-1",
  md: "h-[36px] px-[31px] text-sm",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "light_blue_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["sm", "lg", "xs", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["red_A200", "light_blue_A700_28", "light_blue_A700"]),
};

export { Button };
