//external module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AlertModule, DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';

import { ExampleModule } from './example/';

export const firebaseConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyBa2SHrWzqOq_6VyoT9PGCBuG4uJo2n-xA99",
    authDomain: "localhost-74df1.firebaseapp.com",
    databaseURL: "https://localhost-74df1.firebaseio.com",
    storageBucket: "localhost-74df1.appspot.com"
};

let modules = [
    ExampleModule,
    AlertModule.forRoot(),
    DatepickerModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ToasterModule
];

import { AppHeaderComponent } from "./admin-lte/widgets/app-header";
import { MenuAsideComponent } from "./admin-lte/widgets/menu-aside";
import { MessagesBoxComponent } from "./admin-lte/widgets/messages-box";
import { NotificationBoxComponent } from "./admin-lte/widgets/notification-box";
import { TasksBoxComponent } from "./admin-lte/widgets/tasks-box";
import { UserBoxComponent } from "./admin-lte/widgets/user-box"

import { HomeComponent } from './home.component';

let widgets = [
    AppComponent,
    AppHeaderComponent,
    MenuAsideComponent,
    MessagesBoxComponent,
    NotificationBoxComponent,
    TasksBoxComponent,
    UserBoxComponent,
    HomeComponent
];

import { UserService } from "./admin-lte/services/user.service";
import { MessagesService } from "./admin-lte/services/messages.service";

let services = [
    UserService,
    MessagesService
];

let pages = [];

//main bootstrap
import { AppComponent } from './app.component';
import { routing } from './app.routes';

@NgModule({
    declarations: [
        ...widgets,
        ...pages
    ],
    imports: [
        ...modules,
        routing
    ],
    providers: [
        ...services
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
