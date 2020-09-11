import { NgModule } from '@angular/core';
import { NbContextMenuModule, NbMenuModule, NbButtonModule, NbTreeGridModule, NbProgressBarModule, NbUserModule, NbIconModule, NbCardModule, NbCheckboxModule, NbInputModule, NbFormFieldModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';

import { DocumentsComponent, ShowUserDataComponent } from './documents/documents.component';
import { FilesRoutingModule } from './files-routing.module';
import { FilesComponent, AddSectionComponent } from './files.component'
import { AllFilesComponent } from './all-files/all-files.component'
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
    imports: [
        NgxChartsModule, 
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
        NbInputModule, 
        NbFormFieldModule,
        NbContextMenuModule
    ],
    declarations: [
        DocumentsComponent,
        FilesComponent,
        AllFilesComponent,
        ShowUserDataComponent, 
        AddSectionComponent
    ],
})
export class FilesModule {
}
