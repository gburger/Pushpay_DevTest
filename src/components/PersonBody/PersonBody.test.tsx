import { render } from "@testing-library/react";

import { PersonType } from "../../types";
import PersonBody from "./PersonBody";

describe("<PersonBody />", () => {
  const person: PersonType = {
    name: "Jek Tono Porkins",
    height: "180",
    mass: "110",
    birth_year: "896BBY",
    homeworld: "Bestine IV",
    films: ["A New Hope"],
    species: "Human",
    addInfo: true
  };
  test("should render a person body card with height 180 cm", () => {
    const { getByTestId } = render(<PersonBody person={person} />);
    const heightEl = getByTestId("height");
    expect(heightEl.textContent).toBe("Height: 180 cm");
  });

  test("should render a person body card with weight 110 kg", () => {
    const { getByTestId } = render(<PersonBody person={person} />);
    const weightEl = getByTestId("weight");
    expect(weightEl.textContent).toBe("Weight: 110 kg");
  });

  test("should render a person body card with species human", () => {
    const { getByTestId } = render(<PersonBody person={person} />);
    const speciesEl = getByTestId("species");
    expect(speciesEl.textContent).toBe("Species: Human");
  });

  test("should render a person body card with birth Year 896BBY", () => {
    const { getByTestId } = render(<PersonBody person={person} />);
    const birthyearEl = getByTestId("birth year");
    expect(birthyearEl.textContent).toBe("Birth Year: 896BBY");
  });

  test("should render a person body card with homeworld Bestine IV", () => {
    const { getByTestId } = render(<PersonBody person={person} />);
    const homeworldEl = getByTestId("homeworld");
    expect(homeworldEl.textContent).toBe("Homeworld: Bestine IV");
  });

  test("should render a person body card with film A New Hope", () => {
    const { getByTestId } = render(<PersonBody person={person} />);
    const filmsEl = getByTestId("films");
    expect(filmsEl.textContent).toBe("Apearned in: A New Hope");
  });
});
