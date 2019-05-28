import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  customers = [
    { name: "Jeremy Clarke", age: 21, id: 12345, gender: "Male", location: "Melbourne", income: "$120,000" },
    { name: "Matty Bing", age: 25, id: 12225, gender: "Female", location: "Toronto", income: "$950,000" },
    { name: "Tanya Smith", age: 18, id: 12455, gender: "Female", location: "New York City", income: "$150,000" },
    { name: "Sparsh Saxena", age: 25, id: 13345, gender: "Male", location: "Philadephia", income: "$200,000" },
    { name: "Adam Gilly", age: 32, id: 12344, gender: "Male", location: "Melbourne", income: "$2,200,000" },
    { name: "Glenn Adams", age: 34, id: 12395, gender: "Male", location: "Adelaide", income: "$4,200,000" },
    { name: "Stuart McGill", age: 32, id: 19945, gender: "Male", location: "Arlington", income: "$400,000" },
    { name: "Erica Edwards", age: 25, id: 11145, gender: "Female", location: "Toronto", income: "$2,200,000" }
  ]

  private searchTextSource = new BehaviorSubject<string>("");
  currentSearchText = this.searchTextSource.asObservable();

  constructor() { }

  changeSearchText(searchText: string) {
    // add data to an observable
    this.searchTextSource.next(searchText);
  }
}
