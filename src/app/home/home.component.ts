import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { ItemModel } from '../Models/itemModel';
import { CategoryModel } from '../Models/categoryModel';
import { ItemService } from '../item.service';
import { Observable } from 'rxjs';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  item: ItemModel;
  categoryid: number;
  result: string;
  public categories$: Observable<CategoryModel[]>;
  constructor(private service: ItemService) { }
  createTask = new FormGroup({
    itemcode: new FormControl(''),
    item: new FormControl(''),
    category: new FormControl(''),
    isactive: new FormControl('')
  });
  ngOnInit() {
   this.categories$ = this.service.getcategory();
   console.log(this.categories$);
  }
  onSubmit() {
    this.item = {
      itemcode: this.createTask.get('itemcode').value,
      item: this.createTask.get('item').value,
      catid: this.categoryid,
      isactive: this.createTask.get('isactive').value,
      itemid: '0',
      exdate: '30/01/2019',
      itemtype: 'Product'
    };
    console.log(this.item);
    this.result = this.service.saveItem(this.item);
    alert(this.result.toString());
    if ( this.result === 'Success') {
   alert('Saved Successfully');
   this.createTask.reset();
    }

  }
  onChange(event) {
   this.categoryid = event.value;
  }
}
