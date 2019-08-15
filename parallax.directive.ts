import { Directive, OnInit, ElementRef, Input, Renderer2 } from '@angular/core';
declare const $: any;

@Directive({
    selector: '[appParallax]'
})


export class MyParallaxDirective implements OnInit {
    @Input() imgSrc: string;
    @Input() imgHeight: string;
    @Input() bgPosition: String = '50% 0';
    @Input() bgSize: String = 'cover';

    constructor(private renderer: Renderer2, private hostElement: ElementRef) {

    }

    ngOnInit() {
        this.innit();
    }

    innit() {
        const element = this.hostElement.nativeElement;
        this.renderer.setStyle(element, 'height', this.imgHeight);
        this.renderer.setStyle(element, 'background-image', 'url' + '(' + this.imgSrc + ')');
        this.renderer.setStyle(element, 'background-position', this.bgPosition);
        this.renderer.setStyle(element, 'background-repeat', 'no-repeat');
        this.renderer.setStyle(element, '-webkit-background-size', this.bgSize);
        this.renderer.setStyle(element, 'background-size', this.bgSize);
        this.renderer.setStyle(element, '-moz-transform', 'translate3d(0, 0, 0)');
        this.renderer.setStyle(element, '-webkit-transform', 'translate3d(0, 0, 0)');
        this.renderer.setStyle(element, 'transform', 'translate3d(0, 0, 0)');

        $(function () {
            const $el = $(element);
            $(window).on('scroll', function () {
                const scroll = $(document).scrollTop();
                $el.css({

                    'background-position': '50% ' + (-.4 * scroll) + 'px',

                });
            });
        });
    }
}
