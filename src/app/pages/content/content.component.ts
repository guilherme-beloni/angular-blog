import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photoCover: string = 'https://www.callofduty.com/content/dam/atvi/infinityward/iw-touchui/news/feature/2022/11/WZ2-S01-DMZ-TACTICS-TOUT.jpg'
  contentTitle: string = 'Meu Artigo'
  contentDescription: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum nihil accusantium voluptatem aut expedita nemo ipsa, ad blanditiis obcaecati ea eveniet unde ratione nesciunt!aloaaaPossimus nesciunt iste praesentium consectetur numquam?'
}
