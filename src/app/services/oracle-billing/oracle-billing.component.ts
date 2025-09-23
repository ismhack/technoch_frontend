import { Component, inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-oracle-billing',
  templateUrl: './oracle-billing.component.html',
  styleUrls: ['./oracle-billing.component.css']
})
export class OracleBillingComponent implements OnInit {

    readonly dialogRef = inject(MatDialogRef<OracleBillingComponent>);

  constructor() { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
