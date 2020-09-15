import { NgModule } from '@angular/core';
import { NbSelectModule, NbListModule, NbContextMenuModule, NbMenuModule, NbButtonModule, NbTreeGridModule, NbProgressBarModule, NbUserModule, NbIconModule, NbCardModule, NbCheckboxModule, NbInputModule, NbFormFieldModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';

import { DocumentsComponent, ShowUserDataComponent } from './documents/documents.component';
import { FilesComponent } from './files.component'
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
    imports: [
        NbSelectModule,
        NbListModule,
        NgxChartsModule, 
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
        ShowUserDataComponent,
    ],
})
export class FilesModule {
}
