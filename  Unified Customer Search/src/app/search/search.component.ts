import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { debounceTime, distinctUntilChanged, startWith, map } from 'rxjs/operators';

@Component({
  selector: 'search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  constructor(private fb: FormBuilder, public service: DataService) { }

  ngOnInit() {
      
    // add corresponding validators
    this.searchForm = this.fb.group({
      searchText: ['', Validators.required]
    });

    // write a subsciber/valueChanges function that calls changeSearchText upon value change in the form
    this.searchForm.valueChanges.pipe(
        startWith(''),
        debounceTime(400),
        distinctUntilChanged(),
        map((form:any) => {
            this.service.changeSearchText(form.searchText);
        })
    ).subscribe();
  }

}
