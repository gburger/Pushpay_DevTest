import { PersonType } from "../../types";

export function Search(searchParm: string, PeopleList: PersonType[]) {
  let newPeopleList: PersonType[] = [
    {
      name: "",
      height: "",
      mass: "",
      birth_year: "",
      homeworld: "",
      films: [""],
      species: "",
      addInfo: false
    }
  ];
  
  if (searchParm.length > 0) {
    for (let i = 0; i < PeopleList.length; i++) {
      if (PeopleList[i].name.toLowerCase().includes(searchParm.toLowerCase()))
        newPeopleList.push(PeopleList[i]);
    }
    newPeopleList.splice(0, 1);
    return newPeopleList;
  } else return PeopleList;
}
