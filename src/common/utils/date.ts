// import { Injectable } from '@nestjs/common';
// import { DateTime } from 'luxon';

// @Injectable()
// export class DateService {
//   formatFromISO(date: string): string {
//     return DateTime.fromISO(date)
//       .setZone('America/Sao_Paulo')
//       .setLocale('pt-BR')
//       .toFormat('dd/MM/yyyy HH:mm:ss');
//   }

//   dateFromFormat(
//     date: string,
//     format: string,
//     output = 'dd/MM/yyyy HH:mm:ss',
//   ): string {
//     return DateTime.fromFormat(date, format)
//       .setZone('America/Sao_Paulo')
//       .setLocale('pt-BR')
//       .toFormat(output);
//   }

//   dateFromJSFormat(date: Date, output = 'dd/MM/yyyy HH:mm:ss'): string {
//     return DateTime.fromJSDate(date)
//       .setZone('America/Sao_Paulo')
//       .setLocale('pt-BR')
//       .toFormat(output);
//   }

//   currentDate(format = 'dd/MM/yyyy'): string {
//     return DateTime.local().setZone('America/Sao_Paulo').toFormat(format);
//   }

//   currentDateTime(): DateTime {
//     return DateTime.local().setZone('America/Sao_Paulo').setLocale('pt-BR');
//   }

//   formatToDateTime(date: string, format: string): DateTime {
//     return DateTime.fromFormat(date, format)
//       .setZone('America/Sao_Paulo')
//       .setLocale('pt-BR');
//   }

//   formatJSToDateTime(date: Date): DateTime {
//     return DateTime.fromJSDate(date)
//       .setZone('America/Sao_Paulo')
//       .setLocale('pt-BR');
//   }

//   isDateBigger(start: string, end: string): boolean {
//     return (
//       this.formatToDateTime(start, 'yyyy-MM-dd').toMillis() >
//       this.formatToDateTime(end, 'yyyy-MM-dd').toMillis()
//     );
//   }

//   isExpiredSchedule(date: string): boolean {
//     return (
//       this.currentDateTime().toMillis() >
//       this.formatToDateTime(date, 'yyyy-MM-dd').toMillis()
//     );
//   }

//   isExpired(date: Date): boolean {
//     return (
//       this.currentDateTime().toMillis() >
//       this.formatJSToDateTime(date).toMillis()
//     );
//   }

//   getDateRange(end: string, weekDays: number[]): DateTime[] {
//     let dates: DateTime[] = [];
//     const endDate = this.formatToDateTime(end, 'yyyy-MM-dd');
//     let currDate = this.currentDateTime();

//     while (currDate.toMillis() < endDate.toMillis()) {
//       if (weekDays.includes(currDate.weekday)) {
//         dates = [...dates, currDate];
//       }
//       currDate = currDate.plus({ day: 1 });
//     }

//     if (
//       endDate.toMillis() > this.currentDateTime().toMillis() &&
//       weekDays.includes(endDate.weekday)
//     ) {
//       dates.push(endDate);
//     }

//     return dates;
//   }

//   getTimeInterval(
//     duration: number,
//     start: DateTime,
//     end: DateTime,
//   ): DateTime[] {
//     let times: DateTime[] = [];
//     let startTime = start;

//     while (startTime.plus({ minutes: duration }).toMillis() < end.toMillis()) {
//       times = [...times, startTime];
//       startTime = startTime.plus({ minutes: duration });
//     }

//     return times;
//   }

//   formatArrDatesToDateTime(
//     arr: any[],
//     key: string,
//     format: string,
//     fromIso = false,
//   ): any[] {
//     return arr.map((item) => ({
//       ...item,
//       [key]: fromIso
//         ? this.formatJSToDateTime(item[key])
//         : this.formatToDateTime(item[key], format),
//     }));
//   }

//   getSchedule(
//     dates: DateTime[],
//     schedules: any[],
//     duration: number,
//     startTime: string,
//     endTime: string,
//     horariosFolga: any[],
//   ): any[] {
//     const appointments = this.formatArrDatesToDateTime(
//       schedules,
//       'data_hora',
//       '',
//       true,
//     );
//     const freeTime = this.formatArrDatesToDateTime(
//       horariosFolga,
//       'data_hora',
//       '',
//       true,
//     );

//     return dates.map((date) => {
//       const start = this.formatToDateTime(
//         `${date.toFormat('yyyy-MM-dd')} ${startTime}`,
//         'yyyy-MM-dd HH:mm',
//       );
//       const dateFormat = date.toFormat('yyyy-MM-dd');
//       const end = this.formatToDateTime(
//         `${date.toFormat('yyyy-MM-dd')} ${endTime}`,
//         'yyyy-MM-dd HH:mm',
//       );
//       let interval = this.getTimeInterval(duration, start, end);

//       const appointment = appointments.filter(
//         (item) =>
//           item.data_hora.toFormat('yyyy-MM-dd') === date.toFormat('yyyy-MM-dd'),
//       );

//       if (appointment.length) {
//         appointment.forEach((item) => {
//           const initialTime = item.data_hora.toMillis();
//           const finalTime = item.data_hora
//             .plus({ minutes: item.duracao })
//             .toMillis();
//           let blockedTimes = interval.filter(
//             (time) =>
//               time.toMillis() >= initialTime && time.toMillis() < finalTime,
//           );
//           blockedTimes = blockedTimes.map((time) => time.toMillis());
//           interval = [
//             ...interval.filter(
//               (time) => !blockedTimes.includes(time.toMillis()),
//             ),
//           ];
//         });
//       }

//       if (freeTime.length) {
//         freeTime.forEach((item) => {
//           const freeTimesRemove = interval.filter(
//             (time) => time.toMillis() === item.data_hora.toMillis(),
//           );
//           interval = [
//             ...interval.filter((time) => !freeTimesRemove.includes(time)),
//           ];
//         });
//       }

//       return {
//         date: date.toFormat('yyyy-MM-dd'),
//         schedule: interval.map((time) => time.toFormat('yyyy-MM-dd HH:mm')),
//       };
//     });
//   }

//   formatToGoogle(date: string): string {
//     return DateTime.fromISO(date)
//       .setZone('America/Sao_Paulo')
//       .setLocale('pt-BR')
//       .toFormat('yyyyMMdd HHmmss');
//   }

//   addDateTime(date: Date, day: number): DateTime {
//     return DateTime.fromJSDate(date)
//       .setZone('America/Sao_Paulo')
//       .setLocale('pt-BR')
//       .plus({ day })
//       .toUTC();
//   }
// }
