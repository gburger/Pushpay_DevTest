import React from "react";
import { Accordion } from "react-bootstrap";

import { fetchJson } from "../../api";
import { getPerson } from "../../api";
import { PersonType } from "../../types";
import Person from "../Person";

function People() {
  const [people, setPeople] = React.useState<PersonType[]>([]);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    let numPeople = 0;

    (async () => {
      await fetchJson<{ count: string }>("/people")
        .then((Response) => {
          numPeople = parseInt(Response.count, 10);
        })
        .then(() => {
          (async () => {
            //create tempory array to buil people list app place holder at 0
            let temp: PersonType[] = [
              {
                name: "",
                height: "",
                mass: "",
                birth_year: "",
                homeworld: "",
                films: [""],
                species: "",
              },
            ];
            //needs optimization very slow
            for (let i = 1; i < numPeople; i++) {
              await getPerson(i).then((person) => {
                temp[i] = person;
              });
            }
            //remove place holder first element
            temp.splice(0, 1);
            //verify data, remove anything broken
            for (let i = 0; i < temp.length; i++) {
              if (
                typeof temp[i].name == "undefined" ||
                typeof temp[i].mass == "undefined" ||
                typeof temp[i].height == "undefined" ||
                typeof temp[i].species == "undefined" ||
                typeof temp[i].homeworld == "undefined" ||
                typeof temp[i].films == "undefined"
              ) {
                temp.splice(i, 1);
              }
            }
            setPeople(temp);
          })();
        });
    })();
  }, []);

  return (
    <div className="m-0">
      <div className="d-flex justify-content-center m-2">
        <input
          type="text"
          placeholder="Search for a person..."
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>

      <div className="d-flex justify-content-center m-0">
        <Accordion>
          {people
            .filter((peopleList) => {
              //if search bar empty return full list
              if (search == "") {
                return peopleList;
                //return filter list
              } else if (
                peopleList.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return peopleList;
              }
            })
            .map((peopleList) => (
              <Person key="{index.Of(peopleList)}" person={peopleList} />
            ))}
        </Accordion>
      </div>
    </div>
  );
}

export default People;
