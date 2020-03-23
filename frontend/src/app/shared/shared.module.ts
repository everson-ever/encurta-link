import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TableLinksComponent } from "./components/table-links/table-links.component";

@NgModule({
  declarations: [TableLinksComponent],
  imports: [CommonModule],
  exports: [TableLinksComponent]
})
export class SharedModule {}
