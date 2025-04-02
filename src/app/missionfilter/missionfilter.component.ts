import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './missionfilter.component.html',
  styleUrl: './missionfilter.component.css'
})
export class MissionfilterComponent {
  @Output() yearSelected = new EventEmitter<string>();

  years: string[] = [];

  ngOnInit(): void {
    // Sample static range (customize later if needed)
    const currentYear = new Date().getFullYear();
    for (let year = 2006; year <= currentYear; year++) {
      this.years.push(year.toString());
    }
  }

  onYearChange(event: any) {
    this.yearSelected.emit(event.target.value);
  }
}
