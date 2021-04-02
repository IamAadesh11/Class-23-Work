class box {

constructor (x,y,width,height){

    var option = {
        restitution: 0.8
      
      }

    this.body = Bodies.rectangle(x,y,width,height,option);
  
  this.width = width;
  this.height = height;
    World.add(world,this.body);


}


display (){

var angle = this.body.angle

push();


rotate (angle)

translate (this.body.position.x ,this.body.position.y)
rect ( 0,0,this.width, this.height );

pop();

}





}