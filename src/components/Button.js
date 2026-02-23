import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  linkTo,
  ...props
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const className = `btn ${checkButtonStyle} ${checkButtonSize} ${props.className || ""}`;

  if (linkTo) {
    return (
      <Link to={linkTo} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
