import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  product: any;
  productId!: string | null;
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.product = navigation?.extras?.state;
  }

  ngOnInit(): void {
    if(this.product === undefined) {
      this.router.navigate(['inventory'])
    }
  }

  onGoBack(): void {
    this.router.navigate(['/inventory'] );
  }


}
