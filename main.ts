namespace SpriteKind {
    export const weather = SpriteKind.create()
    export const ui = SpriteKind.create()
}
browserEvents.onWheel(function (dx, dy, dz) {
    if (dy < 0) {
        if (speed > 295) {
            speed = 295
        } else {
            speed += 3
        }
    } else if (dy > 0) {
        if (speed < 0) {
            speed = 0
        } else {
            speed += -3
        }
    }
})
browserEvents.onMouseMove(function (x, y) {
    mousex = x
    mousey = y
})
let currentangle = 0
let angeldiff = 0
let targetanlge = 0
let dg = 0
let cloud: Sprite = null
let mousey = 0
let mousex = 0
let speed = 0
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 240
    export const ARCADE_SCREEN_HEIGHT = 180                                                                     
}
let airplane = sprites.create(assets.image`airplane`, SpriteKind.Player)
airplane.setPosition(120, 90)
airplane.z = 99
let pointer = sprites.create(img`
    ...................
    .ff................
    .f1ff..............
    .f111ff............
    ..f1111ff..........
    ...f11111ff........
    ....f111111ff......
    .....ff111111ff....
    .......f1111111ff..
    ........f11111111f.
    .......f1111111ff..
    .....ff111111ff....
    ....f111111ff......
    ...f11111ff........
    ..f1111ff..........
    .f111ff............
    .f1ff..............
    .ff................
    ...................
    `, SpriteKind.ui)
pointer.z = 100
let actualmouse = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `, SpriteKind.ui)
actualmouse.setFlag(SpriteFlag.Invisible, true)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(airplane)
scene.setBackgroundImage(assets.image`sky`)
game.onUpdateInterval(randint(1000, 1500), function () {
    for (let index = 0; index < randint(0, 3); index++) {
        cloud = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.weather)
        cloud.setStayInScreen(false)
        if (Math.percentChance(25)) {
            cloud.setImage(img`
                ..................................ddddd...................
                ........................dddddddddddddddddd................
                ......................11ddd111dddd111111dddd..............
                ............ddddddddd1111111111dd111111111ddd.............
                ..........1dddddd1ddddd111111111111111111111dd11..........
                ........1111111111111dddd11111111111111111111d111111dd....
                .......1dd1111111111111dd11111111111111111111d111111dddd..
                ..1ddddddddd1111111111111111111111111111111111111111111dd.
                .1111111111111111111111111111111111111dd1111111111111111dd
                .1111111111111111111111111111111111111dd11111111111111111d
                111111111111111111111111111111111111111dd1111111111111111d
                .11111111111111111111111111111111111111dd11111111111111111
                .11111111111bbbbb1111dd1111bbbbbbbbbb11d111111111111111111
                ..1bbb111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11.
                ...bbbbbbbbb.......bb...................bbbbbbbbbbbbbbbb..
                ..........................................................
                ..........................................................
                ..........................................................
                ..........................................................
                ..........................................................
                `)
        } else if (Math.percentChance(25)) {
            cloud.setImage(img`
                .................dd....................
                ..............11ddddd..................
                .............1111111dd.................
                .............11111111d.................
                ............111111111dd1.1ddd..........
                ............111111111dd11ddddddddd.....
                ............111111111dd11111111ddddd...
                ...1dddddddd1111111111d11111111ddddd1..
                ..ddddddddddd1111111111111111111111111.
                .1dd11111111dd1111111111111111111111111
                .dd111111111111111111111111111111111111
                dd1111111111111111111111111111111111111
                dd1111111111111111111111dd1111111111111
                111111111111111111111111dd1111111111111
                1111111111111111111111111dd1111111111b1
                .111111111111111111111111dd11bbb111bbb.
                .111111111111111111111111ddbbbbbbbbbb..
                ..1bb1111111111bbb111111bbb.....11.....
                ...bbbbbbbbbbbbbbbbbbbbbbb.............
                ....1bbbbbbbbbb...1bbbbb1..............
                ....................111................
                `)
        } else if (Math.percentChance(25)) {
            cloud.setImage(img`
                ......................11dddd..............
                ....................11111ddddd............
                ...................111111111ddd..11111....
                ..............ddddd1111111111ddd1111dd11..
                .............ddddddddd11111111dd1111dddd1.
                ............1d111111dd11111111dd1111111dd.
                .....d.....1111111111111111111111111111dd.
                .dddddddddd1111111111111111111111111111dd1
                ddd11111ddddd11111111111111111111111111dd.
                11111111111dd11111111111111111111111111dd.
                11111111111111111111111111111111111111dd1.
                111111111111111111111111dd11111111111dd1..
                111111111111111111111111dd11111111111d11..
                .111111111111111111111ddddd111111111b1....
                ..bbbbbbbbbbbbb111bbbbbbbbbbbbbbbbbbb.....
                ..bbb.......bbbbbbbbbbbb........bbb.......
                `)
        } else {
            cloud.setImage(img`
                ..................1111ddd................
                ................1111111dddd..............
                ................111111111ddd.............
                ...............111111111111dd............
                ........ddddddd111111111111dd............
                ......dddddddddd11111111111dd1...........
                ......dd111111d1111111111111d111.........
                .....dd11111111111111111111111111.ddd....
                ....1dd11111111111111111111111111dddddd..
                ....dd11111111111111111111111111dd111ddd.
                ....1d11111111111111111111111111dd1111dd.
                ..dddd11111111dd11111111111111111111111dd
                .ddd1dd111111dd111111111111111111111111dd
                ddd1111111111dd111111111111111111111111dd
                dd1111111111111111111111111111111111111dd
                d1111111111111111111111111111111111111dd.
                d1111111111111111111111111111111111111dd.
                11111111111111111111111111dd111111111dd..
                11111111111111111111111111dd111111111d1..
                .1111111111111111111111111dd11111111111..
                ..bbbbbbbbbbb1111111111111dd1111111111...
                ..bbbbbbbbbbbbb11111111111ddbbbbbbbbb....
                .............bbbb1111111bbdbbbbbbb.......
                ...............bbbbbbbbbbbb..............
                ..................bbbbb..................
                `)
        }
        cloud.setPosition(randint(0, 240), randint(0, 180))
        cloud.vx = randint(-50, -100)
        cloud.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
forever(function () {
    dg = spriteutils.angleFrom(airplane, actualmouse)
    pointer.setPosition(0 + (airplane.x + 70 * Math.cos(dg)), 0 + (airplane.y + 70 * Math.sin(dg)))
    transformSprites.rotateSprite(pointer, spriteutils.radiansToDegrees(dg))
    targetanlge = spriteutils.radiansToDegrees(dg)
    angeldiff = targetanlge - currentangle
    if (angeldiff < -180) {
        angeldiff += 360
    }
    if (angeldiff > 180) {
        currentangle += -360
    }
    if (angeldiff > 3) {
        currentangle += 2
    } else if (angeldiff < -3) {
        currentangle += -2
    } else {
        currentangle = targetanlge
    }
    transformSprites.rotateSprite(airplane, currentangle)
    spriteutils.setVelocityAtAngle(airplane, spriteutils.degreesToRadians(currentangle), speed)
})
forever(function () {
    actualmouse.setPosition(scene.cameraProperty(CameraProperty.Left) + mousex, scene.cameraProperty(CameraProperty.Top) + mousey)
    scroller.scrollBackgroundWithSpeed(0 - speed, 0)
})
