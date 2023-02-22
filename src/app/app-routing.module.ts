import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerchantDetailsComponent } from './merchant-details/merchant-details.component';
import { MerchantStatusComponent } from './merchant-status/merchant-status.component';


const routes: Routes = [

  // { path:'', component: MerchantDetailsComponent},
    // { path: 'status', component: MerchantStatusComponent}



  // {path:'', redirectTo:'/merchant',pathMatch:'full'},

{path:'merchant', component:MerchantDetailsComponent },
// {path: '', pathMatch: 'full', component:  MerchantDetailsComponent}, // no route specified
  {path:'', component:  MerchantDetailsComponent, pathMatch: 'full'},


{path:'status',component:MerchantStatusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
