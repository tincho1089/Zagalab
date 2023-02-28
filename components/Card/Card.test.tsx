import { render } from "@testing-library/react";
import Card from "./Card";

const testCardData = {
  name: "Test Card",
  type: "Test Type",
  created: "2022-02-28",
  image: "https://www.example.com/test-image.jpg"
};

describe("Card component", () => {
  it("should render the card data correctly", () => {
    const { getByText, getByAltText } = render(<Card data={testCardData} />);
    
    expect(getByText(`Name: ${testCardData.name}`)).toBeInTheDocument();
    expect(getByText(`Type: ${testCardData.type}`)).toBeInTheDocument();
    expect(getByText(`Created: ${testCardData.created}`)).toBeInTheDocument();
  });
  
  it("should display 'No Type' when type is not provided", () => {
    const { getByText } = render(<Card data={{ name: "Test Card", created: "2022-02-28" }} />);
    
    expect(getByText("Type: No Type")).toBeInTheDocument();
  });
  
  it("should not render the image element when image is not provided", () => {
    const { queryByAltText } = render(<Card data={{ name: "Test Card", created: "2022-02-28" }} />);
    
    expect(queryByAltText("Image")).toBeNull();
  });
});
