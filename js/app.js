"use strict";

// Enemies our player must avoid
var Enemy = function(x,y, speed) {

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

    //Current x position of the enemy
    this.x = x;
    //Current y position of the enemy
    this.y = y;
    //Used image for the enemy
    this.sprite = 'images/enemy-bug.png';
    //The speed of the enemy
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // Define the speed
    this.x = this.x + (this.speed * dt);
    // Make sure the enemy is reset once it left the screen
    if (this.x > 505) {
        this.x = 0;
    }
    // Reset the player once it collided with the enemy
    else {
        if (this.y < player.y + 15 && this.y + 15 > player.y) {
            if (this.x < player.x + 20 && this.x + 20 > player.x) {
                player.reset();
            }
        }
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x,y) {
    // Current x position of the player
    this.x = x;
    // Current y position of the player
    this.y = y;
    // Image of the player
    this.sprite = 'images/char-boy.png';
};

// Reset the player once it reached the water
Player.prototype.update = function() {
    if (this.y === -40) {
        this.reset();
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Put the player back to the start position
Player.prototype.reset = function() {
    this.y = 375;
    this.x = 200;
};

// Constant values for tile height and width

var TILE_WIDTH = 101,
    TILE_HEIGHT = 83;

// React to the pressed buttons of the user of the game
Player.prototype.handleInput = function(key) {
    switch (key) {
        case 'left':
            if (this.x >= TILE_WIDTH) {
                this.x = this.x - TILE_WIDTH;
                break;
            }
            else {
                break;
            }

        case 'right':
            if (this.x < 400) {
                this.x = this.x + TILE_WIDTH;
                break;
            }
            else {
                break;
            }

        case 'up':
            if (this.y > 0) {
                this.y = this.y - TILE_HEIGHT;
                break;
            }
            else {
                break;
            }
        case 'down':
            if (this.y < 375) {
                this.y = this.y + TILE_HEIGHT;
                break;
            }
            else {
                break;
            }
    }
};

// Now we instantiate the objects
// All enemies are placed in the array of allEnemies
// The player object is placed into player

var allEnemies = [];

var enemy1 = new Enemy(-100,55,80);
var enemy2 = new Enemy(0,135,100);
var enemy3 = new Enemy(-5,215,300);
var enemy4 = new Enemy(-100,55,230);
var enemy5 = new Enemy(-20,135,160);
allEnemies.push(enemy1, enemy2, enemy3, enemy4, enemy5);
var player = new Player(200,375);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
