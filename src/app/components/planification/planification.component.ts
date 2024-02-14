import { Component, OnInit } from '@angular/core';
import {EchantillonService} from "../../services/echantillon.service";
import {AnalyseService} from "../../services/analyse.service";
import {Analyse} from "../../models/analyse.model";

@Component({
  selector: 'app-planification',
  templateUrl: './planification.component.html',
  styleUrls: ['./planification.component.css']
})
export class PlanificationComponent implements OnInit {
  show:boolean=true;
  analyses?:Analyse[];
  analyseslist?:Analyse[];
  affectanalayse:Analyse;
  searchech: '';
  constructor(private echantillonService:EchantillonService,private analyseservice:AnalyseService) { }

  ngOnInit(): void {
    this.retrieveAllanalyses();
  }
retrieveAllanalyses(){
  this.analyseservice.getanalyses().subscribe(
    data=>{
      this.analyses=data;
      },
    error => {
      console.log(error);}
  );
  this.analyseslist=this.analyses.filter(a=>a.dateDebut===null);
  return this.analyses;
}

affectation(analyse:Analyse){
    this.show=false;
    this.affectanalayse=analyse;
}

}
