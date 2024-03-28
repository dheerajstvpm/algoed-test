import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { IEventData } from '../event-card/event-card.component';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [NgOptimizedImage,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatIconModule,
    MatDialogClose,],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.css'
})
export class EventDetailComponent {
  public data: IEventData = inject(MAT_DIALOG_DATA);
  private sanitizer = inject(DomSanitizer);

  public videoURL: SafeResourceUrl | undefined=this.sanitizer.bypassSecurityTrustResourceUrl('about:blank');

  ngOnInit() {
    this.videoURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.video);
  }
}
