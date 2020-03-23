import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LinkModule } from "../link/link.module";
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, LinkModule],
  exports: [NavbarComponent]
})
export class CoreModule {}
