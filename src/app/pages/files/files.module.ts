import { NgModule } from '@angular/core';
import { NbMenuModule, NbButtonModule, NbTreeGridModule, NbProgressBarModule, NbUserModule, NbIconModule, NbCardModule, NbCheckboxModule, NbPopoverModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';

import { DocumentsComponent } from './documents/documents.component';
import { FilesRoutingModule } from './files-routing.module';
import { FilesComponent } from './files.component'
import { AllFilesComponent } from './all-files/all-files.component'
@NgModule({
    imports: [
        FilesRoutingModule,
        ThemeModule,
        NbProgressBarModule,
        NbMenuModule,
        NbButtonModule,
        NbTreeGridModule,
        NbIconModule,
        NbCardModule,
        NbCheckboxModule,
        NbUserModule, 
        NbPopoverModule
    ],
    declarations: [
        DocumentsComponent,
        FilesComponent,
        AllFilesComponent
        
    ],
})
export class FilesModule {
}
