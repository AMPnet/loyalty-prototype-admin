import {Component} from '@angular/core';

@Component({
  selector: 'app-scan-qr-code-button',
  templateUrl: './scan-qr-code-button.component.html',
  styleUrls: ['./scan-qr-code-button.component.css']
})
export class ScanQrCodeButtonComponent {

  state: ScanningState = "WAITING"
  content?: string

  scanQrCode() {
    this.state = "SCANNING"
  }

  handleScannedCode(text: string) {
    this.state = "CODE_SCANNED"
    this.content = text
  }
}

export type ScanningState = "WAITING" | "SCANNING" | "CODE_SCANNED"
