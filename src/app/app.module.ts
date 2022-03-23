import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ScanQrCodeButtonComponent} from './qr-code/scan-qr-code-button/scan-qr-code-button.component';
import {ZXingScannerModule} from "@zxing/ngx-scanner";

@NgModule({
  declarations: [
    AppComponent,
    ScanQrCodeButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ZXingScannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
