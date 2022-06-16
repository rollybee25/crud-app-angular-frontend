import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  readData: any;
  successmsg: any;

  constructor(private service:ApiserviceService) { }

  ngOnInit(): void {
    this.getAllData();
  }

  deleteID(id:any) {
    this.service.deleteData(id).subscribe((res) => {
      this.successmsg = res.message;
      this.getAllData();
    })
  }


  getAllData() {
    this.service.getAllData().subscribe((res) => {
      this.readData = res.data;
    })
  }

}
