import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './patient/register/register.component';
import { ConsultationFormComponent } from './consultation/consultation-form.component';
import { DoctorComponent } from './doctor/doctor.component';
import { QuestionnaireComponent } from './patient/questionnaire/questionnaire.component';
import { PaymentComponent } from './patient/payment/payment.component';
import { LoginComponent } from './patient/login/login.component';
import { AccountComponent } from './patient/account/account.component';
import { VideoComponent } from './video/video.component';
import { AllPrescriptionsComponent } from './all-prescriptions/all-prescriptions.component';
import { PrescriptionComponent } from './patient/prescription/prescription.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { StarRatingComponent } from './star-rating/star-rating.component';

const routes: Routes = [
  { path: 'patients/questionnaire/:id', component: QuestionnaireComponent },
  { path: 'patients/register', component: RegisterComponent },
  { path: 'patients/consultations', component: ConsultationFormComponent },
  { path: 'patients/appointement', component: DoctorComponent },
  { path: 'patients/payment', component: PaymentComponent },
  { path: 'patients/login', component: LoginComponent },
  { path: 'patients/documents', component: AllPrescriptionsComponent },
  { path: 'patients/documents/:id', component: PrescriptionComponent },
  { path: 'patients/doctor/:id', component: DoctorProfileComponent },
  { path: 'patients/account', component: AccountComponent },
  { path: 'video/:link', component: VideoComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
