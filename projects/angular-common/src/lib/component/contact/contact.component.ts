import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarReviewPipe } from "../../pipe/star-review-pipe/star-review.pipe";

@Component({
  selector: 'lib-contact',
  standalone: true,
  imports: [
    CommonModule,
    StarReviewPipe
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  stars: string[] = ['&#9733;', '&#9733;', '&#9733;', '&#9733;', '&#9733;'];

}
