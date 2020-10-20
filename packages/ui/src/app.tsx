import React from "react";
import { useServiceProvider } from "react-service-provider";
import { HashRouter as Router } from "react-router-dom";
import { RoutedContent } from "./routing";

import { AppLayout } from "./app/AppLayout";
import { LayoutService } from "./app/services/LayoutService";
import { ListService } from "./app/services/ListService";

const basePath = process.env.BASE_PATH || "/";

export const App = () => {
  const [ServiceProvider, ServiceProviderHook] = useServiceProvider(
    LayoutService,
    ListService
  );

  return (
    <ServiceProvider>
      <Router basename={basePath}>
        <ServiceProviderHook>
          <AppLayout>
            <RoutedContent />
          </AppLayout>
        </ServiceProviderHook>
      </Router>
    </ServiceProvider>
  );
};
