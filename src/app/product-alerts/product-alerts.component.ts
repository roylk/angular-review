import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from  '../products' ;

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product!: Product; //l'entité product provient du parent
   //pas oublier ! après le nom
  @Output() notify= new EventEmitter(); //instacie un emetteur d'évènement

  constructor() { }

  ngOnInit(): void {
  }

}
