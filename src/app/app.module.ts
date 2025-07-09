import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FoundItemsComponent } from './found-items/found-items.component';
import { LostItemsComponent } from './lost-items/lost-items.component';
import { LayoutComponent } from './layout/layout.component';
import { RegistrationComponent } from './registration/registration.component';
import { InterfaceComponent } from './interface/interface.component';

const routes: Routes = [
  { path: '', component: InterfaceComponent }, // ✅ Landing page
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [
      { path: 'found', component: FoundItemsComponent },
      { path: 'lost', component: LostItemsComponent }
    ]
  },
  { path: '**', redirectTo: '' } // ✅ fallback to landing page
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    FoundItemsComponent,
    LostItemsComponent,
    LayoutComponent,
    RegistrationComponent,
    InterfaceComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes) // ✅ Add this to enable routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
