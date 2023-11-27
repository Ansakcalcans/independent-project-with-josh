let Tuxy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 5 . . . . . . . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . 5 . 5 5 5 5 5 5 5 . . . . . 
    . . . 5 5 5 5 5 5 f 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 3 3 . . . 
    . . 5 5 5 5 5 5 5 5 5 3 3 . . . 
    . . . f f f f f f 1 f f . . . . 
    . . . f f f f f f 1 f f . . . . 
    . . . . f f f f f f f . . . . . 
    . 5 . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Tuxy, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
