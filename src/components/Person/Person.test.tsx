import { render } from "@testing-library/react";

import { PersonType } from "../../types";
import Person from "./Person";

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

  test("should render a person card with name Jek Tono Porkins", () => {
    const { getByTestId } = render(<Person person={person} />);
    const nameEl = getByTestId("header" + person.name);
    expect(nameEl.textContent).toBe("Jek Tono Porkins");
  });

  test("should render a person card body of Jek Tono Porkins", () => {
    const { getByTestId } = render(<Person person={person} />);
    const nameEl = getByTestId("body" + person.name);
    expect(nameEl.textContent).toContain("Height: 180");
  });
});
