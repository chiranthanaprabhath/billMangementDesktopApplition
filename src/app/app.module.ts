import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMainNavigationComponent } from './views/header-main-navigation/header-main-navigation.component';
import { FooterOptionListComponent } from './views/footer-option-list/footer-option-list.component';
import { AddBillDetailsComponent } from './views/bill-view/add-bill-details/add-bill-details.component';
import { ViewBillDetailsComponent } from './views/bill-view/view-bill-details/view-bill-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './views/login-page/login-page.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MainPageComponent } from './views/main-page/main-page.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {IgxBottomNavModule, IgxIconModule} from "igniteui-angular";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from '@angular/material/core';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { PopUpDialogComponent } from './views/pop-up-dialog/pop-up-dialog.component';
import {FooterActionService} from "./service/footer-action.service";



@NgModule({
  declarations: [
    AppComponent,
    HeaderMainNavigationComponent,
    FooterOptionListComponent,
    AddBillDetailsComponent,
    ViewBillDetailsComponent,
    LoginPageComponent,
    MainPageComponent,
    PopUpDialogComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgbModule,
        MatCheckboxModule,
        FormsModule,
        MatTabsModule,
        MatIconModule,
        IgxBottomNavModule,
        IgxIconModule,
        MatGridListModule,
        MatButtonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatPaginatorModule,
        MatTableModule,
        MatDialogModule,
        MatProgressBarModule
    ],
  providers: [
    FooterActionService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
