// import {
//   PipeTransform,
//   Injectable,
//   ArgumentMetadata,
//   BadRequestException,
// } from '@nestjs/common';
// import { plainToClass } from 'class-transformer';
// import { validate } from 'class-validator';

// @Injectable()
// export class ValidationPipe implements PipeTransform<any> {
//   async transform(value: any, metadata: ArgumentMetadata) {
//     const object = plainToClass(LoginDto, value);
//     const errors = await validate(object);

//     if (errors.length > 0) {
//       throw new BadRequestException('Validation failed');
//     }

//     return value;
//   }
// }
