import { Component, VERSION, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder, FormArray } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  fg: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.fg = this.formBuilder.group({
      name: [null, Validators.required],
      subForm: this.formBuilder.array([])
    });

    const control = this.fg.controls["subForm"] as FormArray;

    control.push(
      this.formBuilder.group({
        subControl: ["", Validators.required]
      })
    );
  }
}
