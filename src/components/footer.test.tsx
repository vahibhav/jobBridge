// import { render, screen } from "@testing-library/react";
// import Footer from "./footer";
// //Kept the import as hint

// // Write test case to find the anchor tag Home and check if it has url as 'http://localhost:3000/#' (hint: use getByRole() method)

// describe("check the footer works", () => {

// });


import { render, screen } from "@testing-library/react";
import Footer from "./footer";

describe("check the footer works", () => {
    test("anchor tag for Home has correct URL", () => {
        render(<Footer />);

        const homeLink = screen.getByRole("link", { name: "JobBridge" });

        expect(homeLink).toHaveAttribute("href", "http://localhost:3000/#");
    });
});