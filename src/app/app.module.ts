import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatListModule} from '@angular/material/list';
import { HeaderComponentComponent } from './components/login-component/login-header-component.component';
import { AppComponentComponent } from './components/side-bar-app-component/app-component.component'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatDividerModule} from '@angular/material/divider';
import { MainAppComponentComponent } from './components/main-app-component/main-app-component.component'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table'; 
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ArticalsComponent } from './components/articals/articals.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes = [
  {path:'articals',component: ArticalsComponent},
  
 
 
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    AppComponentComponent,
    MainAppComponentComponent,
    ArticalsComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
