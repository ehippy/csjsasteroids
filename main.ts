controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . 
        . . . 3 a . . . 
        . . . 3 a . . . 
        . . . 3 a 3 . . 
        . . . 3 a 3 . . 
        . . . 3 a 3 . . 
        . . . . a 3 . . 
        . . . . . 3 . . 
        `, mySprite, 0, -100)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.startEffect(effects.disintegrate)
    music.thump.play()
    info.changeScoreBy(1)
    sprite.destroy()
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let baddie: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . f 1 f f . . . . . . 
    . . . . . f 1 1 1 f . . . . . . 
    . . . . . f 1 1 1 f f . . . . . 
    . . . . . f 1 1 1 1 f . . . . . 
    . . . . f 1 1 1 1 1 f . . . . . 
    . . . . f 1 1 1 1 1 f f . . . . 
    . . . f f 1 f f f 1 1 f . . . . 
    . . . f f f f . f f 1 f . . . . 
    . . f f . . . . . f f f f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
effects.starField.startScreenEffect()
mySprite.setStayInScreen(true)
game.onUpdateInterval(2000, function () {
    baddie = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . a a a . . a a a a . . . 
        . . . a a a a a a a a a a a . . 
        . . a a 4 4 4 a a 4 4 4 a a a . 
        . . . a a 5 5 5 a 4 5 5 5 a . . 
        . . . a a a 4 5 a a 5 a a a . . 
        . . a a a a a a a a a a a a . . 
        . . a a a a a a a f a a a a . . 
        . . a a a a f f f f a a a a . . 
        . . . . a a a a a a a a a . . . 
        . . . . a . . . a . . a . . . . 
        . . . . a . . . a a . a . . . . 
        . . . . a a . . . a . . a . . . 
        `, SpriteKind.Enemy)
    baddie.setPosition(randint(10, scene.screenWidth() - 10), 7)
    baddie.setVelocity(0, 50)
})
game.onUpdateInterval(200, function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (value.y > 100) {
            value.destroy()
            info.changeScoreBy(-1)
        }
    }
})
