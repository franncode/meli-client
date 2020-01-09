import { mount } from "enzyme";
import { Loader } from "./loader";

describe("<Loader/>", () => {
  let component;
  beforeEach(() => {
    component = mount(<Loader />);
  });

  it("should render component", () => {
    expect(component).toMatchInlineSnapshot(`ReactWrapper {}`);
    expect(component.length).toEqual(1);
    expect(component).toBeTruthy();
  });

  it("should render with img", () => {
    expect(component.find("#loader > img").type()).toEqual("img");
    expect(component.find("#loader > img").prop("src")).toEqual(
      "/icons/logo.png"
    );
  });
});
