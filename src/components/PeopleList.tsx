import * as React from "react";
import {Letter} from './Letter';

export class PeopleList extends React.Component {


  filterNames(names:String[], letter:String) {
    const nonEmptyNames:String[] = names.filter(name => name);
    const capitalizedNames:String[] = nonEmptyNames.map(name => name[0].toUpperCase() + name.slice(1));
    const filteredNames:String[] = capitalizedNames.filter(name => name[0] === letter);

    return filteredNames.sort();
    }



  render() {

    const letters: String[] = ["A", "B", "C", "D", "E", "J", "T"];
    const names: String[] = ["Cole", "Elizabeth", "Jessica", "Thomas"];

    return <div>

      {letters.map(letter => <Letter letter={letter} names={this.filterNames(names, letter)}/>)}
</div>;
  }
}
