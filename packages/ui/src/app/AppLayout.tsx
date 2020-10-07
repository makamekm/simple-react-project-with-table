import React from "react";
import { ToastContainer } from "react-toastify";
import { LayoutService } from "./services/LayoutService";
import { observer } from "mobx-react";
import { useHistory } from "react-router";
import { Button } from "~/components/Button/Button";

export const AppLayout: React.FC = observer(({ children }) => {
  const history = useHistory();
  const service = React.useContext(LayoutService);
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="min-h-screen">
        <div className="lg:flex">
          <div className="relative flex-1 flex flex-col min-h-screen">
            <div className="flex-1 flex flex-col">
              {!service.empty && (
                <div className="flex items-center justify-between px-6 py-3">
                  <div>
                    <Button
                      className="-mx-4"
                      onClickEnter={() => {
                        history.push("/");
                      }}
                    >
                      Home
                    </Button>
                  </div>
                </div>
              )}
              {children}
            </div>
            {!service.empty && (
              <div className="text-gray-700 text-center text-xs pb-2 pt-5 mx-auto no-print">
                #MaximKarpovApps |{" "}
                <a className="link" href="https://github.com/makamekm">
                  github.com/makamekm
                </a>{" "}
                | in 2020{" "}
              </div>
            )}
          </div>
        </div>
        <style jsx>{`
          :global(body) {
            max-height: ${service.scrollable ? "unset" : "100vh"};
            overflow-y: ${service.scrollable ? "visible" : "hidden"};
          }
        `}</style>
      </div>
    </>
  );
});
