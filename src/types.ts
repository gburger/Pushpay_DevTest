export interface PersonType {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
  homeworld: string;
  films: string[];
  species: string;
  addInfo: boolean;
}

export interface PeoplePage {
  results: PersonType[];
  next: string;
}
