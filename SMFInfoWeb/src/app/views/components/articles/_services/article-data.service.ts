import { Injectable } from '@angular/core';
import { UserArticle } from '../../../../_core/data/userArticle';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {


  data: UserArticle[] = [
    {
      id: "oidsjf-387ch-sdaus7-d-iuhiudshf87",
      title: "Art nr 1",
      tx: "osdjsofdi jfodsijf odsij fodsifjodsijf oij"
    },
    {
      id: "oidsjf-387ch-ialiowf7-d-iuhiudshf87",
      title: "Art nr 2",
      tx: "osdjsofdi jfodsijf odsij fodsifjodsijf oij"
    },
    {
      id: "oidsjf-387ch-cncncn7-d-iuhiudshf87",
      title: "Art nr 3",
      tx: "osdjsofdi jfodsijf odsij fodsifjodsijf oij"
    },
  ];


  
  public getArticles(): Observable<UserArticle[]>{
    return of(this.data);
  }



}
