import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ChildComponent } from "./child/child.component";

import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  declarations: [AppComponent, HelloComponent, ChildComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
