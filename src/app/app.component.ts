import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {consumer} from "./models/consumer.model";
import {totalAmount} from "./models/total-amount.model";
import {shipping} from "./models/shipping.model";
import {merchant} from "./models/merchant.model";
import {ScalapayService} from "./services/scalapay.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'frontend';
  errorMessage = [];
  dataModels = [new totalAmount(), new consumer(), new merchant(), new shipping()];

  constructor(private scalapayService: ScalapayService) {
  }

  ngOnInit(): void {
  }

  /**
   * Get the form data, send a POST request to create an order.
   * If succeeds, redirect to the new page, if fails, set the error message
   * @param form
   */
  public onSubmit(form: NgForm): void {
    this.scalapayService.createOrder(form.value).subscribe({
        next: res => {
          this.errorMessage = null;
          window.location.href = res.checkoutUrl;
        },
        error: (error: HttpErrorResponse) => {
          this.errorMessage = error.error.messages;
        }
      }
    );
  }
}
