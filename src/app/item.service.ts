import { Injectable } from '@angular/core';
import {ItemModel, Items} from './Models/itemModel';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CategoryModel } from './Models/categoryModel';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private baseUrl = 'https://localhost:44350/api/Item/';
  constructor(private http: Http) { }
  public getcategory(): Observable<CategoryModel[]> {
    return this.http.get(this.baseUrl + 'GetCategory').pipe(map((res: Response) => <CategoryModel[]> res.json()));
  }
  saveItem(item: ItemModel): any {
    this.http.post(this.baseUrl + 'SaveItem', item).subscribe(
        (data: any) => {
          return data;
        }
      );
    }
    public getitem(): Observable<ItemModel[]> {
      return this.http.get(this.baseUrl + 'GetItem').pipe(map((res: Response) => <ItemModel[]> res.json()));
    }
    public getItemname(): Observable<Items[]> {
      return this.http.get(this.baseUrl + 'GetItemname').pipe(map((res: Response) => <Items[]> res.json()));
    }
    public getitembyId(id): Observable<ItemModel> {
      return this.http.get(this.baseUrl + 'GetItembyId/' + id).pipe(map((res: Response) => <ItemModel> res.json()));
    }
    UpdateItem(item: ItemModel) {
      return this.http.put(this.baseUrl + 'UpdateItem', item);
    }
}
