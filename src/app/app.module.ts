import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ConsultationFormComponent } from './consultation/consultation-form.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { RouterOutlet } from "@angular/router";
import { RegisterComponent } from './patient/register/register.component';
import { QuestionnaireComponent } from './patient/questionnaire/questionnaire.component';
import { LoginComponent } from './patient/login/login.component';
import { DiscussionComponent } from './patient/discussion/discussion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaymentComponent } from './patient/payment/payment.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PrescriptionComponent } from './patient/prescription/prescription.component';
import { AccountComponent } from './patient/account/account.component';
import { VideoComponent } from './video/video.component';
import { QRCodeModule } from 'angularx-qrcode';
import { AllPrescriptionsComponent } from './all-prescriptions/all-prescriptions.component';
import { RelativeTimePipe } from './relative-time-pipe/relative-time-pipe.component';
import { CountdownPipe } from './countdown/countdown.pipe';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
    declarations: [
        AppComponent,
        DoctorComponent,
        ConsultationFormComponent,
        PatientComponent,
        RegisterComponent,
        QuestionnaireComponent,
        DiscussionComponent,
        LoginComponent,
        DashboardComponent,
        NavbarComponent,
        FooterComponent,
        PaymentComponent,
        SidebarComponent,
        PrescriptionComponent,
        AccountComponent,
        VideoComponent,
        AllPrescriptionsComponent,
        RelativeTimePipe,
        CountdownPipe,
        DoctorProfileComponent,
        StarRatingComponent
        
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        RouterOutlet,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        QRCodeModule,
        NgbModule,
        
    ]
})
export class AppModule { }
