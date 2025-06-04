import React from "react";
import { ReactElement, ReactNode, isValidElement, cloneElement } from "react";

type WithPropLayoutProps<T> = {
  children: ReactNode;
  propName: string;
  data: T;
};

export function WithPropLayout<T>({
  children,
  propName,
  data,
}: WithPropLayoutProps<T>) {
  return (
    <>
      {React.Children.map(children, (child) => {
        if (isValidElement(child)) {
          console.log("child", child);
          return cloneElement(child as ReactElement, {
            [propName]: data,
          });
        }
        return child;
      })}
    </>
  );
}
