import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'delete-confirm-dialog',
  templateUrl: 'delete-confirm-dialog.html',
})
export class DeleteConfirmDialog {
  emphasize:boolean = false;
  fileName:string;
  userInput?:string;
  constructor(@Inject(MAT_DIALOG_DATA) data: {name:string,emphasize:boolean}){
    this.emphasize = data.emphasize;
    this.fileName = data.name;
  }

}
