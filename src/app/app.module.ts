import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { EndlessTableComponent } from './components/endless-table/endless-table.component';
import { PaginatedTableComponent } from './components/paginated-table/paginated-table.component';
import { SearchByFormComponent } from './components/search-by-form/search-by-form.component';
import { LoginComponent } from './components/login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSidenavModule } from "@angular/material/sidenav";

import { RouterModule, Routes } from "@angular/router";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatMenuModule} from "@angular/material/menu";
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'}, // Path match redirects exact empty string, not partially empty string
  { path: 'login', component: LoginComponent },
  { path: 'home', component: TabsComponent},
  { path: '**', component: LoginComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TabsComponent,
    EndlessTableComponent,
    PaginatedTableComponent,
    SearchByFormComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,

    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),

    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSidenavModule,
    FormsModule,
    MatTooltipModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
