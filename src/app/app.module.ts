import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, Routes, RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SearchBusComponent } from './search-bus/search-bus.component';
import { BusViewComponent } from './bus-view/bus-view.component';
import { PaymentComponent } from './payment/payment.component';

import { DataService } from './shared/service/data.service';
import { GaurdrouterService } from './shared/service/gaurdrouter.service';
import { GaurdBusViewService } from './shared/service/gaurd-bus-view.service';
import { appRoutes } from './route.const';
import { GstPipePipe } from './shared/pipes/gst-pipe.pipe';
import { NgProgressModule } from 'ngx-progressbar';
import { InternetBankingComponent } from './payment/internet-banking/internet-banking.component';
import { CreditCardComponent } from './payment/credit-card/credit-card.component';
import { CodComponent } from './payment/cod/cod.component';
import { GetComponent } from './http/get/get.component';
import { PostComponent } from './http/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { AjaxService } from './shared/service/ajax.service';
import { TemplateComponent } from './forms/template/template.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { ObservableComponent } from './observable/observable.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchBusComponent,
    BusViewComponent,
    PaymentComponent,
    GstPipePipe,
    InternetBankingComponent,
    CreditCardComponent,
    CodComponent,
    GetComponent,
    PostComponent,
    TemplateComponent,
    ReactiveComponent,
    ObservableComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgProgressModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataService,
    AjaxService,
    GaurdrouterService,
    GaurdBusViewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
