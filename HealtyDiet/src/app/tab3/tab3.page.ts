import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoadingController, ToastController} from '@ionic/angular';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  posts: any;
  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private users: AuthService,
    private firestore: AngularFirestore
  ) {}
  ngOnInit() {}
  ionViewWillEnter() {
  this.getPosts();
  }
  async getPosts(){
  //show loader
  let loader = await this.loadingCtrl.create({
  message: "Please wait..."
  });
  loader.present();
  try {
    this.firestore.collection('users/').doc(`${this.users.getUID()}/`).collection('dailynut/')
  .snapshotChanges()
  .subscribe(data => {
  this.posts = data.map(e => {
  return {
  id: e.payload.doc.id,
  date: e.payload.doc.data()["Date"]

  };
  });
  loader.dismiss();
  });
 
  } catch(e){
    this.showToast(e);
  }
  }

  async deletePost(id: string){
    //show loader
    let loader = this.loadingCtrl.create({
    message: "Please wait..."
    });
    (await loader).present();
    await this.firestore.collection("users/")
    .doc(`${this.users.getUID()}/`)
    .collection('dailynut/')
    .doc(id)
    .delete();
    //dismiss loader
    (await loader).dismiss();
    }

  showToast (message:string){
    this.toastCtrl.create({
    message: message,
    duration: 3000
    }).then(toastData => toastData.present());
    }
}
