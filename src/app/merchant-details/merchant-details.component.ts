import { Component, ViewChild } from '@angular/core';
import { MerchantRegisterdService } from '../services/merchant-registerd.service';
import{NgForm} from '@angular/forms';
// import { Product } from './details';
@Component({
  selector: 'app-merchant-details',
  templateUrl: './merchant-details.component.html',
  styleUrls: ['./merchant-details.component.css']
})
export class MerchantDetailsComponent {
  // userdata: any;
getUserFormData(data: any) {
this.userdata.saveUsers(data).subscribe((result)=>{
  console.log(result);
})
}
  @ViewChild('userForm') userForm!: NgForm;
users:any;

  constructor(private userdata:MerchantRegisterdService )
{
  this.userdata.users().subscribe((data:any)=>{
    this.users=data;
  })
}


ngOnInit():void{
  // this.userdata.saveUsers().subscribe((data)=>{
  //   this.users=data;
  // })
   
  }
}


