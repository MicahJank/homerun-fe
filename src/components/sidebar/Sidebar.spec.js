import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import Sidebar from "./Sidebar";

test("shows navigation and closes when a destination is selected", () => {
  const setOpened = jest.fn();
  const store = configureStore()({ household: { children: [] } });
  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Sidebar opened={true} setOpened={setOpened} />
      </MemoryRouter>
    </Provider>
  );

  expect(getByText("Dashboard")).toHaveAttribute("href", "/dashboard");
  fireEvent.click(getByText("Household"));
  expect(setOpened).toHaveBeenCalledWith(false);
});
