import React from "react";
import { useLocalStore } from "mobx-react";
import { toast } from "react-toastify";
import { createService } from "react-service-provider";
import {
  LoadingService,
  LoadingStore
} from "~/components/Loading/LoadingService";
import { API } from "@env/config";

export const ListService = createService(
  () => {
    const state = useLocalStore(() => ({
      loadingService: null as LoadingStore,
      data: [] as any[],
      async load() {
        state.loadingService.setLoading(true, "dashboard");
        await new Promise(r => setTimeout(r, 1000));
        state.loadingService.setLoading(false, "dashboard");
      }
    }));
    return state;
  },
  state => {
    state.loadingService = React.useContext(LoadingService);
  }
);
