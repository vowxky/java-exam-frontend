import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DistribuitorsComponent } from './components/distribuitors/distribuitors.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { DetailComponent } from './components/product/detail/detail.component';
import { EditComponent } from './components/product/edit/edit.component';
import { NewComponent } from './components/product/new/new.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DistribuitorsComponent,
    InventoryComponent,
    DetailComponent,
    EditComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
