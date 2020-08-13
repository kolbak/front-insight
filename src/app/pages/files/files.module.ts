import { NgModule } from '@angular/core';
import { NbMenuModule, NbButtonModule, NbTreeGridModule, NbProgressBarModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { NbIconModule, NbCardModule, NbCheckboxModule } from '@nebular/theme';
import { DocumentsComponent } from './documents/documents.component';
import { FilesRoutingModule } from './files-routing.module';
import {FilesComponent} from './files.component'
import {AllFilesComponent,FsIconComponent} from './all-files/all-files.component'
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
    ],
    declarations: [
        FsIconComponent,
        DocumentsComponent,
        FilesComponent,
        AllFilesComponent
        
    ],
})
export class FilesModule {
}
