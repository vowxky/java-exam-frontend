import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './components/inventory/inventory.component';
import { DistribuitorsComponent } from './components/distribuitors/distribuitors.component';
import { NewComponent } from './components/product/new/new.component';
import { EditComponent } from './components/product/edit/edit.component';
import { DetailComponent } from './components/product/detail/detail.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'inventory', pathMatch: 'full'
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path: 'distribuitors',
    component: DistribuitorsComponent
  },

  {
    path: 'new',
    component: NewComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
