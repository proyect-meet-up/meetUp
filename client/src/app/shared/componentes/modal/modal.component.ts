import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<any> ) {}

  ngOnInit(): void {
    this.dialogRef.addPanelClass('o-modal')

  }

}

