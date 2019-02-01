import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/item.service';
import { Observable } from 'rxjs';
import { Items, ItemModel } from 'src/app/Models/itemModel';
import { FormGroup, FormControl } from '@angular/forms';
import { CategoryModel } from 'src/app/Models/categoryModel';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  public items$: Observable<Items[]>;
  public itemlst$: Observable <ItemModel>;
  public categories$: Observable<CategoryModel[]>;
  itemid: string;
  categoryid: number;
  constructor(private service: ItemService) { }
  createTask = new FormGroup({
    itemcode: new FormControl(''),
    item: new FormControl(''),
    catid: new FormControl(''),
    isactive: new FormControl('')
  });

  ngOnInit() {
    this.categories$ = this.service.getcategory();
    this.items$ = this.service.getItemname();
    console.log(this.items$);
  }
  onChangeItem(event) {
     this.service.getitembyId(event.value).pipe( map(itm => {
       alert(itm);
     // this.createTask.get('itemcode').value(itm.itemcode);
     // this.createTask.get('catid').value(itm.catid);
    }));


    this.itemlst$ = this.service.getitembyId(event.value);
      this.itemlst$.subscribe((itm: ItemModel) => {
        this.createTask.get('itemcode').setValue(itm.itemcode);
        this.createTask.get('catid').setValue(itm.catid);
        this.categoryid = itm.catid;
        this.itemid = itm.itemid;
      });
  }
  onChange(event) {
    this.categoryid = event.value;
   }
  onSubmit() {
    const updatedItem = this.createTask.value as ItemModel;
    updatedItem.itemid = this.itemid;
    const updatedResult = this.service.UpdateItem(updatedItem).subscribe(response => console.log(response));
    alert('Updated Successfully');
   this.createTask.reset();
  }
}
