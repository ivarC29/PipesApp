import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: Color): SafeHtml {
    let colorHex = '';
    switch (value) {
      case Color.red:
        colorHex = 'rgb(255, 99, 132)';
        break;
      case Color.blue:
        colorHex = 'rgb(54, 162, 235)';
        break;
      case Color.green:
        colorHex = 'rgb(75, 192, 192)';
        break;
      case Color.black:
        colorHex = 'black';
        break;
      default:
        break;
    }
    const html = `<div style="width: 20px; height: 20px; border-radius: 50%; background-color: ${colorHex};"></div>`;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
