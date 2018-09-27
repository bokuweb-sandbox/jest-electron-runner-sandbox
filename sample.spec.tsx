import * as React from "react";
import renderer from "react-test-renderer";

describe("App", () => {
  it("should render", () => {
    const tree = renderer.create(<div />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(1).toEqual(1);
  });
});
