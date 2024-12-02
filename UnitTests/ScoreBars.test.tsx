import React from "react";
import { render } from "@testing-library/react";
import ScoreDots from "@/components/Dashboard/Dots";

describe("ScoreDots Component", () => {
  it("renders correctly with a score of 100", () => {
    const { container } = render(<ScoreDots score={100} />);
    const blueBars = container.querySelectorAll(".bg-blue-500");
    const grayBars = container.querySelectorAll(".bg-gray-300");

    expect(blueBars.length).toBe(5); // All bars should be blue
    expect(grayBars.length).toBe(0); // No gray bars
  });

  it("renders correctly with a score of 50", () => {
    const { container } = render(<ScoreDots score={50} />);
    const blueBars = container.querySelectorAll(".bg-blue-500");
    const grayBars = container.querySelectorAll(".bg-gray-300");

    expect(blueBars.length).toBe(3); // 3 bars should be blue
    expect(grayBars.length).toBe(2); // 2 bars should be gray
  });

  it("renders correctly with a score of 25", () => {
    const { container } = render(<ScoreDots score={25} />);
    const blueBars = container.querySelectorAll(".bg-blue-500");
    const grayBars = container.querySelectorAll(".bg-gray-300");

    expect(blueBars.length).toBe(1); // 1 bar should be blue
    expect(grayBars.length).toBe(4); // 4 bars should be gray
  });

  it("renders correctly with a score of 0", () => {
    const { container } = render(<ScoreDots score={0} />);
    const blueBars = container.querySelectorAll(".bg-blue-500");
    const grayBars = container.querySelectorAll(".bg-gray-300");

    expect(blueBars.length).toBe(0); // No blue bars
    expect(grayBars.length).toBe(5); // All bars should be gray
  });

  it("renders correctly with a score of 75", () => {
    const { container } = render(<ScoreDots score={75} />);
    const blueBars = container.querySelectorAll(".bg-blue-500");
    const grayBars = container.querySelectorAll(".bg-gray-300");

    expect(blueBars.length).toBe(4); // 4 bars should be blue
    expect(grayBars.length).toBe(1); // 1 bar should be gray
  });
});
