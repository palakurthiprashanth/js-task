import React from "react";

type ButtonProps= {
  label: string,
  onClick: () => void,
  className?: string,
  showAsLink?: boolean,
  disabled?: boolean
}

const Button = ({ label, onClick, className = '', showAsLink = false, disabled = false }: ButtonProps): JSX.Element => (
  <button
    className={`button ${showAsLink ? 'button-as-link link' : ''} ${className}`}
    onClick={onClick}
    disabled={disabled}
    data-testid="button"
  >
    {label}
  </button>
);

export default Button;
