class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var rope_options ={
    bodyA:bodyA,
    bodyB:bodyB,
    pointB:{x:this.offsetX,y:this.offsetY}
    } 
    this.chain=Constraint.create(chain_options);
    World.add(world,this.rope);    
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}
