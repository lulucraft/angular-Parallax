/**
 * 
 * Code from https://github.com/JubinSaniei/angular-Parallax developed by JubinSaniei
 * 
 */

import { Directive, OnInit, ElementRef, Input, Renderer2, HostListener, } from '@angular/core';
import * as $ from 'jquery';

@Directive({
  selector: '[appParallax]'
})

export class ParalaxDirective implements OnInit {

  @Input() imgSrc: string = '';
  @Input() imgHeight: String = '70vh';
  @Input() bgPosition: String = '50% 0';
  @Input() bgSize: String = 'cover';

  constructor(private renderer: Renderer2, private hostElement: ElementRef) { }

  @HostListener('window:resize', ['$event'])

  ngOnInit() {
    this.init();
  }

  init() {
    const elem = this.hostElement.nativeElement;
    this.renderer.setStyle(elem, 'height', this.imgHeight);
    if (this.imgSrc) {//added
      this.renderer.setStyle(elem, 'background-image', 'url' + '(' + this.imgSrc + ')');
      this.renderer.setStyle(elem, 'background-position', this.bgPosition);
      this.renderer.setStyle(elem, 'background-repeat', 'no-repeat');
      this.renderer.setStyle(elem, '-webkit-background-size', this.bgSize);
      this.renderer.setStyle(elem, 'background-size', this.bgSize);
    }
    this.renderer.setStyle(elem, '-webkit-transform', 'translate3d(0, 0, 0)');
    this.renderer.setStyle(elem, 'transform', 'translate3d(0, 0, 0)');
    this.renderer.setStyle(elem, '-moz-transform', 'translate3d(0, 0, 0)');

    $(function () {
      const $el = $(elem);
      $(window).on('scroll', function () {
        const scroll = $(document).scrollTop();
        if (!scroll) return;//added
        $el.css({
          'background-position': '50% ' + (-.4 * scroll + 2) + 'px',
        });
      });
    });
  }

}
