import { Component, Input } from "@angular/core";

@Component({
    moduleId : module.id,
    templateUrl : "./foto.component.html",
    selector : "foto"
})
export class FotoComponent {

    @Input() titulo

    @Input() url

}