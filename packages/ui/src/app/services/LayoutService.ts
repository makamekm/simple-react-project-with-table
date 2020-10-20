import React from "react";
import { createService } from "react-service-provider";
import { useLocalStore } from "mobx-react";
import { isEqual } from "lodash";

const defaultState = {
  empty: false,
  scrollable: true
};

export interface LayoutConfig {
  empty?: boolean;
  scrollable?: boolean;
}

export const LayoutService = createService(() => {
  const state = useLocalStore(() => ({
    ...defaultState,
    change: (config: LayoutConfig) => {
      const newObj = {
        ...defaultState,
        ...config
      };
      for (const key in newObj) {
        state[key] = newObj[key];
      }
    }
  }));
  return state;
});

export const useLayoutConfig = (config: LayoutConfig) => {
  const service = React.useContext(LayoutService);
  const [storage] = React.useState(() => ({
    config: null
  }));
  React.useEffect(() => {
    const areObjsDifferent =
      storage.config == null || isEqual(config, storage.config);
    if (areObjsDifferent) {
      storage.config = config;
      service.change(config);
    }
  }, [service, config, storage]);
};
