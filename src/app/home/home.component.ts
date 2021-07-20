import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular";
import { ActionItem, Page } from "tns-core-modules";
import { TestDialogComponent } from "./dialog/test-dialog.component";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(
        private page: Page,
        protected viewContainerRef: ViewContainerRef,
        protected modalService: ModalDialogService,
    ) {
    }

    ngOnInit(): void {
        this.addActionBarItem();
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

    addActionBarItem() {

        let newActionItem = new ActionItem();
        newActionItem.text = "Select Item";
        newActionItem.on("tap", (args) => {

            this.launchDialog();

            // setTimeout(() => {
            //     this.launchDialog();
            // }, 1000)

        })
        this.page.actionBar.actionItems.addItem(newActionItem);

    }
}
