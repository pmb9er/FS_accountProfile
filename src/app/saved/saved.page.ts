import { Component, OnInit } from '@angular/core';
import { NavController }  from '@ionic/angular';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.page.html',
  styleUrls: ['./saved.page.scss'],
})
export class SavedPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) {}

  navToExplore() {
    this.navCtrl.navigateForward('explore');
  }

  navToSaved() {
    this.navCtrl.navigateForward('saved');
  }

  navToTrips() {
    this.navCtrl.navigateForward('trips');
  }

  navToInbox() {
    this.navCtrl.navigateForward('inbox');
  }

  navToProfile() {
    this.navCtrl.navigateForward('profile');
  }

  ngOnInit() {
  }

}
