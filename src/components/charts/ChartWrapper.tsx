import classNames from "classnames";
import { FC, JSXElementConstructor, ReactElement } from "react";
import { ResponsiveContainer } from "recharts";

interface ChartWrapperProps {
  className?: string;
  children: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
  title: string;
}

export const ChartWrapper: FC<ChartWrapperProps> = ({
  className,
  children,
  title,
}) => (
  <div
    className={classNames(
      "bg-e-2 rounded-lg text-center text-lg w-full",
      className
    )}
  >
    <span>{title}</span>
    <ResponsiveContainer width="99%" height={300}>
      {children}
    </ResponsiveContainer>
  </div>
);
