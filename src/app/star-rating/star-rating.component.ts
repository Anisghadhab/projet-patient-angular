// star-rating.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
})
export class StarRatingComponent {
  @Input() maxStars: number = 5;
  @Input() rating: number = 0;
  @Output() ratingChange = new EventEmitter<number>();

  stars: number[] = [];

  constructor() {
    this.stars = Array(this.maxStars).fill(0).map((_, index) => index + 1);
  }

  setRating(rating: number): void {
    this.rating = rating;
    this.ratingChange.emit(rating);
  }
}
