import { Injectable } from '@nestjs/common';
import { encodingForModel } from 'js-tiktoken';
@Injectable()
export class AppService {
  encoder = encodingForModel('gpt-4-1106-preview');

  getTokenAmounts(string: string): number {
    return this.encoder.encode(string).length;
  }
}
