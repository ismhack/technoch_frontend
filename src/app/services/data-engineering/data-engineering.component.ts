import { Component, inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-data-engineering',
  templateUrl: './data-engineering.component.html',
  styleUrls: ['./data-engineering.component.css']
})
export class DataEngineeringComponent implements OnInit {

  readonly dialogRef = inject(MatDialogRef<DataEngineeringComponent>);

  constructor() { }

  ngOnInit(): void {
  }

   onNoClick(): void {
    this.dialogRef.close();
  }

}
