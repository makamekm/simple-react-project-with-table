import React from "react";
import classNames from "classnames";

export const HeaderSection = ({
  no,
  title,
  subTitle,
  children,
  className
}: {
  no?: string | number;
  title?: string;
  subTitle?: any;
  children?: any;
  className?: string;
}) => (
  <div
    className={classNames(
      "no-print-break no-print-break-after flex items-center text-5xl font-light",
      className
    )}
  >
    <div>
      <div className="mr-3 display-4 text-muted">{no}.</div>
    </div>
    {(title || children || subTitle) && (
      <div className="text-2xl">
        <div className="mt-1 text-gray-900">{title}</div>
        {subTitle && <div className="text-sm">{subTitle}</div>}
        {children && <div className="text-md">{children}</div>}
      </div>
    )}
  </div>
);

HeaderSection.defaultProps = {
  no: 0,
  title: ""
};
