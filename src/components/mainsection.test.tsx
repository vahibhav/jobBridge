// import Main from "./mainsection";
// import Jobs from "./jobs";
// import { render, screen, fireEvent } from "@testing-library/react";

// // Write test case to check what you pass to the props reflect the same on the page.(hint: use getByText() method)

// describe("when rendered Main component with `heading` prop", () => {



// });

import Main from "./mainsection";
import { render, screen } from "@testing-library/react";

describe("when rendered Main component with `heading` prop", () => {
    it("should display the heading passed through props", () => {
        const headingText = "Find Your Dream Job"; // Replace this with the expected heading text
        render(<Main heading={headingText} />);

        const headingElement = screen.getByText(headingText);
        expect(headingElement).toBeInTheDocument();
    });
});
