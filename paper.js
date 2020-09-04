class Paper{
    constructor(x, y, radius){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.Body = Matter.Bodies.circle(x, y, radius, options)
        this.radius = radius
        Matter.World.add(world, this.Body)
    }
    display(){
        ellipseMode(RADIUS)
        ellipse(this.Body.position.x, this.Body.position.y, this.radius, this.radius)
    }
}