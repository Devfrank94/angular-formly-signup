import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { CardComponent } from './components/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormSignupComponent } from './components/form-signup/form-signup.component';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';



@NgModule({
  declarations: [
    CardComponent,
    NavbarComponent,
    FooterComponent,
    FormSignupComponent
  ],
  exports: [
    NavbarComponent,
    CardComponent,
    FooterComponent,
    FormSignupComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    NgOptimizedImage,
    RouterLinkActive,
    ReactiveFormsModule,
    FormlyModule
  ],
})
export class SharedModule { }
