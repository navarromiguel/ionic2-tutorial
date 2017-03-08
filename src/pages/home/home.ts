import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  public items = [];
 
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
 
  }
 
  ionViewDidLoad(){
 
  }
 
  addItem(){
 
  }
 
  viewItem(item){
 	
  }
 
}