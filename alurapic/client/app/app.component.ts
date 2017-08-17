//import {Component, Inject} from "@angular/core"
import { Component } from "@angular/core"
import { Http } from "@angular/http";

@Component({
    moduleId : module.id,
    templateUrl : "./app.component.html",
    selector : "app"
})
export class AppComponent {

    fotos : Object[] = []

    //constructor(@Inject(Http) http) {
    constructor(http : Http) {

        /* let stream = http.get('v1/fotos')
        
        stream.subscribe(res => {
            this.fotos = res.json()
            console.log(this.fotos) 
        }) */

        http
            .get('v1/fotos')
            .map(res => res.json())
            .subscribe(
                fotos => this.fotos = fotos,
                erro => console.log(erro))
        
        

    }

}