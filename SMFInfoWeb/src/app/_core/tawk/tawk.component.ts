import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-tawk',
  standalone: true,
  imports: [],
  templateUrl: './tawk.component.html',
  styleUrl: './tawk.component.scss'
})
export class TawkComponent implements OnInit{


  private _tawkScript = `  
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/6453ef696a9aad4bc578f034/1hsi7f0ee';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();  
  `;


  constructor(
    private render: Renderer2
  ){}

  ngOnInit(): void {
    console.log("Loading Tawk ...");
    this.embedScript();
  }


  private embedScript(): void{
    const element = this.render.createElement('script');
    element.text = this._tawkScript;
    this.render.appendChild(document.body, element);
  }


  

}
