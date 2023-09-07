import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './patient/register/register.component';
import { ConsultationFormComponent } from './consultation/consultation-form.component';
import { DoctorComponent } from './doctor/doctor.component';
import { QuestionnaireComponent } from './patient/questionnaire/questionnaire.component';
import { PaymentComponent } from './patient/payment/payment.component';
import { LoginComponent } from './patient/login/login.component';
import { PrescriptionComponent } from './patient/prescription/prescription.component';
import { AccountComponent } from './patient/account/account.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  { path: 'patients/questionnaire/:id', component: QuestionnaireComponent },
  { path: 'patients/register', component: RegisterComponent },
  { path: 'patients/consultations', component: ConsultationFormComponent },
  { path: 'patients/appointement', component: DoctorComponent },
  { path: 'patients/payment', component: PaymentComponent },
  { path: 'patients/login', component: LoginComponent },
  { path: 'patients/documents', component: PrescriptionComponent },
  { path: 'patients/account', component: AccountComponent },
  { path: 'video/:link', component: VideoComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
