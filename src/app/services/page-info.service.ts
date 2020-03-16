import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageInfo } from '../interfaces/page-info.interface';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {

  public info: PageInfo = {};
  private loaded: Boolean = false;

  constructor(private http: HttpClient) {
    // Read JSON file
    this.http.get('assets/data/data-page.json')
      .subscribe((response: PageInfo) => {
        this.loaded = true;
        this.info = response;
        console.log(response)
      });
  }
}
