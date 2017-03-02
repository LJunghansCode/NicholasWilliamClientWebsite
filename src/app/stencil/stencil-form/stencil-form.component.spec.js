"use strict";
/* tslint:disable:no-unused-variable */
const testing_1 = require('@angular/core/testing');
const stencil_form_component_1 = require('./stencil-form.component');
describe('StencilFormComponent', () => {
    let component;
    let fixture;
    beforeEach(testing_1.async(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [stencil_form_component_1.StencilFormComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(stencil_form_component_1.StencilFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
