import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-header',
  templateUrl: `./header.component.html`,
  styles:[`
  .header-img{
    max-height:calc(100vh - 100px);
    width:auto;
  }`]
})
export class HeaderComponent  {
  
}