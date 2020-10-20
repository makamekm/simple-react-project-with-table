import React from "react";
import { useLocalStore } from "mobx-react";
import { toast } from "react-toastify";
import { createService } from "react-service-provider";
import { ITransaction } from "demo-nest-api/src/modules/transaction/transaction.model";
import { API } from "@env/config";
import { fetchJson, useOnLoadPathnameRegExp } from "demo-nest-ui-shared";

const DASHBOARD_PATH_REGEXP = /^\/dashboard/i;

export const ListService = createService(
  () => {
    const state = useLocalStore(() => ({
      loading: false,
      data: [] as ITransaction[],
      async load() {
        state.loading = true;
        try {
          state.data = await fetchJson<ITransaction[]>(
            `${API}v1/transaction/list`
          );
        } catch (error) {
          console.error(error);
          toast("There was an error while loading data", {
            type: "error"
          });
        }
        state.loading = false;
      }
    }));
    return state;
  },
  state => {
    useOnLoadPathnameRegExp(DASHBOARD_PATH_REGEXP, state.load);
  }
);
