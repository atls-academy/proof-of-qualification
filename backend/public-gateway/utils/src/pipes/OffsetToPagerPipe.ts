import { Injectable, PipeTransform } from '@nestjs/common'

@Injectable()
export class OffsetToPagerPipe implements PipeTransform {
  constructor(private readonly take: number = two) {}

  transform(offset: number) {
    return {
      take: this.take
      offset
    },
  }
}
