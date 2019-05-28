import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'list',
    templateUrl: './list.component.html'
})
export class ListComponent implements OnInit, OnDestroy {

    searchCustomersList = {};
    private subscription: Subscription;
    constructor(private service: DataService) { }

    ngOnInit() {
        // complete this function which searches the customer data & adds them to searchCustomersList
        this.subscription = this.service.currentSearchText.subscribe(filter => {
            this.searchCustomersList = this.loadCustomers(filter);
        });

    }
    private loadCustomers(search:string = '') {
        let customers = this.service.customers
        if (search) {
            customers = customers.filter(elem => {
                for(let key in elem){
                    let value = String(elem[key]);
                    let matched =  value.indexOf(search) !== -1;
                    if(matched)
                        return true;
                }
                return false;
            });
        }
        return customers;
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
