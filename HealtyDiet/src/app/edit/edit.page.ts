import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { User } from '../models/user.mode';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
  
})
export class EditPage implements OnInit {

  post = {} as User;
  id: any;
  constructor(
  private actRoute: ActivatedRoute,
  private loadingCtrl: LoadingController,
  private firestore: AngularFirestore,
  private toastCtrl: ToastController,
  private users: AuthService,
  private navCtrl: NavController
  ) {
 }
 ngOnInit() {
 this.getPostById(this.id);
 }
 async getPostById(id: string){
 //show loader
 let loader = this.loadingCtrl.create({
 message: "Please wait..."
 });
 (await loader).present();
 
 
 this.firestore
 .doc(`users/${this.users.getUID()}`)
 .valueChanges()
 .subscribe(data => {
 this.post.name = data["name"];
 this.post.email = data["email"];
 this.post.no_tel = data["no_tel"];
 this.post.sick = data["sick"];
 this.post.password = data["password"];
 });
 
 //dismiss loader
 (await loader).dismiss();
 }
 
 async updatePost(post: User){
 if(this.formValidation()) {
 //show loader
 let loader = this.loadingCtrl.create({
 message: "Please wait..."
 });
 (await loader).present();
 
 try{
 
 await this.firestore.doc("users/"+this.users.getUID()).update(post);
 } catch(e){
 this.showToast(e);
 }
 //dismiss loader
 (await loader).dismiss();
 
 //redirect to view post page
 this.navCtrl.navigateRoot("tabs/tab3");
 }
 }
 formValidation(){
 if(!this.post.name){
 this.showToast("Enter name");
 return false;
 }
 if(!this.post.email){
   this.showToast("Enter email");
   return false;
   }
   if(!this.post.no_tel){
   this.showToast("Enter no_tel");
   return false;
   }
   if(!this.post.sick){
   this.showToast("Enter sick");
   return false;
   }
   return true;
   }
   showToast (message:string){
   this.toastCtrl.create({
   message: message,
   duration: 3000
   })
   .then(toastData => toastData.present());
   }
  
}
