import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private service: ApiserviceService, private router:ActivatedRoute) { }

  errormsg: any;
  successmsg: any;
  getparamid:any;

  ngOnInit(): void {
    this.getparamid = this.router.snapshot.paramMap.get('id')
    this.service.getSingleData(this.getparamid).subscribe((res) => {

      
      if( this.getparamid ) {
        this.userForm.patchValue({
          name: res.data[0].name,
          email: res.data[0].email,
          contact_no: res.data[0].contact_no,
        })
      }
    })
  }

  userForm = new FormGroup({
    'name': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'contact_no': new FormControl('', Validators.required)
  })

  userSubmit() {
    if(this.userForm.valid) {
      this.service.createData(this.userForm.value).subscribe((res) => {
        this.userForm.reset();
        this.successmsg = res.message;
      })
    } else {
      this.errormsg = "All field are required"
    }  
  }

  // updatedata
  userUpdate() {
    if(this.userForm.valid) {
      this.service.updateData(this.userForm.value, this.getparamid).subscribe( (res) => {
        this.userForm.reset();
        this.successmsg = res.message;
      })
    } else {
      this.errormsg = "All field are required"
    }  
    
  }

}
