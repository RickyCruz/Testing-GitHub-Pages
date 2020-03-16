import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageInfo } from '../interfaces/page-info.interface';
import { Team } from '../interfaces/team.interface';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {

  public info: PageInfo = {};
  private loaded: Boolean = false;
  public team: Team = {};

  constructor(private http: HttpClient) {
    this.loadInfo();
    this.fetchTeam();
  }

  private loadInfo() {
    // Read JSON file
    this.http.get('assets/data/data-page.json')
      .subscribe((response: PageInfo) => {
        this.loaded = true;
        this.info = response;
        console.log(response)
      });
  }

  private fetchTeam() {
    this.http.get('https://project-4564689245877046784.firebaseio.com/team.json')
      .subscribe((response: Team) => {
        this.loaded = true;
        this.team = response;
        console.log(response)
      });
  }
}
