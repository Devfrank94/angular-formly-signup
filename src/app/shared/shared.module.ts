import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormSignupComponent } from './components/form-signup/form-signup.component';



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
    CommonModule
  ],
})
export class SharedModule { }
