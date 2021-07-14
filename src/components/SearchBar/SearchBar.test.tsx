import React from "react";
import SearchBar from "./SearchBar";
import { Search } from "./SearchFunction";
import { PersonType } from "../../types";
import { render, fireEvent } from "@testing-library/react";

describe("<SearchBar />", () => {
  const people: PersonType[] = [
    {
      name: "Jek Tono Porkins",
      height: "180",
      mass: "110",
      birth_year: "896BBY",
      homeworld: "Bestine IV",
      films: ["A New Hope"],
      species: "Human",
      addInfo: true
    },
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      birth_year: "19BBY",
      homeworld: "Tatooine",
      films: [
        "A New Hope",
        "The Empire Strikes Back",
        "Return of the Jedi",
        "Revenge of the Sith"
      ],
      species: "Human",
      addInfo: true
    }
  ];

  const Luke: PersonType = {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    birth_year: "19BBY",
    homeworld: "Tatooine",
    films: [
      "A New Hope",
      "The Empire Strikes Back",
      "Return of the Jedi",
      "Revenge of the Sith"
    ],
    species: "Human",
    addInfo: true
  };

  const Jek: PersonType = {
    name: "Jek Tono Porkins",
    height: "180",
    mass: "110",
    birth_year: "896BBY",
    homeworld: "Bestine IV",
    films: ["A New Hope"],
    species: "Human",
    addInfo: true
  };

  test("search bar renders with place holder", () => {
    const { getByTestId } = render(
      <SearchBar
        handleSearch={(e) => {
          return e;
        }}
      />
    );
    const inputEl = getByTestId("input") as HTMLInputElement;
    expect(inputEl.placeholder).toBe("Search for a person...");
  });

  test("search bar function works correctly", () => {
    let newList: PersonType[] = [
      {
        name: "",
        height: "",
        mass: "",
        birth_year: "",
        homeworld: "",
        films: [""],
        species: "",
        addInfo: true
      }
    ];
    const { getByTestId } = render(
      <SearchBar
        handleSearch={(e) => {
          newList = Search(e.target.value, people);
        }}
      />
    );
    const inputEl = getByTestId("input") as HTMLInputElement;
    fireEvent.change(inputEl, {
      target: {
        value: "Luke Skywalker"
      }
    });
    expect(newList).toContainEqual(Luke);
    expect(newList).not.toContainEqual(Jek);
  });
});
