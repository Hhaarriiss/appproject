import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  id: any;
  p:number=0
  w:number=0
  f:number=0
  v:number=0
  fb:number=0
  s:number=0

  constructor(
    private actRoute: ActivatedRoute,
    private users: AuthService,
    private firestore: AngularFirestore) 
    { this.id = this.actRoute.snapshot.paramMap.get("id"); }

  ngOnInit() {
    this.showChart(this.id)
    this.db(this.id)
  }
  async db(id: string){
    this.firestore.collection("users/")
    .doc(`${this.users.getUID()}/`)
    .collection('dailynut/')
    .doc(id)
.valueChanges()
.subscribe(data => {
  this.p= data["Protein"];
  this.w = data["Water"];
  this.f = data["Fat"];
  this.v = data["Vitamins"];
  this.fb = data["Fibre"];
  this.s = data["Sugar"];
});

  }
  async showChart(id: string) {

   

    var ctx = (<any>document.getElementById('yudhatp-chart')).getContext('2d');
    this.firestore.collection("users/")
    .doc(`${this.users.getUID()}/`)
    .collection('dailynut/')
    .doc(id)
.valueChanges()
.subscribe(data => {
this.p= data["Protein"];
this.w = data["Water"];
this.f = data["Fat"];
this.v = data["Vitamins"];
this.fb = data["Fibre"];
this.s = data["Sugar"];
    var chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
        labels: ["Protein", "Water", "Fat", "Vitamins", "Fibre","Sugar"],
        datasets: [{
              label: "This is chart for nutrient",
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
             
              data: [this.p, this.w, this.f, this.v, this.fb,this.s,0],
              borderWidth: 1,
              minBarLength: 9
        }]
       }
    });

  });
  
  }

}
