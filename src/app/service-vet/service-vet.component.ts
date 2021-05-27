import { Services } from './../modules/services';
import { ServiceService } from './../services/service.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-service-vet',
  templateUrl: './service-vet.component.html',
  styleUrls: ['./service-vet.component.scss']
})
export class ServiceVetComponent implements OnInit {

  dataServices: Services[] 

  connection: Subscription = new Subscription();
  constructor(
    public servicesVet: ServiceService,
  ) {
    this.connection = this.servicesVet.ReadAllDataServices().subscribe((returnData) =>{
      this.dataServices = returnData;
    })
   }

  ngOnInit(): void {
  }

}
