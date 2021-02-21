import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from '../services/menu.service';
import { EffectsModule } from '@ngrx/effects';
import { MenuEffects } from '../store/effects/menu.effect';
import { RouterModule } from '@angular/router';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';



@NgModule({
  declarations: [HeaderComponent, TopBarComponent, MenuComponent, MenuMobileComponent],
  imports: [CommonModule, RouterModule, EffectsModule.forFeature([MenuEffects])],
  exports:[HeaderComponent],
  providers:[MenuService]
})
export class HeaderModule { }
