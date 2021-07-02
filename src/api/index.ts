import { PersonType } from "../types";

export async function fetchJson<Response = any>(
  url: string,
  init?: RequestInit
): Promise<Response> {
  const response = await fetch(`https://swapi.dev/api/${url}`, {
    ...(init ?? {}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return response.json();
}

export async function getPerson(id: number) {
  //create place holder for building new person
  let person: PersonType;

  person = {
    name: "",
    height: "",
    mass: "",
    birth_year: "",
    homeworld: "",
    species: "",
    films: [""],
  };
  //grab person
  await fetchJson<{
    name: string;
    height: string;
    mass: string;
    birth_year: string;
    homeworld: string;
    films: string[];
    species: string;
  }>("people/" + id)
    //assign person values from api
    .then((Response) => {
      person.name = Response.name;
      person.height = Response.height;
      person.mass = Response.mass;
      person.birth_year = Response.birth_year;
      person.homeworld = Response.homeworld;
      person.species = Response.species;
      person.films = Response.films;
    })
    //if person missing kick log
    .catch(() => {
      console.log("Person id " + id + " missing");
      return;
    })
    //swapi leaves species empty if human otherwise grab the species name from swapi
    .then(() => {
      if (person.species.length === 0) {
        person.species = "Human";
      } else {
        let url = person.species[0].substring("https://swapi.dev/api/".length);
        fetchJson<{ name: string }>(url).then((Response) => {
          person.species = Response.name;
        });
      }
    })
    .catch(() => {
      console.log("Person id " + id + " species missing");
      return;
    })
    //grab homeworld name from swapi
    .then(() => {
      let url = person.homeworld.substring("https://swapi.dev/api/".length);
      fetchJson<{ name: string }>(url).then((Response) => {
        person.homeworld = Response.name;
      });
    })
    .catch(() => {
      console.log("Person id " + id + " homeworld missing");
      return;
    })
    //grab the list of films from swapi
    .then(() => {
      for (let i = 0; i < person.films.length; i++) {
        let url = person.films[i].substring("https://swapi.dev/api/".length);
        (async () => {
          await fetchJson<{ title: string }>(url).then((Response) => {
            person.films[i] = Response.title;
          });
        })();
      }
    })
    .catch(() => {
      console.log("Person id " + id + " Films missing");
      return;
    });

  return person;
}
