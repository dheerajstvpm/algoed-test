import { Injectable } from '@angular/core';
import { IEventData } from '../components/event-card/event-card.component';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  historicData:IEventData[] = [
    {
      "id": 1,
      "title": "The Renaissance Begins",
      "date": "1400",
      "description": "The Renaissance period marks the revival of art, culture, and learning in Europe, leading to significant advancements in science, art, and philosophy.",
      "image": "assets/images/trb.jpg",
      "video": "https://www.youtube.com/embed/Om1jvUzVAtE"
    },
    {
      "id": 2,
      "title": "Declaration of Independence",
      "date": "1776",
      "description": "The Declaration of Independence was adopted by the Continental Congress, declaring the 13 American colonies independent from British rule and laying the foundation for the United States.",
      "image": "assets/images/doi.jpg",
      "video": "https://www.youtube.com/embed/LKJMWHCUoiw"
    },
    {
      "id": 3,
      "title": "Fall of the Berlin Wall",
      "date": "1989",
      "description": "The fall of the Berlin Wall symbolized the end of the Cold War and the reunification of East and West Germany, marking a significant moment in modern history.",
      "image": "assets/images/fobw.jpg",
      "video": "https://www.youtube.com/embed/Mn4VDwaV-oo"
    },
    {
      "id": 1,
      "title": "The Renaissance Begins",
      "date": "1400",
      "description": "The Renaissance period marks the revival of art, culture, and learning in Europe, leading to significant advancements in science, art, and philosophy.",
      "image": "assets/images/trb.jpg",
      "video": "https://www.youtube.com/embed/Om1jvUzVAtE"
    },
    {
      "id": 2,
      "title": "Declaration of Independence",
      "date": "1776",
      "description": "The Declaration of Independence was adopted by the Continental Congress, declaring the 13 American colonies independent from British rule and laying the foundation for the United States.",
      "image": "assets/images/doi.jpg",
      "video": "https://www.youtube.com/embed/LKJMWHCUoiw"
    },
    {
      "id": 3,
      "title": "Fall of the Berlin Wall",
      "date": "1989",
      "description": "The fall of the Berlin Wall symbolized the end of the Cold War and the reunification of East and West Germany, marking a significant moment in modern history.",
      "image": "assets/images/fobw.jpg",
      "video": "https://www.youtube.com/embed/Mn4VDwaV-oo"
    }
  ]
}
