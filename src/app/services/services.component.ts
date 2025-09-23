import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { CloudComputingComponent } from './cloud-computing/cloud-computing.component';
import { OracleBillingComponent } from './oracle-billing/oracle-billing.component';
import { DataEngineeringComponent } from './data-engineering/data-engineering.component';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  constructor() { }

  ngOnInit(): void {
  }

  openDialog(component:string) {
    var dialogRef;
    if(component === 'cloud'){
      dialogRef = this.dialog.open(CloudComputingComponent);
    }

   if(component === 'oracle'){
      dialogRef = this.dialog.open(OracleBillingComponent);
    }

   if(component === 'data'){
      dialogRef = this.dialog.open(DataEngineeringComponent);
    }

  }

  

}
