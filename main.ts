let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 8 8 8 8 8 8 8 3 . . . . . 
    . . . . 3 . 8 8 8 8 8 3 . . . . 
    . . . 3 8 8 8 8 8 . 3 3 . . . . 
    . . . 3 . . . 8 8 3 3 3 . . . . 
    . . . . 3 . . 8 8 8 8 3 . . . . 
    . . . . . 3 3 3 3 3 8 3 . . . . 
    . . . . . . . 3 8 8 . 3 . . . . 
    . . . . . . 3 3 8 3 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(82, 53)
mySprite.setBounceOnWall(true)
mySprite.setVelocity(50, 50)
