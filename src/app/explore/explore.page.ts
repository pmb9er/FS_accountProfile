import { Component, OnInit } from '@angular/core';
import { NavController }  from '@ionic/angular';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {

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

