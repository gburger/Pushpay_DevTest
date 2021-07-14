import { PersonType } from "../types";

//api call funciton
export async function fetchJson<Response = any>(
  url: string,
  init?: RequestInit
): Promise<Response> {
  const response = await fetch(`https://swapi.dev/api/${url}`, {
    ...(init ?? {}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });

  return response.json();
}

//function take a swapi page number and retruns the page of people and the address of the next page
export async function getPeoplePage(pagenum: number) {
  const response = await fetchJson<{ results: PersonType[]; next: string }>(
    "people/?page=" + pagenum
  );
  return { people: response.results, nextPage: response.next };
}

//funntion gets all pages of people from swapi and returns an array of people
export async function buildPeopleList() {
  let page = await getPeoplePage(1);
  let i = 2;
  //get next people page if there is one
  while (page.nextPage !== null) {
    let tempPage = await getPeoplePage(i);
    page.people = page.people.concat(tempPage.people);
    page.nextPage = tempPage.nextPage;

    i++;
  }

  //set the addInfo param for all people in list
  for (let x = 0; x < page.people.length; x++) {
    page.people[x].addInfo = false;
  }

  console.log("load complete");
  return page.people;
}

//function takes person and retrieves the additional information, returns person with info
export async function getPersonInfo(person: PersonType) {
  //if the person has already had the additional info added return
  if (person.addInfo) {
    return person;
  }
  //swapi has no species if species is human
  if (person.species.length === 0) {
    person.species = "Human";
  } else {
    const species = await fetchJson<{ name: string }>(
      person.species[0].substring("https://swapi.dev/api/".length)
    );
    person.species = species.name;
  }
  const homeworld = await fetchJson<{ name: string }>(
    person.homeworld.substring("https://swapi.dev/api/".length)
  );
  person.homeworld = homeworld.name;

  for (let i = 0; i < person.films.length; i++) {
    const film = await fetchJson<{ title: string }>(
      person.films[i].substring("https://swapi.dev/api/".length)
    );
    person.films[i] = film.title;
  }

  person.addInfo = true;
  return person;
}
