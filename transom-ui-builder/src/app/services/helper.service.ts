import { Injectable } from '@angular/core';
import categoryData from '../data/category.json';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  public constructor() {}

  public getCategories(): any[] {    
    return categoryData.categories;
  }
}
