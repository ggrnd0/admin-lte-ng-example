
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AlertModule, DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';

let modules = [
    AlertModule,
    DatepickerModule,
    BrowserModule,
    FormsModule,
    HttpModule
];

import { ExampleComponent } from './example.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNumComponent } from './pages/page-num/page-num.component';
import { ClientComponent } from './pages/client/client.component';

let pages = [
    HomeComponent,
    PageNumComponent,
    ClientComponent
];

@NgModule({
    declarations: [
        ExampleComponent,
        ...pages
    ],
    imports: [
        ...modules,
        RouterModule.forChild([
            {
                path: 'example',
                component: ExampleComponent,
                children: [
                    { path: '', component: HomeComponent },
                    { path: 'page/:id', component: PageNumComponent },
                    { path: 'client', component: ClientComponent }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ExampleModule { }