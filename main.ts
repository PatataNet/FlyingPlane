controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Turbo == 1) {
        Jugador.setVelocity(100, 50)
    } else if (Turbo == 0) {
        Jugador.setVelocity(50, 50)
    }
    Abajo = 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.gameOver(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Abajo == 1) {
        Jugador.setVelocity(100, 50)
    } else if (Arriba == 1) {
        Jugador.setVelocity(100, -50)
    } else {
        Jugador.setVelocity(100, 0)
    }
    Turbo = 1
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Turbo == 1) {
        Jugador.setVelocity(100, -50)
        Abajo = 0
    } else if (Turbo == 0) {
        Jugador.setVelocity(50, -50)
    }
    Arriba = 1
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (Abajo == 1) {
        Jugador.setVelocity(50, 0)
    } else if (Arriba == 1) {
        Jugador.setVelocity(50, 0)
    } else {
        Jugador.setVelocity(50, 0)
    }
    Turbo = 0
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (Turbo == 1) {
        Jugador.setVelocity(100, 0)
    } else if (Turbo == 0) {
        Jugador.setVelocity(50, 0)
    }
    Abajo = 0
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (Turbo == 1) {
        Jugador.setVelocity(100, 0)
    } else if (Turbo == 0) {
        Jugador.setVelocity(50, 0)
    }
    Arriba = 0
})
let Arriba = 0
let Abajo = 0
let Turbo = 0
let Jugador: Sprite = null
Jugador = sprites.create(assets.image`Jugador`, SpriteKind.Player)
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`nivel1`)
scene.cameraFollowSprite(Jugador)
