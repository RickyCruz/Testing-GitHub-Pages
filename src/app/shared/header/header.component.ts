import { Component, OnInit } from '@angular/core';
import { PageInfoService } from '../../services/page-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(
    public pageInfoService: PageInfoService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  searchProduct(keyword: string) {
    if (keyword.length < 1) {
      return;
    }

    this.router.navigate(['/search', keyword]);
  }

}
