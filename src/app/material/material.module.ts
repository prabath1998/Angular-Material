import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule
]

@NgModule({
  declarations: [],
  imports: [
    // CommonModule
    MaterialComponents
  ],
  exports:[MaterialComponents]
})
export class MaterialModule { }
