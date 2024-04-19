import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../interface/category';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private url = 'https://www.themealdb.com/api/json/v1/1/categories.php'

  constructor(private httpClient: HttpClient) { }

  getCategories() {
    return this.httpClient.get<{ categories: Category[] }>(`${this.url}`)
  }
}
