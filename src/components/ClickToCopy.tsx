import React, { ReactNode } from "react";

type ClickToCopyProps = {
  content: string;
};

export const ClickToCopy = ({
  children,
  content,
}: React.PropsWithChildren<ClickToCopyProps>) => {
  const copyContent = () => navigator.clipboard.writeText(content);
  return <button onClick={copyContent}>{children}</button>;
};
