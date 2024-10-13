import { Component } from '@angular/core';
import{AgGridModule} from 'ag-grid-angular';
import{ColDef, GridApi} from "ag-grid-community";

@Component({
  selector: 'students-details-student-records',
  templateUrl: './student-records.component.html',
  styleUrl: './student-records.component.scss'
})
export class StudentRecordsComponent {
  gridApi: any;
  apiResponse: any = [{
        "name": "Marcus Meepers",
        "studentImage": "assets/proboscis-monkey.jpg",
        "country":"Indonesia",
        "physics" : 18,
        "chemistry": 42,
        "maths": 38,
        "computer": 45,
        "passportDeclaration": "Yes",
        "immunizationDeclaration": "No"
    },
    {
        "name": "Teresa Meepers",
        "studentImage": "assets/proboscis-monkey.jpg",
        "country":"Indonesia",
        "physics" : 18,
        "chemistry": 42,
        "maths": 38,
        "computer": 45
    },
    {
        "name": "Clovis Meepers",
        "studentImage": "assets/proboscis-monkey.jpg",
        "country":"Indonesia",
        "physics" : 18,
        "chemistry": 42,
        "maths": 38,
        "computer": 45
    },
    {
        "name": "Juniper Meepers",
        "studentImage": "assets/proboscis-monkey.jpg",
        "country":"Indonesia",
        "physics" : 18,
        "chemistry": 42,
        "maths": 38,
        "computer": 45
    },
    {
        "name": "Maurice Meepers",
        "studentImage": "assets/proboscis-monkey.jpg",
        "country":"Indonesia",
        "physics" : 18,
        "chemistry": 42,
        "maths": 38,
        "computer": 45
    },
    {
        "name": "Peter Meepers",
        "studentImage": "assets/proboscis-monkey.jpg",
        "country":"Indonesia",
        "physics" : 18,
        "chemistry": 42,
        "maths": 38,
        "computer": 45
    },
    {
        "name": "Sammy Meepers",
        "studentImage": "assets/proboscis-monkey.jpg",
        "country":"Indonesia",
        "physics" : 18,
        "chemistry": 42,
        "maths": 38,
        "computer": 45
    },
    {
        "name": "Cynthia Meepers",
        "studentImage": "assets/proboscis-monkey.jpg",
        "country":"Indonesia",
        "physics" : 18,
        "chemistry": 42,
        "maths": 38,
        "computer": 45
    },
    {
        "name": "Dianna Squibbles",
        "studentImage": "assets/squirrel-monkey.jpg",
        "country":"Indonesia",
        "physics" : 18,
        "chemistry": 42,
        "maths": 38,
        "computer": 45
    },
    {
        "name": "Marsha Squibbles",
        "studentImage": "assets/squirrel-monkey.jpg",
        "country":"Indonesia",
        "physics" : 18,
        "chemistry": 42,
        "maths": 38,
        "computer": 45
    },
    {
        "name": "Matthew Squibbles",
        "studentImage": "assets/squirrel-monkey.jpg",
        "country":"Indonesia",
        "physics" : 18,
        "chemistry": 42,
        "maths": 38,
        "computer": 45
    },
];

columnDefs: ColDef[] = [

    {field: "name"},
    {field: "country"},
    {field: "chemistry"},
    {field: "maths"},
    {field: "computer"},
    {field: "passportDeclaration"},
    {field: "immunizationDeclaration"},
];

  onGrindReady(params: any){
    this.gridApi = params?.api;
  }
}
