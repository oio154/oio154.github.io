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
      title: "Zmiany infrastruktury",
      tx: "W czasie długiego weekendu w Państwa firmie prowadzone będą zmiany infrastruktury sieciowej, programowej i komputerowej. Może się to wiązać - mam nadzieję z jak najmniejszymi -utrudnieniami w dostępie do zasobów informatycznych. W celu upłynnienia pracy i umożliwienia szybkiego reagowania, na ten czas, na dole tej strony załączono ikonę czatu. Czatu niniejszego mogą używać wszyscy pracownicy Spółdzielni. Można za jego pośrednictwem zgłosić bezpośrednio do obsługi wszelkie błędy i niedogodności a także uzyskać odpowiedzi na wszelkie pytania dotyczące infrastruktury informatycznej, proszę jednak nie przesyłać za pomocą czatu żadnych danych osobowych. Można się przedstawić wyłącznie imieniem, loginem a nawet wewnętrznym numerem telefonu."
    },
    {
      id: "oidsjf-387ch-ialiowf7-d-iuhiudshf87",
      title: "Zmiana haseł",
      tx: "Po długim weekendzie zostaną zmienione nazwy użytkowników i hasła do komputerów. Obrazkowe instrukcje logowania znajdą Państwo pod swoimi klawiaturami. Załączone tam hasła zadziałają dopiero pierwszego dnia po przerwie majowej."
    },
  ];


  
  public getArticles(): Observable<UserArticle[]>{
    return of(this.data);
  }



}
