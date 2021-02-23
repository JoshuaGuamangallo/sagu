import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  position={
    lat: -0.2371913,
    lng: -78.5291564
  }

  constructor() { }

  ngOnInit(): void {
  }

}
