class Link {
    constuctor(bodyA, bodyB) {
        var lastLink = bodyA.body.bodies.length - 2;
        this.link - Constraint.create({
            boydA: bodyA.body.bodies[lastlink],
            pointA: {x:0, y:0},
            bodyB: bodyB,body,
            pointB: {x:0,y:0},
            length: 10,
            stiffness: 0.8
        });

        World.add(world, this.link)
    }
}