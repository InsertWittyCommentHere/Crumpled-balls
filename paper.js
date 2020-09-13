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
        this.image = loadImage('crumpled-ball.png')

        Matter.World.add(world, this.Body)
    }
    display(){
        imageMode(CENTER)
        image(this.image, this.Body.position.x + 20, this.Body.position.y + 20, this.radius, this.radius)
    }
}