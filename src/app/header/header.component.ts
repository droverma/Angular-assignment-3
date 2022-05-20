import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isNoteView: any = true;

  constructor(private routerService: RouterService) {
   
  }

  switchView() {
    if (this.isNoteView) {
      this.routerService.routeToListView();
      this.isNoteView = false;
    } else {
      this.routerService.routeToNoteView();
      this.isNoteView = true;
    }
  }

}
