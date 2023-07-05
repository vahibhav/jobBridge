// import { render, screen, waitFor, fireEvent } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import "@testing-library/jest-dom";
// import { BrowserRouter, MemoryRouter } from "react-router-dom";
// import App from "../App";




// describe("full app rendering/navigating", () => {

//  1.  // Write test case to chekc if you click Jobs it gets routed to the page and find the test "List of jobs" on the page.


//  2. //Write test case to chekc if you click Jobs it gets routed to the page and validate the search input box shows the same value that you enter.
//   it("check search value in input box", async () => {

//   }); //it

// }); //describe

import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Jobs from "./jobs";

describe("full app rendering/navigating", () => {
  it("should navigate to Jobs page and check search value in input box", async () => {
    render(
      <MemoryRouter initialEntries={["/jobs"]}>
        <Jobs />
      </MemoryRouter>
    );

    const searchInput = screen.getByRole("searchbox", { name: "search-input" });
    const searchTerm = "React Developer";
    fireEvent.change(searchInput, { target: { value: searchTerm } });

    await waitFor(() => {
      expect(searchInput).toHaveValue(searchTerm);
    });
  });
});


