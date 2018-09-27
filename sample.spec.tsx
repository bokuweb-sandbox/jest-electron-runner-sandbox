import * as React from "react";
import { render } from "react-dom";
import renderer from "react-test-renderer";

describe("App", () => {
  it("should render", async () => {
    const tree = renderer.create(<div>Hello World!!</div>).toJSON();
    expect(tree).toMatchSnapshot();
    const div = document.createElement("div");
    document.body.style.backgroundColor = "white";
    document.body.appendChild(div);
    render(<div>Hello world!</div>, document.querySelector("div"));
    expect(1).toEqual(1);
    const { remote } = require("electron");
    await new Promise(resolve => {
      setTimeout(() => {
        const webContents = remote.getCurrentWebContents();
        webContents.capturePage(
          {
            x: 0,
            y: 0,
            width: 1280,
            height: 780
          },
          (img: any) => {
            const size = img.getSize();
            const ratio = window.devicePixelRatio;
            const png = img
              .resize({
                width: size.width / ratio,
                height: size.height / ratio
              })
              .toDataURL();
            require("fs").writeFileSync(
              "sample.png",
              png.split(",")[1],
              "base64"
            );
            resolve();
          }
        );
      }, 10);
    });
  });
});
