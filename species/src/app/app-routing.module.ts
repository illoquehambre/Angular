import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeciesInformationComponent } from './components/species-information/species-information.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';

const routes: Routes = [
    { path: 'species-info/id', component: SpeciesInformationComponent },
    { path: 'species-list', component: SpeciesListComponent },
    { path: '', redirectTo: '/species-list', pathMatch: 'full' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
