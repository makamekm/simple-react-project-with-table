import React from "react";
import { observer, useLocalStore } from "mobx-react";
import { useLayoutConfig } from "../services/LayoutService";
import { HeaderSection } from "~/components/Blocks/HeaderSection";
import { Toggle } from "~/components/Toggle/Toggle";
import { Dropdown } from "~/components/Dropdown/Dropdown";
import { Typeahead } from "~/components/Typeahead/Typeahead";

const typeaheadMockData = ["jhghjghj", "kjhjkgh"];

export const Dashboard = observer(() => {
  useLayoutConfig({});

  const state = useLocalStore(() => ({
    checked0: false,
    typeahead0: [] as typeof typeaheadMockData
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
          placeholder="Add items..."
          autoFocus
          multiple
          allowNew
          onChange={values =>
            state.typeahead0.splice(0, state.typeahead0.length, ...values)
          }
          selected={state.typeahead0}
          options={typeaheadMockData}
        >
          dfsfsdfdsf
        </Typeahead>
      </div>
    </div>
  );
});
