import { Component, inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cloud-computing',
  templateUrl: './cloud-computing.component.html',
  styleUrls: ['./cloud-computing.component.css']
})
export class CloudComputingComponent implements OnInit {

  readonly dialogRef = inject(MatDialogRef<CloudComputingComponent>);

  constructor() { }

  ngOnInit(): void {
  }

   onNoClick(): void {
    this.dialogRef.close();
  }

}
