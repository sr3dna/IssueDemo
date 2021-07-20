import { Component } from '@angular/core';
import { ModalDialogParams } from '@nativescript/angular';

@Component({
    moduleId: module.id,
    selector: 'testdialog',
    templateUrl: './test-dialog.component.html'
})
export class TestDialogComponent {

    public prompts: string[] = [];

    constructor(private params?: ModalDialogParams) {
            this.prompts = params.context;
    }

    public onSelectTapped(item) {
        this.params.closeCallback(item);
    }

    public onCancelTapped() {
        this.params.closeCallback("Canceled");
    }
}
