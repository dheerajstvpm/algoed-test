import { Component, inject } from '@angular/core';
import { EventService } from '../../service/event.service';
import { EventCardComponent, IEventData } from '../event-card/event-card.component';
import { SearchPipe } from '../../pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, EventCardComponent, SearchPipe, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  public eventService = inject(EventService);
  public historicData: IEventData[] = [];
  public searchTerm = '';

  ngOnInit() {
    this.historicData = [...this.historicData, ...this.eventService.historicData];
  }
}
