import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonMatComponent } from './button-mat/button-mat.component';
import {MatIconModule} from '@angular/material/icon';
import { TableEXComponent } from './table-ex/table-ex.component';
import {MatTableModule} from '@angular/material/table';
import { Table2exComponent } from './table2ex/table2ex.component';
import { MatPaginationModule } from '@angular/material/paginator';




@NgModule({
  declarations: [
    AppComponent,
    ButtonMatComponent,
    TableEXComponent,
    Table2exComponent
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginationModule
    
    
  ],
  
  providers: [],
  bootstrap: [Table2exComponent]
})
export class AppModule { }
