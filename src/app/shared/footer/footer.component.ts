import { Component, OnInit } from '@angular/core';
import { PageInfoService } from '../../services/page-info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {
  private year: Number = new Date().getFullYear();

  constructor(public pageInfoService: PageInfoService) { }

  ngOnInit() {
  }

}
