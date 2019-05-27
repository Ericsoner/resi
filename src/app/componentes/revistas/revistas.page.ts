import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-revistas',
  templateUrl: './revistas.page.html',
  styleUrls: ['./revistas.page.scss'],
})
export class RevistasPage implements OnInit {

  constructor(private iab: InAppBrowser) { }
    openBlank(){
      this.iab.create("https://cloud.3dissue.net/15814/15891/15992/15654/index.html?42267","_blank");
    }
  ngOnInit() {
  }

}
