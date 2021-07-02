import { render, screen } from "@testing-library/react";

import { PersonType } from "../../types";
import Person from "./Person";

describe("<Person />", () => {
  const person: PersonType = {
    name: "Jek Tono Porkins",
    height: "180",
    mass: "110",
    birth_year: "896BBY",
    homeworld: "Bestine IV",
    films: ["A New Hope"],
    species: "Human",
  };
  test("should render a person object", () => {
    render(<Person person={person} />);

    expect(screen.getByText(person.name)).toHaveTextContent("Jek Tono Porkins");
  });
});
