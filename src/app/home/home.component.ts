import { Component, ViewContainerRef } from "@angular/core";
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular";
import { Page } from "tns-core-modules";
import { TestDialogComponent } from "./dialog/test-dialog.component";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent {

    constructor(
        private page: Page,
        protected viewContainerRef: ViewContainerRef,
        protected modalService: ModalDialogService,
    ) {
    }

    launchDialog() {
        let selections: string[] = ["car", "airplane", "boat"];
        const options: ModalDialogOptions = {
            viewContainerRef: this.viewContainerRef,
            context: selections
        };
        this.modalService.showModal(TestDialogComponent, options)
            .then((args) => {
                alert(`Item selected = [${args}]`);
            });
    }
}
