import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-carousel', 
  templateUrl: './carousel.component.html',
  styles: [`img{
    max-width:100%;
    height:auto;
    max-height:100vh;
  }
  
  ngb-carousel{
    
  }
  `]
})
export class NgbdCarouselComponent {
  images = [`https://firebasestorage.googleapis.com/v0/b/dreamsbreakfast-ab859.appspot.com/o/img%2FlogoWIP14-2.png?alt=media&token=01dba213-0dab-41a3-a951-ed768ac054a6`];
}