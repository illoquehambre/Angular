import { Component,Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Species, SpeciesResponse } from 'src/app/interfaces/species.interface';
import { SpeciesService } from 'src/app/services/species.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/interfaces/species.interface';

@Component({
  selector: 'app-species-information',
  templateUrl: './species-information.component.html',
  styleUrls: ['./species-information.component.css']
})
export class SpeciesInformationComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void { 

  }


}
