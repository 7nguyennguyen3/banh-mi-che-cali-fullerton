import React from "react";

interface Props {
  children: React.ReactNode;
  extraClassName?: string;
}

const MaxWithWrapper = ({ children, extraClassName }: Props) => {
  return (
    <div className={`w-full max-w-7xl mx-auto items-center ${extraClassName}`}>
      {children}
    </div>
  );
};

export default MaxWithWrapper;
