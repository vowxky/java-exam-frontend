import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  product: any;
  productId!: string | null;
  tempImage: string | null = null;

  constructor(private service: ProductService, 
    private router: Router, private route: ActivatedRoute) {
      const navigation = this.router.getCurrentNavigation();
      this.product = navigation?.extras?.state;
      this.productId = this.route.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    if (this.product === undefined) {
      this.router.navigate(['inventory']);
    }

    this.tempImage = this.product?.image || null;
  }

  onSave(item: IProduct): void {
    if (this.tempImage) {
      item.image = this.tempImage;
    }

    let data: IProduct = {
      id: Number(this.productId),
      title: item.title,
      description: item.description,
      price: item.price,
      brand: item.brand,
      stock: item.stock,
      image: item.image
    };

    this.service.updateProduct(data)
      .subscribe(response => {
        this.router.navigate(['inventory']);
      });
  }

  onGoBack(): void {
    this.router.navigate(['/']);
  }

  onFileSelected(event: any): void {
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
}