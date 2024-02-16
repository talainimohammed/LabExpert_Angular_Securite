import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NormesComponent } from './components/normes/normes.component';
import { NormeDetailsComponent } from './components/normes/norme-details/norme-details.component';
import { AddNormeComponent } from './components/normes/add-norme/add-norme.component';
import { PatientDetailsComponent } from './components/patients/patient-details/patient-details.component';
import { AddPatientComponent } from './components/patients/add-patient/add-patient.component';
import { PatientsComponent } from './components/patients/patients.component';
import {FournisseurComponent} from "./components/fournisseur/fournisseur.component";
import {AjoutFournisseurComponent} from "./components/fournisseur/ajout-fournisseur/ajout-fournisseur.component";
import {UpdateFournisseurComponent} from "./components/fournisseur/update-fournisseur/update-fournisseur.component";
import {EchantillonComponent} from "./components/echantillon/echantillon.component";
import {AjoutEchantillonComponent} from "./components/echantillon/ajout-echantillon/ajout-echantillon.component";
import {EchantillonDetailsComponent} from "./components/echantillon/echantillon-details/echantillon-details.component";
import {PlanificationComponent} from "./components/planification/planification.component";
import {ReactifsComponent} from "./components/reactifs/reactifs.component";
import {AddReactifComponent} from "./components/reactifs/add-reactif/add-reactif.component";
import {OutilsComponent} from "./components/outils/outils.component";
import {AddOutilComponent} from "./components/outils/add-outil/add-outil.component";
import {UtilisateursComponent} from "./components/utilisateurs/utilisateurs.component";
import {AddUtilisateurComponent} from "./components/utilisateurs/add-utilisateur/add-utilisateur.component";
import {UpdateUtilisateurComponent} from "./components/utilisateurs/update-utilisateur/update-utilisateur.component";
import {AuthenticationComponent} from "./components/authentication/authentication.component";
import {AppComponent} from "./app.component";
import {AuthGuardService} from "./services/auth.guard.service";

const routes: Routes = [
  {path: " ", component: AuthenticationComponent,canActivate:[AuthGuardService],data:{role:'Responsable'}},
  {path: "patients", component: PatientsComponent,canActivate:[AuthGuardService],data:{role:'Preleveur'}},
  {path: "patient-details/:id", component: PatientDetailsComponent,canActivate:[AuthGuardService],data:{role:'Preleveur'}},
  {path: "add-patient", component: AddPatientComponent,canActivate:[AuthGuardService],data:{role:'Preleveur'}},
  {path: "normes", component: NormesComponent,canActivate:[AuthGuardService],data:{role:'Responsable'}},
  {path: "norme-details/:id", component: NormeDetailsComponent,canActivate:[AuthGuardService],data:{role:'Responsable'}},
  {path: "add-norme", component: AddNormeComponent,canActivate:[AuthGuardService],data:{role:'Responsable'}},
  {path: "fournisseurs", component: FournisseurComponent,canActivate:[AuthGuardService],data:{role:'Responsable'}},
  {path: "addfournisseur", component: AjoutFournisseurComponent,canActivate:[AuthGuardService],data:{role:'Responsable'}},
  {path: "updatefournisseur/:id", component: UpdateFournisseurComponent,canActivate:[AuthGuardService],data:{role:'Responsable'}},
  {path: "echantillons", component: EchantillonComponent,canActivate:[AuthGuardService],data:{role:'Preleveur'}},
  {path: "addechantillon", component: AjoutEchantillonComponent,canActivate:[AuthGuardService],data:{role:'Preleveur'}},
  {path: "echantillon-details/:id", component: EchantillonDetailsComponent,canActivate:[AuthGuardService],data:{role:'Preleveur'}},
  {path: "Reactif",component: ReactifsComponent,canActivate:[AuthGuardService],data:{role:'Responsable'}},
  {
    path: "AddReactif",
    component: AddReactifComponent
  },
  {
    path: "Outil",
    component: OutilsComponent
  },
  {
    path: "AddOutil",
    component: AddOutilComponent
  },
  {
    path: "Utilisateur",
    component: UtilisateursComponent
  },
  {
    path: "AddUtilisateur",
    component: AddUtilisateurComponent
  },
  {
    path: "updateUtilisateur/:id",
    component: UpdateUtilisateurComponent
  },
  {path: "echantillon-details/:id", component: EchantillonDetailsComponent},
  {path: "planification", component: PlanificationComponent},
  {path: "auth", component:AuthenticationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
