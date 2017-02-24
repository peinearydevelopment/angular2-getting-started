import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';

import { JQUERY_TOKEN } from './jQuery.service';

@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
    private el: HTMLElement;
    @Input('modal-trigger') modalId: string;

    constructor(el: ElementRef, @Inject(JQUERY_TOKEN) private $: any) {
        this.el = el.nativeElement;
    }

    ngOnInit() {
        this.el.addEventListener('click', e => this.$(`#${this.modalId}`).modal({}));
    }
}