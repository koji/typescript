import React from "react";

interface Props {
  onClick: () => void;
  children: string;
}

export const DumbButton = ({ onClick, children }: Props) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  );
};
