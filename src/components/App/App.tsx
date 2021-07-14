import React from "react";
import Person from "../Person";
import SearchBar from "../SearchBar";
import { buildPeopleList } from "../../api";
import { PersonType } from "../../types";
import { Search } from "../SearchBar/SearchFunction";
import { Accordion } from "react-bootstrap";

function App() {
  //people is a baseline state and is never modified, acts as referance for search function 
  const [people, setPeople] = React.useState<PersonType[]>([]);
  //runningPeople is modified to display the people list from search function
  const [runningPeople, setRunningPeople] = React.useState<PersonType[]>([]);

  React.useEffect(() => {
    (async () => {
      setPeople(
        await buildPeopleList().then((results) => {
          setRunningPeople(results);
          return results;
        })
      );
    })();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url("https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-25.jpg")`,
        margin: 0
      }}
    >
      <div className="d-flex justify-content-center m-2">
        <SearchBar
          handleSearch={(e) => {
            setRunningPeople(Search(e.target.value, people));
          }}
        />
      </div>
      <div className="d-flex justify-content-center m-2">
        <Accordion data-testid="PeopleList">
          {runningPeople.map((peopleList) => (
            <Person person={peopleList} key={peopleList.name} />
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default App;
