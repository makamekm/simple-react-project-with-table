import React from "react";
import { observer, useLocalStore } from "mobx-react";
import { useLayoutConfig } from "../services/LayoutService";
import { HeaderSection } from "~/components/Blocks/HeaderSection";
import { Toggle } from "~/components/Toggle/Toggle";
import { Dropdown } from "~/components/Dropdown/Dropdown";
import { Typeahead } from "~/components/Typeahead/Typeahead";

export const Dashboard = observer(() => {
  useLayoutConfig({});

  const state = useLocalStore(() => ({
    checked0: false
  }));

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6">
      <div className="w-4/6">
        <HeaderSection no="0" title="Toggle Control" />
        <Toggle
          checked={state.checked0}
          onChange={value => (state.checked0 = value)}
        />
      </div>

      <div className="mt-4 w-4/6">
        <HeaderSection no="1" title="Dropdown" />
        <Dropdown title="Click Me">I am the inside content</Dropdown>
      </div>

      <div className="mt-4 w-4/6">
        <HeaderSection no="2" title="Typeahead" />
        <Typeahead
          selected={[]}
          options={[
            {
              id: "asdasd",
              title: "test"
            }
          ]}
        >
          dfsfsdfdsf
        </Typeahead>
      </div>
    </div>
  );
});
