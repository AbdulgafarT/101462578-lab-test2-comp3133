import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SpacexService } from '../spacex.service';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule, RouterModule, MaterialModule, MissionfilterComponent],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css'
})
export class MissionlistComponent implements OnInit {
  launches: any[] = [];
  allLaunches: any[] = [];

  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    this.spacexService.getLaunches().subscribe(data => {
      this.launches = data;
      this.allLaunches = data;
    });
  }

  filterByYear(year: string) {
    this.launches = year
      ? this.allLaunches.filter(m => m.launch_year === year)
      : this.allLaunches;
  }
}
