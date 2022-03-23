import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-scan-qr-code-button',
  templateUrl: './scan-qr-code-button.component.html',
  styleUrls: ['./scan-qr-code-button.component.css']
})
export class ScanQrCodeButtonComponent {

  state: ScanningState = "WAITING"
  content?: VerifySignedMessageResponse
  tokenBalanceResponse?: FetchErc20TokenBalanceResponse

  constructor(private httpClient: HttpClient) {
  }

  scanQrCode() {
    this.state = "SCANNING"
  }

  handleScannedCode(text: string) {
    this.state = "CODE_SCANNED"
    this.content = JSON.parse(JSON.parse(text)) as VerifySignedMessageResponse

    const chainId = 80001
    const messageId = this.content.id
    const contractAddress = "0xe6b8a5cf854791412c1f6efc7caf629f5df1c747"

    this.httpClient.get<FetchErc20TokenBalanceResponse>(
      `http://localhost:8080/info/${chainId}/${messageId}/erc20-balance/${contractAddress}`,
      {responseType: 'json'}
    ).subscribe((value) => {
      this.tokenBalanceResponse = value
    })
  }
}

export type ScanningState = "WAITING" | "SCANNING" | "CODE_SCANNED"

interface VerifySignedMessageResponse {
  id: string
  signature: string
  valid_until: string
}

interface FetchErc20TokenBalanceResponse {
  wallet_address: string
  token_balance: string
  token_address: string
}
