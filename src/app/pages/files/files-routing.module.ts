import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {DocumentsComponent} from './documents/documents.component'
import { AllFilesComponent} from './all-files/all-files.component'
import {FilesComponent} from './files.component'
const routes: Routes = [{
  path: '',
  component: FilesComponent,
  children: [
    {
        path: 'allfiles',
        component: AllFilesComponent,
      }, 
    {
        path: '',
        redirectTo: 'allfiles',
        pathMatch: 'full',
      },

    
  ],
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilesRoutingModule {
}
