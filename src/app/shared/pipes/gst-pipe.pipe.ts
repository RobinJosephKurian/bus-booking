import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gstPipe'
})
export class GstPipePipe implements PipeTransform {

  transform(value: any, gst: number): any {
    return (gst / 100) * value;
  }

}
