import React from "react";
import { observer } from "mobx-react";
import { useLayoutConfig } from "../services/LayoutService";

export const Dashboard = observer(() => {
  useLayoutConfig({});

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6">
      <div className="w-4/6">Hello World!</div>
    </div>
  );
});
