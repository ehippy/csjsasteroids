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
