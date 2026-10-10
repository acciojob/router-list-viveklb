import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Router item navigation", () => {
  test("renders the item list and item detail page for a selected item", () => {
    window.history.pushState({}, "", "/");
    render(<App />);

    expect(screen.getByRole("heading", { name: "Item List" })).toBeTruthy();
    expect(screen.getAllByRole("listitem")).toHaveLength(3);

    fireEvent.click(screen.getByRole("link", { name: "Item 2" }));
    expect(screen.getByRole("heading", { name: "Item 2" })).toBeTruthy();
    expect(screen.getByText("Description for Item 2")).toBeTruthy();
  });

  test("renders the correct detail page for a direct route", () => {
    window.history.pushState({}, "", "/items/3");
    render(<App />);

    expect(screen.getByRole("heading", { name: "Item 3" })).toBeTruthy();
    expect(screen.getByText("Description for Item 3")).toBeTruthy();
  });
});
