import React from "react";

import { classNames } from "../../utils/index";

import Loading from "../Loading";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean;
  label: string;
  icon?: React.ReactNode;
  primary?: boolean;
  loading?: boolean;
  disabled?: boolean;
};

export default function Button({
  type = "button",
  label,
  onClick,
  disabled,
  icon,
  fullWidth = false,
  primary = false,
  loading = false,
}: Props) {
  return (
    <button
      type={type}
      className={classNames(
        fullWidth && "w-full",
        primary
          ? "bg-orange-bitcoin text-white border border-transparent"
          : `bg-white text-gray-700 border border-gray-200`,
        primary && !disabled && "hover:bg-orange-bitcoin-700",
        !primary && !disabled && "hover:bg-gray-100",
        disabled ? "cursor-default" : "cursor-pointer",
        "inline-flex justify-center items-center px-7 py-2 font-medium rounded-md shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-bitcoin transition-colors duration-150"
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {loading && (
        <div className="mr-2">
          <Loading color={primary ? "white" : "black"} />
        </div>
      )}
      {icon && <div className="mr-2">{icon}</div>}
      {label}
    </button>
  );
}
