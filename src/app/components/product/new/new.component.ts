import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  imageUrl: string | ArrayBuffer | null = null;
  @ViewChild('productForm') productForm: any;
  @ViewChild('fileInput') fileInput: ElementRef | undefined;

  tempImage: string | null = null;

  constructor(private service: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  onSave(item: IProduct): void {
    if (this.tempImage) {
      item.image = this.tempImage;
    }

    let data: IProduct = {
      title: item.title,
      description: item.description,
      price: item.price,
      brand: item.brand,
      stock: item.stock,
      image: item.image
    };

    this.service.saveProduct(data)
      .subscribe(response => {
        this.router.navigate(['inventory']);
      });
  }

  onGoBack(): void {
    this.router.navigate(['/inventory']);
  }

  onFileSelected(event: any, item: IProduct): void {
    const fileInput = event.target;
    const file = fileInput.files?.[0];
  
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.tempImage = (e.target as FileReader).result as string;
      };
  
      reader.readAsDataURL(file);
    }
  }

  clearFile(): void {
    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
      this.tempImage = null;
    }
  }
}