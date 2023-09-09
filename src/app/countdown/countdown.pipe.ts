import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countdown',
})
export class CountdownPipe implements PipeTransform {
  transform(startTime: Date | string, format: string = 'yyyy-MM-ddTHH:mm:ss'): string {
    const startTimeMillis = typeof startTime === 'string' ? new Date(startTime).getTime() : startTime.getTime();
    const now = new Date().getTime();
    const timeDifference = startTimeMillis - now;

    if (timeDifference <= 0) {
      return 'Consultation started';
    }

    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return `${hours}h ${minutes}m ${seconds}s`;
  }
}
