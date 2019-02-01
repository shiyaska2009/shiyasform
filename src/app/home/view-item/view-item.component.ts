import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/item.service';
import { ItemModel } from 'src/app/Models/itemModel';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  public data: ItemModel[];
  settings = {
    columns: {
      itemid: {
        title: 'ID'
      },
      item: {
        title: 'Item'
      },
      itemcode: {
        title: 'Item Code'
      }
    }
  };
   /* {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv'
    },
    // ... list of items
    {
      id: 11,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      email: 'Rey.Padberg@rosamond.biz'
    }
  ];*/
  constructor(private service: ItemService) { }

  ngOnInit() {
    this.service.getitem().subscribe(itm => {
      this.data = itm as ItemModel[];
  });
    console.log(this.data);
  }

}
