import { Component, OnInit } from '@angular/core';
import { NavController }  from '@ionic/angular';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {

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
