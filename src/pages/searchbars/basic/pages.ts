import { Component } from '@angular/core';


@Component({
  templateUrl: 'template.html'
})
export class BasicPage {
  items;
  sortedItems;

  constructor() {
    this.initializeItems();
    this.sortValue();
    console.log(this.sortedItems);
  }

  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
      'Buenos Aires',
      'Cairo',
      'Le Havre',
      'Lebanon',
      'Lhasa',
      'Lima',
      'London',
      'Los Angeles'
    ];
  }

  sortValue(){
    var alphabet = ['A', 'B', 'W', 'D', 'H', 'L'];
    var names = this.items;
    var groups = {};

    alphabet.forEach(function(letter){

    groups[letter] = [];

    names.forEach(function(name){
        if(name.substring(0,1)==letter){
            groups[letter].push(name);
        }
    });
});
  this.sortedItems = groups;
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
