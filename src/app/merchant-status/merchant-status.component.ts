import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MerchantRegisterdService } from '../services/merchant-registerd.service';
import { Product } from './detail';

@Component({
  selector: 'app-merchant-status',
  templateUrl: './merchant-status.component.html',
  styleUrls: ['./merchant-status.component.css']
})
export class MerchantStatusComponent implements OnInit {
  [x: string]: Object;
  @ViewChild('userForm')
  userForm:NgForm;

constructor(private ids:MerchantRegisterdService ){

  
}
// table :any;
  table: Product[];
  ngOnInit(): void {
    this.ids.users().subscribe((data)=>{
      this.table!=data;
    })
  }

  get(){
    this
  }

}
function viewchild(arg0: string) {
  throw new Error('Function not implemented.');
}

