import { Component, AfterContentInit, Input, ViewChild, ElementRef, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterContentInit {

  @Input() pinned: any[] = []; // TODO: replace 'any' with 'IMovie[] | ISeries[]'
  @ViewChild('carousel') carouselRef: ElementRef<HTMLDivElement> = {} as ElementRef<HTMLDivElement>;
  private selected: number = 0;

  constructor(
    private readonly renderer: Renderer2,
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  ngAfterContentInit(): void {}

  onPrevious(): void {
    this.selected = this.wrapAround(this.selected - 1);
    this.updateTransition();
  }

  onNext(): void {
    this.selected = this.wrapAround(this.selected + 1);
    this.updateTransition();
  }

  private updateTransition(): void {
    this.renderer.setStyle(
      this.carouselRef.nativeElement,
      'transition',
      `transform .2s`
    );
    this.renderer.setStyle(
      this.carouselRef.nativeElement,
      'transform',
      `translateX(${-this.getMiniDetailWidth() * this.selected}px)`
    );
  }

  private wrapAround(index: number): number {
    return index - Math.floor(index / this.pinned.length) * this.pinned.length;
  }

  private getMiniDetailWidth(): number {
    return Math.trunc(this.document.documentElement.clientWidth);
  }

  haveMultiplePins(): boolean {
    return this.pinned.length > 1;
  }

}
