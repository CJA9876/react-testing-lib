import React from "react";
import { render } from "@testing-library/react";
import Profile from "./Profile";

describe("<Profile />", () => {
    it("matches snapshot", () => {
        const utils = render(<Profile username="JA" name="최진아" />);
        expect(utils.container).toMatchSnapshot();
    });
    it("shows thhe props correctly", () => {
        const utils = render(<Profile username="JA" name="최진아" />);
        utils.getByText("JA1");
        utils.getByText("(최진아)");
        // utils.getByText("JA (최진아)");
    });
});