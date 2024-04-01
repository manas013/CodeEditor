import React from "react";

const sizes = {
  s: "text-2xl font-bold md:text-[22px]",
  md: "text-[28px] font-bold md:text-[26px] sm:text-2xl",
  xs: "text-sm font-semibold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-200 font-lato ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
