import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserArticle } from '../../../_core/data/userArticle';
import { ArticleDataService } from './_services/article-data.service';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  
  
  public articles: UserArticle[] = [];
  
  constructor(
    private articleDataService: ArticleDataService
  ){
    articleDataService.getArticles().subscribe(data=>{
      this.articles = data;
    });
  }
}
