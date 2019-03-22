import { Directive,ElementRef, HostListener,Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Directive({
  selector: '[appTranslate]'
})

export class TranslateDirective {

  constructor(@Inject('Window') window:Window,private http: HttpClient,private el: ElementRef) { }

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('yellow');
  // }
   
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  @HostListener('click',['$event']) onSelect(e) {
    console.log(window.getSelection().toString());
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}

