import { EffectsModule } from '@ngrx/effects'
import { ModuleWithProviders, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CitiesComponent } from './containers/cities/cities.component'
import { CitiesListComponent } from './components/cities-list/cities-list.component'
import { cityReducer } from './cities-store/city.reducer'
import { Routes, RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { CityEffects } from './cities-store/city.effects'
import { MatIconModule } from '@angular/material/icon'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatDialogModule } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSelectModule } from '@angular/material/select'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatSortModule } from '@angular/material/sort'
import { MatTableModule } from '@angular/material/table'
import { MatTabsModule } from '@angular/material/tabs'
import { ReactiveFormsModule } from '@angular/forms'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatSliderModule } from '@angular/material/slider'

const citytRoutes: Routes = [{ path: '', component: CitiesComponent }]

@NgModule({
  declarations: [CitiesComponent, CitiesListComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatGridListModule,
    MatSliderModule,
    RouterModule.forChild([{ path: '', component: CitiesComponent }]),
    StoreModule.forFeature('cities', cityReducer),
    EffectsModule.forFeature([CityEffects])
  ]
})
export class CitiesModule {
  static forRoot(): ModuleWithProviders<CitiesModule> {
    return {
      ngModule: CitiesModule
    }
  }
}
