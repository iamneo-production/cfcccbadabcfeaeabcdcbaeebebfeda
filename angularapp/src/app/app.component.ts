import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  caseA: boolean=false;
  title = 'CaloriTracker';
  bool: boolean=true;
  num:number=1;
  display(){
    if (this.num==1){
      this.bool=false;
      this.num=0;
    }
    else{
      this.bool=true;
      this.num=1;
    }
  }
 calorie:string="";
 name:string="";
 image:string="";
 count:string="";
 cal:string="";
 data:string[][]=[["Apple","50","https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg","1"],["Orange","100","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNdQ6Byq31hMiZENB-x40xPYQ3o5bl66UecQ&usqp=CAU","1"]];
 append(name:string,calorie:string,image:string){
      this.calorie=calorie;
      this.name=name;
      this.image=image;
      this.count="1";
      this.data.push([this.name,this.calorie,this.image,this.count]);
 }
 additems(num:string,food:string){
 console.log(num);
 console.log(food);
 for(var i=0;i<this.data.length;i++){
  if (this.data[i][0]==food){
    this.data[i][3]=(Number(num)+Number(this.data[i][3])).toString();
    break;
  }
 }
  
 }
 totalcalorie(){
var tot=0;
 for (var i=0;i<this.data.length;i++){
  tot=Number(tot)+Number(this.data[i][1])*Number(this.data[i][3]);
 }
 this.cal= tot.toString();
 }
 onSubmit(){
  
}
 
}