import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRemoveHero]'
})
export class RemoveHeroDirective {
  prevValue: string = '';
  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) { }

  @HostListener('mouseover')
  onMouseOver() {
    this.prevValue = this.elementRef.nativeElement.innerHTML;
    this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', 'Delete element');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', this.prevValue);
  }
}
