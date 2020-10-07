import React from "react";
import { observer } from "mobx-react";
import { useLayoutConfig } from "../services/LayoutService";
import { ListService } from "../services/ListService";

export const Dashboard = observer(() => {
  const state = React.useContext(ListService);
  useLayoutConfig({});
  React.useEffect(() => {
    state.load();
  }, [state]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6">
      <div className="w-4/6">Hello World!</div>
    </div>
  );
});
