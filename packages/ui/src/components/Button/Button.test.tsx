import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "./Button";
import { createHotPromise } from "../../utils";

test("render HELLO in Button", () => {
  const { getByText } = render(<Button>HELLO</Button>);
  const helloElement = getByText(/HELLO/i);
  expect(helloElement).toBeInTheDocument();
});

test("click on Button", async () => {
  const promise = createHotPromise();
  const { getByText } = render(
    <Button
      onClickEnter={() => {
        promise.resolve();
      }}
    >
      This
    </Button>
  );
  fireEvent(
    getByText("This"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true
    })
  );
  await promise;
  expect(promise).toBeDefined();
});
