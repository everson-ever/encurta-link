import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-table-links",
  templateUrl: "./table-links.component.html",
  styleUrls: ["./table-links.component.css"]
})
export class TableLinksComponent implements OnInit {
  public timer: number = 180;

  constructor() {}

  ngOnInit(): void {
    this.timeUpdate();
  }

  public timeUpdate() {
    setInterval(() => {
      this.timer--;
      if (this.timer === 0) {
        this.timer = 180;
      }
    }, 1000);
  }
}
