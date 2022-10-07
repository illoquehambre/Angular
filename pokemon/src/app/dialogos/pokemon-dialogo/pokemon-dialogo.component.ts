import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/interfaces/pokemon-dialog.interface';

@Component({
  selector: 'app-pokemon-dialogo',
  templateUrl: './pokemon-dialogo.component.html',
  styleUrls: ['./pokemon-dialogo.component.css']
})
export class PokemonDialogoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

}
