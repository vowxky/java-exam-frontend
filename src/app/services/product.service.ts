import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL: string = "http://localhost:3000";
  private TOKEN: string = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`;

  constructor(private httpClient: HttpClient) { }

  getProducts(){
    return this.httpClient.get(`${this.API_URL}/products`);
  };

  saveProduct(data: IProduct) {
    return this.httpClient.post(`${this.API_URL}/products`, data, {
      headers: {
        'Authorization': `Bearer ${this.TOKEN}`,
        'Content-Type': 'application/json'
      }
    })
  };

  updateProduct(data: IProduct) {
    const { id } = data;
    return this.httpClient.put(`${this.API_URL}/products/${id}`, data, {
      headers: {
        'Authorization': `Bearer ${this.TOKEN}`,
        'Content-Type': 'application/json'
      }
    })
  }

  deleteProduct(id: number) {
    return this.httpClient.delete(`${this.API_URL}/products/${id}`, {
      headers: {
        'Authorization': `Bearer ${this.TOKEN}`,
        'Content-Type': 'application/json'
      }
    })
  }


}
