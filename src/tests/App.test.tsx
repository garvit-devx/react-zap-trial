import React from "react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "../App";
import store from "../store";

const queryClient = new QueryClient();

describe("Tests for <App /> element", () => {
  it("should render Home screen for the default route", () => {
    const { queryByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </Provider>
      </MemoryRouter>,
    );

    const homePageHeading = queryByText(/home page/i);
    expect(homePageHeading).toBeTruthy();
  });
});
