import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchBusComponent } from './search-bus/search-bus.component';
import { BusViewComponent } from './bus-view/bus-view.component';
import { GaurdBusViewService } from './shared/service/gaurd-bus-view.service';
import { PaymentComponent } from './payment/payment.component';
import { GaurdrouterService } from './shared/service/gaurdrouter.service';
import { GetComponent } from './http/get/get.component';
import { PostComponent } from './http/post/post.component';
import { TemplateComponent } from './forms/template/template.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { ObservableComponent } from './observable/observable.component';

const myRoute: Routes = [
    { path: '',  redirectTo: 'search-bus', pathMatch: 'full'},
    { path: 'login/:returnState', component: LoginComponent },
    { path: 'search-bus', component: SearchBusComponent},
    { path: 'bus-view', component: BusViewComponent, canActivate: [GaurdBusViewService]},
    { path: 'payment', component: PaymentComponent, canActivate: [GaurdBusViewService, GaurdrouterService]},
    { path: 'get', component: GetComponent},
    { path: 'post', component: PostComponent},
    { path: 'template', component: TemplateComponent},
    { path: 'reactive', component: ReactiveComponent},
    { path: 'observable', component: ObservableComponent}
];

export const appRoutes = myRoute;
