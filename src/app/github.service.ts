import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private readonly url = 'https://api.github.com/users/alejoschlegel/starred';

  constructor( private httpClient: HttpClient ) { }

  loadRepos = () => {
    return this.httpClient.get(`${this.url}?type=owner`)
      .pipe(
        map((item: any) => item.filter((value: any) => value.owner.login.includes('alejoschlegel'))),
      );
  };

}