import { Component, OnInit } from '@angular/core';

import { NavigationExtras, Router } from '@angular/router';
import { IProduct } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  }

  listProducts: any;
  constructor(private router: Router, private service: ProductService) { }

  ngOnInit(): void {
    this.getProductsInit();
  }

  getProductsInit(): void {
    this.service.getProducts()
      .subscribe(response  => { 
        console.log('response', response);
        this.listProducts = response;
      })
  }

  onGoToEdit(item: IProduct): void {
    console.log(item);
    const { id } = item;
    this.navigationExtras.state = item;
    this.router.navigate(['/edit', id], this.navigationExtras);
  }
  
  onGoToDetail(item: IProduct): void {
    console.log(item);
    const { id } = item;
    this.navigationExtras.state = item;
    this.router.navigate(['/detail', id], this.navigationExtras);
  }


  onDelete(item: any): void {
    console.log(item);
    const { id} = item;
    Swal.fire({
      title: "Deseas Eliminar los cambios?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteProduct(id)
          .subscribe(response => {
            this.getProductsInit();
            Swal.fire("Saved!", "", "success");
          })
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

  onGoToNew(): void {
    this.router.navigate(['/new'],this.navigationExtras);
  }
}
