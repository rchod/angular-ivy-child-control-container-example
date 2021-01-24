import { Component, OnInit } from "@angular/core";
import { CONTROL_CONTAINER } from "../control-container";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
  viewProviders: [CONTROL_CONTAINER]
})
export class ChildComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
