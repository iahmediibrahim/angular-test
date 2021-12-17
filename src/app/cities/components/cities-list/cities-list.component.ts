import { City } from './../../city'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {
  @Input() cities: City[]

  @Output() removeFromPopulation = new EventEmitter<void>()
  @Output() growPopulation = new EventEmitter<void>()
  @Output() filterByPopulation = new EventEmitter<void>()

  NukeAmount = 5000000
  formatLabel(value: number) {
    if (value >= 1000000) {
      return Math.round(value / 1000000) + 'm'
    }

    return value
  }
  constructor() {}

  ngOnInit() {}
  removeMillions(city): void {
    this.removeFromPopulation.emit(city)
  }
  growByAMillion(city): void {
    this.growPopulation.emit(city)
  }
  filter(event: any): void {
    this.filterByPopulation.emit(event.value)
  }
}
