import { NgOptimizedImage } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { EventDetailComponent } from '../event-detail/event-detail.component';
import { MatDialog } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

export interface IEventData {
  id: number,
  title: string,
  date: string,
  description: string,
  image: string,
  video: string
}

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [NgOptimizedImage, MatCardModule],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {
  private dialog = inject(MatDialog);

  event = input<IEventData>({
    id: 1,
    title: "",
    date: "",
    description: "",
    image: "",
    video: ""
  });

  openDialog() {
    this.dialog.open(EventDetailComponent, {
      panelClass: 'custom-dialog',
      data: {
        id: this.event().id,
        title: this.event().title,
        date: this.event().date,
        description: this.event().description,
        image: this.event().image,
        video: this.event().video
      }
    });
  }
}
