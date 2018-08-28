// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


// DB
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { IdeaComponent } from './idea/idea.component';
import { ContactComponent } from './contact/contact.component';
import { SubmitComponent } from './submit/submit.component';
import { RexService } from './rex.service';
import { RexDetailComponent } from './rex-detail/rex-detail.component';

// Ng bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    IdeaComponent,
    ContactComponent,
    SubmitComponent,
    RexDetailComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    NgbModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
