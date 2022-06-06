import { DOCUMENT } from '@angular/common';
import {
  Component,
  HostBinding,
  Inject,
  OnInit,
  Renderer2,
} from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private _iconLight = 'light_mode';
  private _iconDark = 'nightlight_round';
  private _themeLightClass = 'theme-light';
  private _themeDarkClass = 'theme-dark';
  private _hostThemeClass = '';
  isChecked: boolean = false;
  iconThemeMode: string = '';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.iconThemeMode = this.isChecked ? this._iconDark : this._iconLight;
    this._hostThemeClass = this.isChecked
      ? this._themeDarkClass
      : this._themeLightClass;
    this.renderer.addClass(this.document.body, this._hostThemeClass);
  }

  mudarThema(event: MatSlideToggleChange): void {
    this.renderer.removeClass(this.document.body, this._hostThemeClass);
    this.iconThemeMode = event.checked ? this._iconDark : this._iconLight;
    this._hostThemeClass = this.isChecked
      ? this._themeDarkClass
      : this._themeLightClass;
    this.renderer.addClass(this.document.body, this._hostThemeClass);
  }
}
