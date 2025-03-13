import { Injectable } from '@angular/core';
import { UserArticle } from '../../../../_core/data/userArticle';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {


  data: UserArticle[] = [
    // {
    //   id: "OIDJF-388D88-IODSJF8-OSDIF7",
    //   title: "2025",
    //   tx: "<p>Szczęśliwego nowego roku</p><img src=\"/SMFInfoWeb/assets/ai-generated-9147506_1280.jpg\">"
    // },
  ];


  
  public getArticles(): Observable<UserArticle[]>{
    return of(this.data);
  }



}
