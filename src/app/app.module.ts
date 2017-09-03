import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MaterialModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FitnessExercisesListComponent } from './fitness-exercises-list/fitness-exercises-list.component';
import { FitnessExercisesItemComponent } from './fitness-exercises-list/fitness-exercises-item/fitness-exercises-item.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersItemComponent } from './customers-list/customers-item/customers-item.component';
import { TrainingProgramListComponent } from './training-program-list/training-program-list.component';
import { TrainingProgramItemComponent } from './training-program-list/training-program-item/training-program-item.component';
import { TrainingProgramDetailComponent } from './training-program-list/training-program-detail/training-program-detail.component';
import { WorkoutListComponent } from './training-program-list/training-program-detail/workout-list/workout-list.component';
import { WorkoutItemComponent } from './training-program-list/training-program-detail/workout-list/workout-item/workout-item.component';
import { WorkoutDetailComponent } from './training-program-list/training-program-detail/workout-list/workout-detail/workout-detail.component';
import { CustomerDetailComponent } from './customers-list/customer-detail/customer-detail.component';
import { FitnessExercisesService } from './shared/services/fitness-exercises.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FitnessExercisesListComponent,
    FitnessExercisesItemComponent,
    CustomersListComponent,
    CustomersItemComponent,
    TrainingProgramListComponent,
    TrainingProgramItemComponent,
    TrainingProgramDetailComponent,
    WorkoutListComponent,
    WorkoutItemComponent,
    WorkoutDetailComponent,
    CustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    MdDatepickerModule,
    MdNativeDateModule,
    NoopAnimationsModule
  ],
  providers: [FitnessExercisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
