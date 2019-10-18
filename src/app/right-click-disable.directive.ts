import { Directive, HostListener } from '@angular/core';
import { ParsedEventType } from '@angular/compiler';

@Directive({
  selector: '[appRightClickDisable]'
})
export class RightClickDisableDirective {


  @HostListener('contextmenu', ['$event'])
  onRightClick(event) {
    console.log(event);
    event.preventDefault();
  }
  @HostListener('document:keydown', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    console.log(event);
    if (event.keyCode == 44 || event.keyCode == 123) {
      event.preventDefault();
    }
  }
}
