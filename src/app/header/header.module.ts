import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from '../Services/menu.service';
import { EffectsModule } from '@ngrx/effects';
import { MenuEffects } from '../effects/menu.effect';



@NgModule({
  declarations: [HeaderComponent, TopBarComponent, MenuComponent],
  imports: [CommonModule,EffectsModule.forFeature([MenuEffects])],
  exports:[HeaderComponent],
  providers:[MenuService]
})
export class HeaderModule { }
