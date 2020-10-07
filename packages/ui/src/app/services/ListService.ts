import React from "react";
import { useLocalStore } from "mobx-react";
import { toast } from "react-toastify";
import { createService } from "react-service-provider";
import {
  LoadingService,
  LoadingStore
} from "~/components/Loading/LoadingService";
import { ITransaction } from "demo-nest-api/src/modules/transaction/transaction.model";
import { API } from "@env/config";

export const ListService = createService(
  () => {
    const state = useLocalStore(() => ({
      loadingService: null as LoadingStore,
      data: [] as ITransaction[],
      async load() {
        state.loadingService.setLoading(true, "dashboard");
        try {
          const responce = await fetch(`${API}v1/transaction/list`);
          const json = await responce.json();
          state.data = json.data;
        } catch (error) {
          console.error(error);
          toast("There was an error while loading data", {
            type: "error"
          });
        }
        state.loadingService.setLoading(false, "dashboard");
      }
    }));
    return state;
  },
  state => {
    state.loadingService = React.useContext(LoadingService);
  }
);
