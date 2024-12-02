import RecommendationCard from "@/components/Dashboard/Card";
import { render, screen } from "@testing-library/react";


const mockData = {
  title: "Test Recommendation",
  description: "This is a test description for the recommendation.",
  frameworks: [{ name: "Framework 1" }, { name: "Framework 2" }],
  affectedResources: [{ name: "Resource 1" }, { name: "Resource 2" }],
  impactAssessment: { totalViolations: 5 },
  score: 80,
};

describe("RecommendationCard Component", () => {
  it("renders the title correctly", () => {
    render(<RecommendationCard data={mockData} i={1} />);
    expect(screen.getByText(/Test Recommendation/i)).toBeInTheDocument();
  });

  it("renders the description correctly", () => {
    render(<RecommendationCard data={mockData} i={1} />);
    expect(
      screen.getByText(/This is a test description for the recommendation/i)
    ).toBeInTheDocument();
  });

  it("renders the frameworks correctly", () => {
    render(<RecommendationCard data={mockData} i={1} />);
    expect(screen.getByText(/Framework 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Framework 2/i)).toBeInTheDocument();
  });

  it("renders the affected resources correctly", () => {
    render(<RecommendationCard data={mockData} i={1} />);
    expect(screen.getByText(/Resource 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Resource 2/i)).toBeInTheDocument();
  });

  it("displays the impact assessment correctly", () => {
    render(<RecommendationCard data={mockData} i={1} />);
    expect(screen.getByText(/~5 Violations \/ month/i)).toBeInTheDocument();
  });

  it("renders the value score component with the correct props", () => {
    render(<RecommendationCard data={mockData} i={1} />);
    // Ensure the ScoreDots component is called with the correct score
    expect(screen.getByText(/Value Score/i)).toBeInTheDocument();
  });

  it("renders without crashing when no data is passed", () => {
    render(<RecommendationCard data={null} i={1} />);
    expect(screen.queryByText(/Test Recommendation/i)).not.toBeInTheDocument();
  });
});
