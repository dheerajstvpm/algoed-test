import { Pipe, PipeTransform } from '@angular/core';
import { IEventData } from '../components/event-card/event-card.component';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(value: IEventData[], searchTerm: string): IEventData[] {
    if (!value) return [];
    if (!searchTerm) return value;
    searchTerm = searchTerm.toLowerCase();
    return value.filter((item)=>{
      return JSON.stringify(item).toLowerCase().includes(searchTerm);
    });
  }

}
