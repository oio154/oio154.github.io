import { Component, OnInit } from '@angular/core';
import { VersionService, versionDataI } from '../../_core/version.service';


@Component({
  selector: 'app-version',
  imports: [],
  templateUrl: './version.component.html',
  styleUrl: './version.component.scss'
})
export class VersionComponent implements OnInit{
  
  public ver: string = "";

  constructor(private versionService: VersionService){
  }

  ngOnInit(): void {
    this.versionService.getVersion().subscribe((res: versionDataI)=>{
      this.ver = res.data;
    });
  }
  
}
