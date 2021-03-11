import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../service/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //string food and water
  //water
  ws1: string;
  //food
  fs1: string; 
  //all nutrient
    fp1:number=0;
    fw1:number=0;
    ff1:number=0;
    fv1:number=0;
    ffb1:number=0;
    fss1:number=0;

    fp2:number=0;
    fw2:number=0;
    ff2:number=0;
    fv2:number=0;
    ffb2:number=0;
    fss2:number=0;

    fp3:number=0;
    fw3:number=0;
    ff3:number=0;
    fv3:number=0;
    ffb3:number=0;
    fss3:number=0;

    fp4:number=0;
    fw4:number=0;
    ff4:number=0;
    fv4:number=0;
    ffb4:number=0;
    fss4:number=0;

    fp5:number=0;
    fw5:number=0;
    ff5:number=0;
    fv5:number=0;
    ffb5:number=0;
    fss5:number=0;
  //cal all nut food ad water
   bp:number=0;
   bw:number=0;
   bf:number=0;
   bv:number=0;
   bfb:number=0;
   bs:number=0;
   //err1 breakfeast
   dty1:string="";
   ddty1:string="";
   errp:number=0;
   errw:string="above 500";
   errf:number=0;
   errv:number=0;
   errfb:number=0;
   errsg:number=0;
   kari="p1";
  constructor(private alertCtrl: AlertController,
    private users: AuthService,
    private firestore: AngularFirestore) {}
    ngOnInit() {
      this.err1();
    }

    async err1(){
      if(this.kari=="p1"){
        this.errp=50;
        this.errf=50;
        this.errv=800;
        this.errfb=150;
        this.errsg=30;
      }
      else if(this.kari=="p2"){
        this.errp=70;
        this.errf=50;
        this.errv=400;
        this.errfb=100;
        this.errsg=30;
      }
      else if(this.kari=="p3"){
        this.errp=70;
        this.errf=50;
        this.errv=100;
        this.errfb=100;
        this.errsg=10;
    
      }
    }
//food breakfeast
//
///
///
//
///
 async cal1(){
  let alert1 = this.alertCtrl.create({
    header:"Food not found",
    subHeader:"sorry",
    buttons:[{ text:"okay"}]
   
  });
  if (this.fs1=="nasi lemak ayam") {
    this.fp1 = 5
     this.fw1 = 0
     this.ff1= 20
     this.fv1 = 1
     this.ffb1 = 2
     this.fss1 = 5

     this.fp2 = 0
    this.fw2 = 0
    this.ff2= 0
    this.fv2 = 0
    this.ffb2 = 0
    this.fss2 = 0

    this.fp3 = 0
      this.fw3 = 0
      this.ff3 = 0
      this.fv3 = 0
      this.ffb3 = 0
      this.fss3 = 0

      this.fp4 = 0
        this.fw4 = 0
        this.ff4 = 0
        this.fv4 = 0
        this.ffb4 = 0
        this.fss4 = 0
        
        this.fp5 = 0
          this.fw5 = 0
          this.ff5 = 0
          this.fv5 = 0
          this.ffb5 = 0
          this.fss5 = 0
   }
   else if (this.fs1=="nasi kukus") {
    this.fp2 = 8
    this.fw2 = 0
    this.ff2= 30
    this.fv2 = 0
    this.ffb2 = 10
    this.fss2 = 5

    this.fp1 = 0
     this.fw1 = 0
     this.ff1= 0
     this.fv1 = 0
     this.ffb1 = 0
     this.fss1 = 0

    this.fp3 = 0
      this.fw3 = 0
      this.ff3 = 0
      this.fv3 = 0
      this.ffb3 = 0
      this.fss3 = 0

      this.fp4 = 0
        this.fw4 = 0
        this.ff4 = 0
        this.fv4 = 0
        this.ffb4 = 0
        this.fss4 = 0

        this.fp5 = 0
          this.fw5 = 0
          this.ff5 = 0
          this.fv5 = 0
          this.ffb5 = 0
          this.fss5 = 0
     }else if (this.fs1=="steak") {
      this.fp3 = 10
      this.fw3 = 0
      this.ff3 = 30
      this.fv3 = 0
      this.ffb3 = 8
      this.fss3 = 0

      this.fp1 = 0
      this.fw1 = 0
      this.ff1= 0
      this.fv1 = 0
      this.ffb1 = 0
      this.fss1 = 0

     this.fp2 = 0
       this.fw2 = 0
       this.ff2 = 0
       this.fv2 = 0
       this.ffb2 = 0
       this.fss2 = 0
 
       this.fp4 = 0
         this.fw4 = 0
         this.ff4 = 0
         this.fv4 = 0
         this.ffb4 = 0
         this.fss4 = 0
 
         this.fp5 = 0
           this.fw5 = 0
           this.ff5 = 0
           this.fv5 = 0
           this.ffb5 = 0
           this.fss5 = 0
       }else if (this.fs1 =="maggi") {
        this.fp4 = 5
        this.fw4 = 100
        this.ff4 = 10
        this.fv4 = 0
        this.ffb4 = 2
        this.fss4 = 3

        this.fp1 = 0
        this.fw1 = 0
        this.ff1= 0
        this.fv1 = 0
        this.ffb1 = 0
        this.fss1 = 0
   
       this.fp2 = 0
         this.fw2 = 0
         this.ff2 = 0
         this.fv2 = 0
         this.ffb2 = 0
         this.fss2 = 0
   
         this.fp3 = 0
           this.fw3 = 0
           this.ff3 = 0
           this.fv3 = 0
           this.ffb3 = 0
           this.fss3 = 0
   
           this.fp5 = 0
             this.fw5 = 0
             this.ff5 = 0
             this.fv5 = 0
             this.ffb5 = 0
             this.fss5 = 0
         }
         else if (this.fs1 =="roti kosong") {
          this.fp5 = 5
          this.fw5 = 0
          this.ff5 = 7
          this.fv5 = 0
          this.ffb5 = 1

          this.fp1 = 0
        this.fw1 = 0
        this.ff1= 0
        this.fv1 = 0
        this.ffb1 = 0
        this.fss1 = 0
   
       this.fp2 = 0
         this.fw2 = 0
         this.ff2 = 0
         this.fv2 = 0
         this.ffb2 = 0
         this.fss2 = 0
   
         this.fp3 = 0
           this.fw3 = 0
           this.ff3 = 0
           this.fv3 = 0
           this.ffb3 = 0
           this.fss3 = 0
   
           this.fp4 = 0
             this.fw4 = 0
             this.ff4 = 0
             this.ff4 = 0
             this.ffb4 = 0
             this.fss4 = 0
           }else{
      (await alert1).present();
      console.log("food not found")
     }

    this.bp += this.fp1+this.fp2+this.fp3+this.fp4+this.fp5
    this.bw += this.fw1+this.fw2+this.fw3+this.fw4+this.fw5
    this.bf += this.ff1+this.ff2+this.ff3+this.ff4+this.ff5
    this.bv += this.ff1+this.ff2+this.ff3+this.ff4+this.ff5
    this.bfb += this.ffb1+this.ffb2+this.ffb3+this.ffb4+this.ffb5
    this.bs +=  this.fss1+this.fss2+this.fss3+this.fss4+this.fss5
    let load1 = this.alertCtrl.create({
      header:"your Protein its over for breakfeast",
      buttons:[{ text:"okay"}]
      
    });
    let load2 = this.alertCtrl.create({
      header:"your Protein its over for breakfeast",
      buttons:[{ text:"okay"}]
      
    });
    let load3 = this.alertCtrl.create({
      header:"your fat its over for breakfeast",
      buttons:[{ text:"okay"}]
      
    });
    let load4 = this.alertCtrl.create({
      header:"your vitamins its over for breakfeast",
      buttons:[{ text:"okay"}]
      
    });
    let load5 = this.alertCtrl.create({
      header:"your sugar its over for breakfeast",
      buttons:[{ text:"okay"}]
      
    });

    if(this.kari=="p1"){
      if(this.bp > 50 ){
        (await load1).present();
      }
      if(this.bf > 50 ){
        (await load2).present();
      }
      if(this.bv > 800){
        (await load3).present();
      }
      if(this.bfb > 150 ){
        (await load4).present();
      }
      if(this.bs > 30 ){
        (await load5).present();
      }
  
    }
    else if(this.kari=="p2"){
      if(this.bp > 70 ){
        (await load1).present();
      }
      if(this.bf > 50 ){
        (await load2).present();
      }
      if(this.bv > 800){
        (await load3).present();
      }
      if(this.bfb > 100 ){
        (await load4).present();
      }
      if(this.bs > 30 ){
        (await load5).present();
      }
  
    }
    else if(this.kari=="p3"){
      if(this.bp > 70 ){
        (await load1).present();
      }
      if(this.bf > 30 ){
        (await load2).present();
      }
      if(this.bv > 100){
        (await load3).present();
      }
      if(this.bfb > 100 ){
        (await load4).present();
      }
      if(this.bs > 10 ){
        (await load5).present();
      }
  
    }
    
 }
//water breakfeast
//
///
///
//
///
 async cal2(){
  this.fp1 = 0
  this.fw1 = 0
  this.ff1= 0
  this.fv1 = 0
  this.ffb1 = 0
  this.fss1 = 0

  this.fp2 = 0
 this.fw2 = 0
 this.ff2= 0
 this.fv2 = 0
 this.ffb2 = 0
 this.fss2 =0

 this.fp3 = 0
   this.fw3 = 0
   this.ff3 = 0
   this.fv3 = 0
   this.ffb3 = 0
   this.fss3 =0

   this.fp4 = 0
     this.fw4 = 0
     this.ff4 = 0
     this.fv4 = 0
     this.ffb4 = 0
     this.fss4 =0

     this.fp5 = 0
       this.fw5 = 0
       this.ff5 = 0
       this.fv5 = 0
       this.ffb5 = 0
       this.fss5 =0
  let alert1 = this.alertCtrl.create({
    header:"Food not found",
    subHeader:"sorry",
    buttons:[{ text:"okay"}]
   
  });
  if (this.ws1=="sirap") {
    this.fp1 = 5
     this.fw1 = 150
     this.ff1= 10
     this.fv1 = 10
     this.ffb1 = 10
     this.fss1= 10

     this.fp2 = 0
     this.fw2 = 0
     this.ff2= 0
     this.fv2 = 0
     this.ffb2 = 0
     this.fss2 = 0
 
     this.fp3 = 0
       this.fw3 = 0
       this.ff3 = 0
       this.fv3 = 0
       this.ffb3 = 0
       this.fss3 = 0
 
       this.fp4 = 0
         this.fw4 = 0
         this.ff4 = 0
         this.fv4 = 0
         this.ffb4 = 0
         this.fss4 = 0
         
         this.fp5 = 0
           this.fw5 = 0
           this.ff5 = 0
           this.fv5 = 0
           this.ffb5 = 0
           this.fss5 = 0
   }
   else if (this.ws1=="milo") {
    this.fp2 = 10
    this.fw2 = 150
    this.ff2= 7
    this.fv2 = 10
    this.ffb2 = 10
    this.fss2 = 10

    this.fp1 = 0
     this.fw1 = 0
     this.ff1= 0
     this.fv1 = 0
     this.ffb1 = 0
     this.fss1 = 0

    this.fp3 = 0
      this.fw3 = 0
      this.ff3 = 0
      this.fv3 = 0
      this.ffb3 = 0
      this.fss3 = 0

      this.fp4 = 0
        this.fw4 = 0
        this.ff4 = 0
        this.fv4 = 0
        this.ffb4 = 0
        this.fss4 = 0

        this.fp5 = 0
          this.fw5 = 0
          this.ff5 = 0
          this.fv5 = 0
          this.ffb5 = 0
          this.fss5 = 0
     }else if (this.ws1=="mineral") {
      this.fp3 = 0
      this.fw3 = 150
      this.ff3 = 0
      this.fv3 = 20
      this.ffb3 = 20
      this.fss3 = 0

      this.fp1 = 0
      this.fw1 = 0
      this.ff1= 0
      this.fv1 = 0
      this.ffb1 = 0
      this.fss1 = 0

     this.fp2 = 0
       this.fw2 = 0
       this.ff2 = 0
       this.fv2 = 0
       this.ffb2 = 0
       this.fss2 = 0
 
       this.fp4 = 0
         this.fw4 = 0
         this.ff4 = 0
         this.fv4 = 0
         this.ffb4 = 0
         this.fss4 = 0
 
         this.fp5 = 0
           this.fw5 = 0
           this.ff5 = 0
           this.fv5 = 0
           this.ffb5 = 0
           this.fss5 = 0
       }else if (this.ws1 =="orange juice") {
        this.fp4 = 5
        this.fw4 = 150
        this.ff4 = 10
        this.fv4 = 20
        this.ffb4 = 10
        this.fss4 = 10

        this.fp1 = 0
        this.fw1 = 0
        this.ff1= 0
        this.fv1 = 0
        this.ffb1 = 0
        this.fss1 = 0
   
       this.fp2 = 0
         this.fw2 = 0
         this.ff2 = 0
         this.fv2 = 0
         this.ffb2 = 0
         this.fss2 = 0
   
         this.fp3 = 0
           this.fw3 = 0
           this.ff3 = 0
           this.fv3 = 0
           this.ffb3 = 0
           this.fss3 = 0
   
           this.fp5 = 0
             this.fw5 = 0
             this.ff5 = 0
             this.fv5 = 0
             this.ffb5 = 0
             this.fss5 = 0
         }
         else if (this.ws1 =="apple juice") {
          this.fp5 = 20
          this.fw5 = 150
          this.ff5 = 0
          this.fv5 = 10
          this.ffb5 = 20
          this.fss5 = 20

          this.fp1 = 0
          this.fw1 = 0
          this.ff1= 0
          this.fv1 = 0
          this.ffb1 = 0
          this.fss1 = 0
     
         this.fp2 = 0
           this.fw2 = 0
           this.ff2 = 0
           this.fv2 = 0
           this.ffb2 = 0
           this.fss2 = 0
     
           this.fp3 = 0
             this.fw3 = 0
             this.ff3 = 0
             this.fv3 = 0
             this.ffb3 = 0
             this.fss3 = 0
     
             this.fp4 = 0
               this.fw4 = 0
               this.ff4 = 0
               this.ff4 = 0
               this.ffb4 = 0
               this.fss4 = 0
           }else{
      (await alert1).present();
      console.log("water not found")
     }

    this.bp += this.fp1+this.fp2+this.fp3+this.fp4+this.fp5
    this.bw += this.fw1+this.fw2+this.fw3+this.fw4+this.fw5
    this.bf += this.ff1+this.ff2+this.ff3+this.ff4+this.ff5
    this.bv += this.ff1+this.ff2+this.ff3+this.ff4+this.ff5
    this.bfb += this.ffb1+this.ffb2+this.ffb3+this.ffb4+this.ffb5
    this.bs +=  this.fss1+this.fss2+this.fss3+this.fss4+this.fss5
    let load1 = this.alertCtrl.create({
      header:"your Protein its over for breakfeast",
      buttons:[{ text:"okay"}]
      
    });
    let load2 = this.alertCtrl.create({
      header:"your Fats its over for breakfeast",
      buttons:[{ text:"okay"}]
      
    });
    let load3 = this.alertCtrl.create({
      header:"your Vitamins its over for breakfeast",
      buttons:[{ text:"okay"}]
      
    });
    let load4 = this.alertCtrl.create({
      header:"your Fibre its over for breakfeast",
      buttons:[{ text:"okay"}]
      
    });
    let load5 = this.alertCtrl.create({
      header:"your Sugar its over for breakfeast",
      buttons:[{ text:"okay"}]
      
    });
    if(this.kari=="p1"){
      if(this.bp > 50 ){
        (await load1).present();
      }
      if(this.bf > 50 ){
        (await load2).present();
      }
      if(this.bv > 800){
        (await load3).present();
      }
      if(this.bfb > 150 ){
        (await load4).present();
      }
      if(this.bs > 30 ){
        (await load5).present();
      }
  
    }
    else if(this.kari=="p2"){
      if(this.bp > 70 ){
        (await load1).present();
      }
      if(this.bf > 50 ){
        (await load2).present();
      }
      if(this.bv > 800){
        (await load3).present();
      }
      if(this.bfb > 100 ){
        (await load4).present();
      }
      if(this.bs > 30 ){
        (await load5).present();
      }
  
    }
    else if(this.kari=="p3"){
      if(this.bp > 70 ){
        (await load1).present();
      }
      if(this.bf > 30 ){
        (await load2).present();
      }
      if(this.bv > 100){
        (await load3).present();
      }
      if(this.bfb > 100 ){
        (await load4).present();
      }
      if(this.bs > 10 ){
        (await load5).present();
      }
  
    }
 }
fs2:string =""
 async cal3(){
  this.fp1 = 0
  this.fw1 = 0
  this.ff1= 0
  this.fv1 = 0
  this.ffb1 = 0
  this.fss1 = 0

  this.fp2 = 0
 this.fw2 = 0
 this.ff2= 0
 this.fv2 = 0
 this.ffb2 = 0
 this.fss2 =0

 this.fp3 = 0
   this.fw3 = 0
   this.ff3 = 0
   this.fv3 = 0
   this.ffb3 = 0
   this.fss3 =0

   this.fp4 = 0
     this.fw4 = 0
     this.ff4 = 0
     this.fv4 = 0
     this.ffb4 = 0
     this.fss4 =0

     this.fp5 = 0
       this.fw5 = 0
       this.ff5 = 0
       this.fv5 = 0
       this.ffb5 = 0
       this.fss5 =0
  let alert1 = this.alertCtrl.create({
    header:"Food not found",
    subHeader:"sorry",
    buttons:[{ text:"okay"}]
   
  });
  if (this.fs2=="nasi lemak ayam") {
    this.fp1 = 5
     this.fw1 = 0
     this.ff1= 20
     this.fv1 = 1
     this.ffb1 = 2
     this.fss1 = 5

     this.fp2 = 0
    this.fw2 = 0
    this.ff2= 0
    this.fv2 = 0
    this.ffb2 = 0
    this.fss2 = 0

    this.fp3 = 0
      this.fw3 = 0
      this.ff3 = 0
      this.fv3 = 0
      this.ffb3 = 0
      this.fss3 = 0

      this.fp4 = 0
        this.fw4 = 0
        this.ff4 = 0
        this.fv4 = 0
        this.ffb4 = 0
        this.fss4 = 0
        
        this.fp5 = 0
          this.fw5 = 0
          this.ff5 = 0
          this.fv5 = 0
          this.ffb5 = 0
          this.fss5 = 0
   }
   else if (this.fs2=="nasi kukus") {
    this.fp2 = 8
    this.fw2 = 0
    this.ff2= 30
    this.fv2 = 0
    this.ffb2 = 10
    this.fss2 = 5

    this.fp1 = 0
     this.fw1 = 0
     this.ff1= 0
     this.fv1 = 0
     this.ffb1 = 0
     this.fss1 = 0

    this.fp3 = 0
      this.fw3 = 0
      this.ff3 = 0
      this.fv3 = 0
      this.ffb3 = 0
      this.fss3 = 0

      this.fp4 = 0
        this.fw4 = 0
        this.ff4 = 0
        this.fv4 = 0
        this.ffb4 = 0
        this.fss4 = 0

        this.fp5 = 0
          this.fw5 = 0
          this.ff5 = 0
          this.fv5 = 0
          this.ffb5 = 0
          this.fss5 = 0
     }else if (this.fs2=="steak") {
      this.fp3 = 10
      this.fw3 = 0
      this.ff3 = 30
      this.fv3 = 0
      this.ffb3 = 8
      this.fss3 = 0

      this.fp1 = 0
      this.fw1 = 0
      this.ff1= 0
      this.fv1 = 0
      this.ffb1 = 0
      this.fss1 = 0

     this.fp2 = 0
       this.fw2 = 0
       this.ff2 = 0
       this.fv2 = 0
       this.ffb2 = 0
       this.fss2 = 0
 
       this.fp4 = 0
         this.fw4 = 0
         this.ff4 = 0
         this.fv4 = 0
         this.ffb4 = 0
         this.fss4 = 0
 
         this.fp5 = 0
           this.fw5 = 0
           this.ff5 = 0
           this.fv5 = 0
           this.ffb5 = 0
           this.fss5 = 0
       }else if (this.fs2 =="maggi") {
        this.fp4 = 5
        this.fw4 = 100
        this.ff4 = 10
        this.fv4 = 0
        this.ffb4 = 2
        this.fss4 = 3

        this.fp1 = 0
        this.fw1 = 0
        this.ff1= 0
        this.fv1 = 0
        this.ffb1 = 0
        this.fss1 = 0
   
       this.fp2 = 0
         this.fw2 = 0
         this.ff2 = 0
         this.fv2 = 0
         this.ffb2 = 0
         this.fss2 = 0
   
         this.fp3 = 0
           this.fw3 = 0
           this.ff3 = 0
           this.fv3 = 0
           this.ffb3 = 0
           this.fss3 = 0
   
           this.fp5 = 0
             this.fw5 = 0
             this.ff5 = 0
             this.fv5 = 0
             this.ffb5 = 0
             this.fss5 = 0
         }
         else if (this.fs2 =="roti kosong") {
          this.fp5 = 5
          this.fw5 = 0
          this.ff5 = 7
          this.fv5 = 0
          this.ffb5 = 1

          this.fp1 = 0
        this.fw1 = 0
        this.ff1= 0
        this.fv1 = 0
        this.ffb1 = 0
        this.fss1 = 0
   
       this.fp2 = 0
         this.fw2 = 0
         this.ff2 = 0
         this.fv2 = 0
         this.ffb2 = 0
         this.fss2 = 0
   
         this.fp3 = 0
           this.fw3 = 0
           this.ff3 = 0
           this.fv3 = 0
           this.ffb3 = 0
           this.fss3 = 0
   
           this.fp4 = 0
             this.fw4 = 0
             this.ff4 = 0
             this.ff4 = 0
             this.ffb4 = 0
             this.fss4 = 0
           }else{
      (await alert1).present();
      console.log("food not found")
     }

    this.bp += this.fp1+this.fp2+this.fp3+this.fp4+this.fp5
    this.bw += this.fw1+this.fw2+this.fw3+this.fw4+this.fw5
    this.bf += this.ff1+this.ff2+this.ff3+this.ff4+this.ff5
    this.bv += this.ff1+this.ff2+this.ff3+this.ff4+this.ff5
    this.bfb += this.ffb1+this.ffb2+this.ffb3+this.ffb4+this.ffb5
    this.bs +=  this.fss1+this.fss2+this.fss3+this.fss4+this.fss5
    let load1 = this.alertCtrl.create({
      header:"your Protein its over for Lunch",
      buttons:[{ text:"okay"}]
      
    });
    let load2 = this.alertCtrl.create({
      header:"your Fats its over for Lunch",
      buttons:[{ text:"okay"}]
      
    });
    let load3 = this.alertCtrl.create({
      header:"your Vitamins its over for Lunch",
      buttons:[{ text:"okay"}]
      
    });
    let load4 = this.alertCtrl.create({
      header:"your Fibre its over for Lunch",
      buttons:[{ text:"okay"}]
      
    });
    let load5 = this.alertCtrl.create({
      header:"your Sugar its over for Lunch",
      buttons:[{ text:"okay"}]
      
    });
    if(this.kari=="p1"){
      if(this.bp > 50 ){
        (await load1).present();
      }
      if(this.bf > 50 ){
        (await load2).present();
      }
      if(this.bv > 800){
        (await load3).present();
      }
      if(this.bfb > 150 ){
        (await load4).present();
      }
      if(this.bs > 30 ){
        (await load5).present();
      }
  
    }
    else if(this.kari=="p2"){
      if(this.bp > 70 ){
        (await load1).present();
      }
      if(this.bf > 50 ){
        (await load2).present();
      }
      if(this.bv > 800){
        (await load3).present();
      }
      if(this.bfb > 100 ){
        (await load4).present();
      }
      if(this.bs > 30 ){
        (await load5).present();
      }
  
    }
    else if(this.kari=="p3"){
      if(this.bp > 70 ){
        (await load1).present();
      }
      if(this.bf > 30 ){
        (await load2).present();
      }
      if(this.bv > 100){
        (await load3).present();
      }
      if(this.bfb > 100 ){
        (await load4).present();
      }
      if(this.bs > 10 ){
        (await load5).present();
      }
  
    }
    
 }
//water breakfeast
//
///
///
//
///
ws2:string = ""
 async cal4(){
  this.fp1 = 0
  this.fw1 = 0
  this.ff1= 0
  this.fv1 = 0
  this.ffb1 = 0
  this.fss1 = 0

  this.fp2 = 0
 this.fw2 = 0
 this.ff2= 0
 this.fv2 = 0
 this.ffb2 = 0
 this.fss2 =0

 this.fp3 = 0
   this.fw3 = 0
   this.ff3 = 0
   this.fv3 = 0
   this.ffb3 = 0
   this.fss3 =0

   this.fp4 = 0
     this.fw4 = 0
     this.ff4 = 0
     this.fv4 = 0
     this.ffb4 = 0
     this.fss4 =0

     this.fp5 = 0
       this.fw5 = 0
       this.ff5 = 0
       this.fv5 = 0
       this.ffb5 = 0
       this.fss5 =0
  let alert1 = this.alertCtrl.create({
    header:"Food not found",
    subHeader:"sorry",
    buttons:[{ text:"okay"}]
   
  });
  if (this.ws2=="sirap") {
    this.fp1 = 5
     this.fw1 = 150
     this.ff1= 10
     this.fv1 = 10
     this.ffb1 = 10
     this.fss1= 10

     this.fp2 = 0
     this.fw2 = 0
     this.ff2= 0
     this.fv2 = 0
     this.ffb2 = 0
     this.fss2 = 0
 
     this.fp3 = 0
       this.fw3 = 0
       this.ff3 = 0
       this.fv3 = 0
       this.ffb3 = 0
       this.fss3 = 0
 
       this.fp4 = 0
         this.fw4 = 0
         this.ff4 = 0
         this.fv4 = 0
         this.ffb4 = 0
         this.fss4 = 0
         
         this.fp5 = 0
           this.fw5 = 0
           this.ff5 = 0
           this.fv5 = 0
           this.ffb5 = 0
           this.fss5 = 0
   }
   else if (this.ws2=="milo") {
    this.fp2 = 10
    this.fw2 = 150
    this.ff2= 7
    this.fv2 = 10
    this.ffb2 = 10
    this.fss2 = 10

    this.fp1 = 0
     this.fw1 = 0
     this.ff1= 0
     this.fv1 = 0
     this.ffb1 = 0
     this.fss1 = 0

    this.fp3 = 0
      this.fw3 = 0
      this.ff3 = 0
      this.fv3 = 0
      this.ffb3 = 0
      this.fss3 = 0

      this.fp4 = 0
        this.fw4 = 0
        this.ff4 = 0
        this.fv4 = 0
        this.ffb4 = 0
        this.fss4 = 0

        this.fp5 = 0
          this.fw5 = 0
          this.ff5 = 0
          this.fv5 = 0
          this.ffb5 = 0
          this.fss5 = 0
     }else if (this.ws2=="mineral") {
      this.fp3 = 0
      this.fw3 = 150
      this.ff3 = 0
      this.fv3 = 20
      this.ffb3 = 20
      this.fss3 = 0

      this.fp1 = 0
      this.fw1 = 0
      this.ff1= 0
      this.fv1 = 0
      this.ffb1 = 0
      this.fss1 = 0

     this.fp2 = 0
       this.fw2 = 0
       this.ff2 = 0
       this.fv2 = 0
       this.ffb2 = 0
       this.fss2 = 0
 
       this.fp4 = 0
         this.fw4 = 0
         this.ff4 = 0
         this.fv4 = 0
         this.ffb4 = 0
         this.fss4 = 0
 
         this.fp5 = 0
           this.fw5 = 0
           this.ff5 = 0
           this.fv5 = 0
           this.ffb5 = 0
           this.fss5 = 0
       }else if (this.ws2 =="orange juice") {
        this.fp4 = 5
        this.fw4 = 150
        this.ff4 = 10
        this.fv4 = 20
        this.ffb4 = 10
        this.fss4 = 10

        this.fp1 = 0
        this.fw1 = 0
        this.ff1= 0
        this.fv1 = 0
        this.ffb1 = 0
        this.fss1 = 0
   
       this.fp2 = 0
         this.fw2 = 0
         this.ff2 = 0
         this.fv2 = 0
         this.ffb2 = 0
         this.fss2 = 0
   
         this.fp3 = 0
           this.fw3 = 0
           this.ff3 = 0
           this.fv3 = 0
           this.ffb3 = 0
           this.fss3 = 0
   
           this.fp5 = 0
             this.fw5 = 0
             this.ff5 = 0
             this.fv5 = 0
             this.ffb5 = 0
             this.fss5 = 0
         }
         else if (this.ws2 =="apple juice") {
          this.fp5 = 20
          this.fw5 = 150
          this.ff5 = 0
          this.fv5 = 10
          this.ffb5 = 20
          this.fss5 = 20

          this.fp1 = 0
          this.fw1 = 0
          this.ff1= 0
          this.fv1 = 0
          this.ffb1 = 0
          this.fss1 = 0
     
         this.fp2 = 0
           this.fw2 = 0
           this.ff2 = 0
           this.fv2 = 0
           this.ffb2 = 0
           this.fss2 = 0
     
           this.fp3 = 0
             this.fw3 = 0
             this.ff3 = 0
             this.fv3 = 0
             this.ffb3 = 0
             this.fss3 = 0
     
             this.fp4 = 0
               this.fw4 = 0
               this.ff4 = 0
               this.ff4 = 0
               this.ffb4 = 0
               this.fss4 = 0
           }else{
      (await alert1).present();
      console.log("water not found")
     }

    this.bp += this.fp1+this.fp2+this.fp3+this.fp4+this.fp5
    this.bw += this.fw1+this.fw2+this.fw3+this.fw4+this.fw5
    this.bf += this.ff1+this.ff2+this.ff3+this.ff4+this.ff5
    this.bv += this.ff1+this.ff2+this.ff3+this.ff4+this.ff5
    this.bfb += this.ffb1+this.ffb2+this.ffb3+this.ffb4+this.ffb5
    this.bs +=  this.fss1+this.fss2+this.fss3+this.fss4+this.fss5
    let load1 = this.alertCtrl.create({
      header:"your Protein its over for Lunch",
      buttons:[{ text:"okay"}]
      
    });
    let load2 = this.alertCtrl.create({
      header:"your Fats its over for Lunch",
      buttons:[{ text:"okay"}]
      
    });
    let load3 = this.alertCtrl.create({
      header:"your Vitamins its over for Lunch",
      buttons:[{ text:"okay"}]
      
    });
    let load4 = this.alertCtrl.create({
      header:"your Fibre its over for Lunch",
      buttons:[{ text:"okay"}]
      
    });
    let load5 = this.alertCtrl.create({
      header:"your Sugar its over for Lunch",
      buttons:[{ text:"okay"}]
      
    });
    if(this.kari=="p1"){
      if(this.bp > 50 ){
        (await load1).present();
      }
      if(this.bf > 50 ){
        (await load2).present();
      }
      if(this.bv > 800){
        (await load3).present();
      }
      if(this.bfb > 150 ){
        (await load4).present();
      }
      if(this.bs > 30 ){
        (await load5).present();
      }
  
    }
    else if(this.kari=="p2"){
      if(this.bp > 70 ){
        (await load1).present();
      }
      if(this.bf > 50 ){
        (await load2).present();
      }
      if(this.bv > 800){
        (await load3).present();
      }
      if(this.bfb > 100 ){
        (await load4).present();
      }
      if(this.bs > 30 ){
        (await load5).present();
      }
  
    }
    else if(this.kari=="p3"){
      if(this.bp > 70 ){
        (await load1).present();
      }
      if(this.bf > 30 ){
        (await load2).present();
      }
      if(this.bv > 100){
        (await load3).present();
      }
      if(this.bfb > 100 ){
        (await load4).present();
      }
      if(this.bs > 10 ){
        (await load5).present();
      }
  
    }
 }
  
 fs3:string =""
 async cal5(){
  this.fp1 = 0
  this.fw1 = 0
  this.ff1= 0
  this.fv1 = 0
  this.ffb1 = 0
  this.fss1 = 0

  this.fp2 = 0
 this.fw2 = 0
 this.ff2= 0
 this.fv2 = 0
 this.ffb2 = 0
 this.fss2 =0

 this.fp3 = 0
   this.fw3 = 0
   this.ff3 = 0
   this.fv3 = 0
   this.ffb3 = 0
   this.fss3 =0

   this.fp4 = 0
     this.fw4 = 0
     this.ff4 = 0
     this.fv4 = 0
     this.ffb4 = 0
     this.fss4 =0

     this.fp5 = 0
       this.fw5 = 0
       this.ff5 = 0
       this.fv5 = 0
       this.ffb5 = 0
       this.fss5 =0
  let alert1 = this.alertCtrl.create({
    header:"Food not found",
    subHeader:"sorry",
    buttons:[{ text:"okay"}]
   
  });
  if (this.fs3=="nasi lemak ayam") {
    this.fp1 = 5
     this.fw1 = 0
     this.ff1= 20
     this.fv1 = 1
     this.ffb1 = 2
     this.fss1 = 5

     this.fp2 = 0
    this.fw2 = 0
    this.ff2= 0
    this.fv2 = 0
    this.ffb2 = 0
    this.fss2 = 0

    this.fp3 = 0
      this.fw3 = 0
      this.ff3 = 0
      this.fv3 = 0
      this.ffb3 = 0
      this.fss3 = 0

      this.fp4 = 0
        this.fw4 = 0
        this.ff4 = 0
        this.fv4 = 0
        this.ffb4 = 0
        this.fss4 = 0
        
        this.fp5 = 0
          this.fw5 = 0
          this.ff5 = 0
          this.fv5 = 0
          this.ffb5 = 0
          this.fss5 = 0
   }
   else if (this.fs3=="nasi kukus") {
    this.fp2 = 8
    this.fw2 = 0
    this.ff2= 30
    this.fv2 = 0
    this.ffb2 = 10
    this.fss2 = 5

    this.fp1 = 0
     this.fw1 = 0
     this.ff1= 0
     this.fv1 = 0
     this.ffb1 = 0
     this.fss1 = 0

    this.fp3 = 0
      this.fw3 = 0
      this.ff3 = 0
      this.fv3 = 0
      this.ffb3 = 0
      this.fss3 = 0

      this.fp4 = 0
        this.fw4 = 0
        this.ff4 = 0
        this.fv4 = 0
        this.ffb4 = 0
        this.fss4 = 0

        this.fp5 = 0
          this.fw5 = 0
          this.ff5 = 0
          this.fv5 = 0
          this.ffb5 = 0
          this.fss5 = 0
     }else if (this.fs3=="steak") {
      this.fp3 = 10
      this.fw3 = 0
      this.ff3 = 30
      this.fv3 = 0
      this.ffb3 = 8
      this.fss3 = 0

      this.fp1 = 0
      this.fw1 = 0
      this.ff1= 0
      this.fv1 = 0
      this.ffb1 = 0
      this.fss1 = 0

     this.fp2 = 0
       this.fw2 = 0
       this.ff2 = 0
       this.fv2 = 0
       this.ffb2 = 0
       this.fss2 = 0
 
       this.fp4 = 0
         this.fw4 = 0
         this.ff4 = 0
         this.fv4 = 0
         this.ffb4 = 0
         this.fss4 = 0
 
         this.fp5 = 0
           this.fw5 = 0
           this.ff5 = 0
           this.fv5 = 0
           this.ffb5 = 0
           this.fss5 = 0
       }else if (this.fs3 =="maggi") {
        this.fp4 = 5
        this.fw4 = 100
        this.ff4 = 10
        this.fv4 = 0
        this.ffb4 = 2
        this.fss4 = 3

        this.fp1 = 0
        this.fw1 = 0
        this.ff1= 0
        this.fv1 = 0
        this.ffb1 = 0
        this.fss1 = 0
   
       this.fp2 = 0
         this.fw2 = 0
         this.ff2 = 0
         this.fv2 = 0
         this.ffb2 = 0
         this.fss2 = 0
   
         this.fp3 = 0
           this.fw3 = 0
           this.ff3 = 0
           this.fv3 = 0
           this.ffb3 = 0
           this.fss3 = 0
   
           this.fp5 = 0
             this.fw5 = 0
             this.ff5 = 0
             this.fv5 = 0
             this.ffb5 = 0
             this.fss5 = 0
         }
         else if (this.fs3 =="roti kosong") {
          this.fp5 = 5
          this.fw5 = 0
          this.ff5 = 7
          this.fv5 = 0
          this.ffb5 = 1

          this.fp1 = 0
        this.fw1 = 0
        this.ff1= 0
        this.fv1 = 0
        this.ffb1 = 0
        this.fss1 = 0
   
       this.fp2 = 0
         this.fw2 = 0
         this.ff2 = 0
         this.fv2 = 0
         this.ffb2 = 0
         this.fss2 = 0
   
         this.fp3 = 0
           this.fw3 = 0
           this.ff3 = 0
           this.fv3 = 0
           this.ffb3 = 0
           this.fss3 = 0
   
           this.fp4 = 0
             this.fw4 = 0
             this.ff4 = 0
             this.ff4 = 0
             this.ffb4 = 0
             this.fss4 = 0
           }else{
      (await alert1).present();
      console.log("food not found")
     }

    this.bp += this.fp1+this.fp2+this.fp3+this.fp4+this.fp5
    this.bw += this.fw1+this.fw2+this.fw3+this.fw4+this.fw5
    this.bf += this.ff1+this.ff2+this.ff3+this.ff4+this.ff5
    this.bv += this.ff1+this.ff2+this.ff3+this.ff4+this.ff5
    this.bfb += this.ffb1+this.ffb2+this.ffb3+this.ffb4+this.ffb5
    this.bs +=  this.fss1+this.fss2+this.fss3+this.fss4+this.fss5
    let load1 = this.alertCtrl.create({
      header:"your Protein its over for Dinner",
      buttons:[{ text:"okay"}]
      
    });
    let load2 = this.alertCtrl.create({
      header:"your Fats its over for Dinner",
      buttons:[{ text:"okay"}]
      
    });
    let load3 = this.alertCtrl.create({
      header:"your Vitamins its over for Dinner",
      buttons:[{ text:"okay"}]
      
    });
    let load4 = this.alertCtrl.create({
      header:"your Fibre its over for Dinner",
      buttons:[{ text:"okay"}]
      
    });
    let load5 = this.alertCtrl.create({
      header:"your Sugar its over for Dinner",
      buttons:[{ text:"okay"}]
      
    });

    if(this.kari=="p1"){
      if(this.bp > 50 ){
        (await load1).present();
      }
      if(this.bf > 50 ){
        (await load2).present();
      }
      if(this.bv > 800){
        (await load3).present();
      }
      if(this.bfb > 150 ){
        (await load4).present();
      }
      if(this.bs > 30 ){
        (await load5).present();
      }
  
    }
    else if(this.kari=="p2"){
      if(this.bp > 70 ){
        (await load1).present();
      }
      if(this.bf > 50 ){
        (await load2).present();
      }
      if(this.bv > 800){
        (await load3).present();
      }
      if(this.bfb > 100 ){
        (await load4).present();
      }
      if(this.bs > 30 ){
        (await load5).present();
      }
  
    }
    else if(this.kari=="p3"){
      if(this.bp > 70 ){
        (await load1).present();
      }
      if(this.bf > 30 ){
        (await load2).present();
      }
      if(this.bv > 100){
        (await load3).present();
      }
      if(this.bfb > 100 ){
        (await load4).present();
      }
      if(this.bs > 10 ){
        (await load5).present();
      }
  
    }
    
 }
//water breakfeast
//
///
///
//
///
ws3:string = ""
 async cal6(){
  this.fp1 = 0
  this.fw1 = 0
  this.ff1= 0
  this.fv1 = 0
  this.ffb1 = 0
  this.fss1 = 0

  this.fp2 = 0
 this.fw2 = 0
 this.ff2= 0
 this.fv2 = 0
 this.ffb2 = 0
 this.fss2 =0

 this.fp3 = 0
   this.fw3 = 0
   this.ff3 = 0
   this.fv3 = 0
   this.ffb3 = 0
   this.fss3 =0

   this.fp4 = 0
     this.fw4 = 0
     this.ff4 = 0
     this.fv4 = 0
     this.ffb4 = 0
     this.fss4 =0

     this.fp5 = 0
       this.fw5 = 0
       this.ff5 = 0
       this.fv5 = 0
       this.ffb5 = 0
       this.fss5 =0
  let alert1 = this.alertCtrl.create({
    header:"Food not found",
    subHeader:"sorry",
    buttons:[{ text:"okay"}]
   
  });
  if (this.ws3=="sirap") {
    this.fp1 = 5
     this.fw1 = 150
     this.ff1= 10
     this.fv1 = 10
     this.ffb1 = 10
     this.fss1= 10

     this.fp2 = 0
     this.fw2 = 0
     this.ff2= 0
     this.fv2 = 0
     this.ffb2 = 0
     this.fss2 = 0
 
     this.fp3 = 0
       this.fw3 = 0
       this.ff3 = 0
       this.fv3 = 0
       this.ffb3 = 0
       this.fss3 = 0
 
       this.fp4 = 0
         this.fw4 = 0
         this.ff4 = 0
         this.fv4 = 0
         this.ffb4 = 0
         this.fss4 = 0
         
         this.fp5 = 0
           this.fw5 = 0
           this.ff5 = 0
           this.fv5 = 0
           this.ffb5 = 0
           this.fss5 = 0
   }
   else if (this.ws3=="milo") {
    this.fp2 = 10
    this.fw2 = 150
    this.ff2= 7
    this.fv2 = 10
    this.ffb2 = 10
    this.fss2 = 10

    this.fp1 = 0
     this.fw1 = 0
     this.ff1= 0
     this.fv1 = 0
     this.ffb1 = 0
     this.fss1 = 0

    this.fp3 = 0
      this.fw3 = 0
      this.ff3 = 0
      this.fv3 = 0
      this.ffb3 = 0
      this.fss3 = 0

      this.fp4 = 0
        this.fw4 = 0
        this.ff4 = 0
        this.fv4 = 0
        this.ffb4 = 0
        this.fss4 = 0

        this.fp5 = 0
          this.fw5 = 0
          this.ff5 = 0
          this.fv5 = 0
          this.ffb5 = 0
          this.fss5 = 0
     }else if (this.ws3=="mineral") {
      this.fp3 = 0
      this.fw3 = 150
      this.ff3 = 0
      this.fv3 = 20
      this.ffb3 = 20
      this.fss3 = 0

      this.fp1 = 0
      this.fw1 = 0
      this.ff1= 0
      this.fv1 = 0
      this.ffb1 = 0
      this.fss1 = 0

     this.fp2 = 0
       this.fw2 = 0
       this.ff2 = 0
       this.fv2 = 0
       this.ffb2 = 0
       this.fss2 = 0
 
       this.fp4 = 0
         this.fw4 = 0
         this.ff4 = 0
         this.fv4 = 0
         this.ffb4 = 0
         this.fss4 = 0
 
         this.fp5 = 0
           this.fw5 = 0
           this.ff5 = 0
           this.fv5 = 0
           this.ffb5 = 0
           this.fss5 = 0
       }else if (this.ws3 =="orange juice") {
        this.fp4 = 5
        this.fw4 = 150
        this.ff4 = 10
        this.fv4 = 20
        this.ffb4 = 10
        this.fss4 = 10

        this.fp1 = 0
        this.fw1 = 0
        this.ff1= 0
        this.fv1 = 0
        this.ffb1 = 0
        this.fss1 = 0
   
       this.fp2 = 0
         this.fw2 = 0
         this.ff2 = 0
         this.fv2 = 0
         this.ffb2 = 0
         this.fss2 = 0
   
         this.fp3 = 0
           this.fw3 = 0
           this.ff3 = 0
           this.fv3 = 0
           this.ffb3 = 0
           this.fss3 = 0
   
           this.fp5 = 0
             this.fw5 = 0
             this.ff5 = 0
             this.fv5 = 0
             this.ffb5 = 0
             this.fss5 = 0
         }
         else if (this.ws3 =="apple juice") {
          this.fp5 = 20
          this.fw5 = 150
          this.ff5 = 0
          this.fv5 = 10
          this.ffb5 = 20
          this.fss5 = 20

          this.fp1 = 0
          this.fw1 = 0
          this.ff1= 0
          this.fv1 = 0
          this.ffb1 = 0
          this.fss1 = 0
     
         this.fp2 = 0
           this.fw2 = 0
           this.ff2 = 0
           this.fv2 = 0
           this.ffb2 = 0
           this.fss2 = 0
     
           this.fp3 = 0
             this.fw3 = 0
             this.ff3 = 0
             this.fv3 = 0
             this.ffb3 = 0
             this.fss3 = 0
     
             this.fp4 = 0
               this.fw4 = 0
               this.ff4 = 0
               this.ff4 = 0
               this.ffb4 = 0
               this.fss4 = 0
           }else{
      (await alert1).present();
      console.log("water not found")
     }

    this.bp += this.fp1+this.fp2+this.fp3+this.fp4+this.fp5
    this.bw += this.fw1+this.fw2+this.fw3+this.fw4+this.fw5
    this.bf += this.ff1+this.ff2+this.ff3+this.ff4+this.ff5
    this.bv += this.ff1+this.ff2+this.ff3+this.ff4+this.ff5
    this.bfb += this.ffb1+this.ffb2+this.ffb3+this.ffb4+this.ffb5
    this.bs +=  this.fss1+this.fss2+this.fss3+this.fss4+this.fss5
    let load1 = this.alertCtrl.create({
      header:"your Protein its over for Dinner",
      buttons:[{ text:"okay"}]
      
    });
    let load2 = this.alertCtrl.create({
      header:"your Fats its over for Dinner",
      buttons:[{ text:"okay"}]
      
    });
    let load3 = this.alertCtrl.create({
      header:"your Vitamins its over for Dinner",
      buttons:[{ text:"okay"}]
      
    });
    let load4 = this.alertCtrl.create({
      header:"your Fibre its over for Dinner",
      buttons:[{ text:"okay"}]
      
    });
    let load5 = this.alertCtrl.create({
      header:"your Sugar its over for Dinner",
      buttons:[{ text:"okay"}]
      
    });
    if(this.kari=="p1"){
      if(this.bp > 50 ){
        (await load1).present();
      }
      if(this.bf > 50 ){
        (await load2).present();
      }
      if(this.bv > 800){
        (await load3).present();
      }
      if(this.bfb > 150 ){
        (await load4).present();
      }
      if(this.bs > 30 ){
        (await load5).present();
      }
  
    }
    else if(this.kari=="p2"){
      if(this.bp > 70 ){
        (await load1).present();
      }
      if(this.bf > 50 ){
        (await load2).present();
      }
      if(this.bv > 800){
        (await load3).present();
      }
      if(this.bfb > 100 ){
        (await load4).present();
      }
      if(this.bs > 30 ){
        (await load5).present();
      }
  
    }
    else if(this.kari=="p3"){
      if(this.bp > 70 ){
        (await load1).present();
      }
      if(this.bf > 30 ){
        (await load2).present();
      }
      if(this.bv > 100){
        (await load3).present();
      }
      if(this.bfb > 100 ){
        (await load4).present();
      }
      if(this.bs > 10 ){
        (await load5).present();
      }
  
    }
 }
 myDate: String = new Date().toISOString();
 async save(){
  
 
  let load12 = this.alertCtrl.create({
    header:"SORRY DATABASE PROBLEM",
    buttons:[{ text:"OKAY"}]
   
  });
  let load13 = this.alertCtrl.create({
    header:"YOUR DATA HAVE BEEN SAVE IN DATABASE",
    buttons:[{ text:"OKAY"}]
   
  });
  try{


    this.firestore.collection('users/').doc(`${this.users.getUID()}/`).collection('dailynut/').doc(`${this.myDate}`).set({
      Date: this.myDate,
      Protein: this.bp,
      Water: this.bw,
      Fat: this.bf,
      Vitamins: this.bv,
      Fibre: this.bfb,
      Sugar: this.bs      
    });
  
    (await load13).present();
  }catch(error)
  {
    (await load12).present();
    console.log("HI")
  }
  this.bp = 0
  this.bw  = 0
  this.bf  = 0
  this.bv  = 0
  this.bfb = 0
  this.bs  = 0
 }

}
