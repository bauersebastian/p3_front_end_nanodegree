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
    this.speed = speed
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //Define the speed
    this.x = this.x + (this.speed * dt);
    //Make sure the enemy is reset once it left the screen
    if (this.x > 505) {
        this.x = 0;
    }
    //Reset the player once it collided with the enemy
    //object1.x < object2.x + object2.width  && object1.x + object1.width  > object2.x &&
		//object1.y < object2.y + object2.height && object1.y + object1.height > object2.y
    else {
        if (this.y === player.y) {
            if (this.x === player.x {
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
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(dt) {
    if (this.y === -25) {
        this.reset();
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.reset = function() {
    this.y = 375;
    this.x = 200;
};

Player.prototype.handleInput = function(key) {
    switch (key) {
        case 'left':
            if (this.x >= 100) {
                this.x = this.x - 100;
                break;
            }
            else {
                break;
            }

        case 'right':
            if (this.x < 400) {
                this.x = this.x + 100;
                break;
            }
            else {
                break;
            }

        case 'up':
            if (this.y > 0) {
                this.y = this.y - 80;
                break;
            }
            else {
                break;
            }
        case 'down':
            if (this.y < 375) {
                this.y = this.y + 80;
                break;
            }
            else {
                break;
            }
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];

var enemy1 = new Enemy(-100,55,20);
var enemy2 = new Enemy(0,135,40);
var enemy3 = new Enemy(-5,215,20);
var enemy4 = new Enemy(-100,55.40);
var enemy5 = new Enemy(-50,135,20);
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
