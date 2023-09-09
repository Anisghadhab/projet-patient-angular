import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConsultationService } from './consultation.service';
import { Consultation } from './consultation';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription, timer } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-consultation-form',
  templateUrl: './consultation-form.component.html',
  styleUrls: ['./consultation-form.component.css'],
})
export class ConsultationFormComponent implements OnInit, OnDestroy {
  consultationForm: FormGroup;
  consultations: Consultation[] = [];
  countdownTimers: { [key: string]: Observable<number> } = {};
  private subscriptions: Subscription[] = [];
  remainingTimes: { [key: string]: string } = {};


  constructor(
    private fb: FormBuilder,
    private consultationService: ConsultationService,
    private http: HttpClient
  ) {
    this.consultationForm = this.fb.group({
      status: ['pending', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      concerns: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      diseases: ['', [Validators.minLength(3), Validators.maxLength(30)]],
      previous: [false],
    });
  }

  ngOnInit(): void {
    this.consultationService.getConsultations().subscribe(
      (response: Consultation[]) => {
        this.consultations = response;
        this.initCountdownTimers();
        // this.updateCountdownTimers(); // Update timers when consultations change

      },
      (error) => {
        console.error('Failed to fetch consultations', error);
      }
    );
  }

  ngOnDestroy(): void {
    // Unsubscribe from timers to avoid memory leaks
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  // private updateCountdownTimers(): void {
  //   this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  //   this.initCountdownTimers();
  // }


private initCountdownTimers(): void {
  // Initialize countdown timers for each consultation
  this.consultations.forEach((consultation) => {
    const timerObservable = timer(0, 1000); // Update every 1 second

    const subscription = timerObservable.subscribe(() => {
      const startTimeMillis = new Date(consultation.startTime).getTime();
      const remainingSeconds = Math.max(0, Math.floor((startTimeMillis - Date.now()) / 1000));

      if (remainingSeconds <= 0) {
        this.remainingTimes[consultation.id] = 'Consultation started';
        subscription.unsubscribe(); // Stop the timer when the consultation starts
      } else {
        const hours = Math.floor(remainingSeconds / 3600);
        const minutes = Math.floor((remainingSeconds % 3600) / 60);
        const seconds = remainingSeconds % 60;
        this.remainingTimes[consultation.id] = `${hours}h ${minutes}m ${seconds}s`;
      }
    });

    this.subscriptions.push(subscription); // Add the subscription to the list
  });
}

}
