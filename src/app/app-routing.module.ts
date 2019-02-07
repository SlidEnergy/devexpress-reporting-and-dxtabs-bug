import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    {
        path: "",
        redirectTo: "report",
        pathMatch: "full"
    },
    {
        path: "report",
        loadChildren: 'src/app/report/report.module#ReportModule'
    },
    {
        path: "feature",
        loadChildren: 'src/app/feature/feature.module#FeatureModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }