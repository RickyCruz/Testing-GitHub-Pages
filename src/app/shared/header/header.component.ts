import { Component, OnInit } from '@angular/core';
import { PageInfoService } from '../../services/page-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(public pageInfoService: PageInfoService) { }

  ngOnInit() {
  }

}
