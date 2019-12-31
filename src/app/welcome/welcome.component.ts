import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-welcome",

  styleUrls: ["./welcome.component.scss"],
  template: `
    <div>
      <app-intro></app-intro>

      <!-- For the blue-purple background -->
      <div class="bg-blue-purple">
        <about-diversify-compsci></about-diversify-compsci>
        <team-bios></team-bios>
      </div>

      <!-- For the yellow-red background -->
      <div class="bg-yellow-red">
        <disclaimer></disclaimer>
        <questions></questions>
      </div>

      <!-- Don't need thing, can change it up a lot -->
      <app-footer></app-footer>
    </div>
  `
})
export class WelcomeComponent implements OnInit {
  breakpoint: number;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 400 ? 1 : 2;

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required]
    });
  }

  onResize(event) {
    this.breakpoint = event.target.innerWidth <= 400 ? 1 : 2;
  }
}
