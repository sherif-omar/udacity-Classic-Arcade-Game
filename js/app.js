//var
//xxxxxxxxxxxxxxxxxxxxxx
var score = 0;
var lives = 0;
var level = 0;
//xxxxxxxxxxxxxxxxxxxxxx
// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
   
    this.sprite = 'images/enemy-bug.png';
    //xxxxxxxxxxxxxxxxxxxxxx
    this.x = x;
    this.y = y;
    this.speed = speed;
    //xxxxxxxxxxxxxxxxx
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //xxxxxxxxx
    if(this.x < 505){
         this.x = this.x + (this.speed * dt);
    }else{
        this.x = -150;
    }
    //xxxxxxxxxxxxxxxxxx
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

//xxxxxxxxxxxxxxxxxxxx
var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our players, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
    this.x = 20 + 120 * (Math.floor(Math.random() * 4)); //randomize x position
    this.y = 350;
    this.speed = 100;
}

// Update the players's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x * (dt);
    this.y * (dt);
    // this.speed * (dt);

    // Reset player when it reaches the water
    if (this.y <= 0) {
        player.reset();
        level = level + 1;
        score = score + 100;
        document.getElementById("level").innerHTML = "Level: " + level;
        document.getElementById("score").innerHTML = "Score: " + score;
    }
}


// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Reset the player when it loses life or reaches goals.
Player.prototype.reset = function() {
    this.x = 100;
    this.y = 400;
}

// Player moves to water when colliding with princess
Player.prototype.water = function() {
    this.x = 100;
    this.y = 0;
}

// Player loses life
Player.prototype.lives = function() {
    lives = lives - 1;
    document.getElementById("lives").innerHTML = "Lives left: " + lives;
}

// Draw the Princess

var Princess = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our players, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-princess-girl.png';
    this.x = 20 + 120 * (Math.floor(Math.random() * 4));
    this.y = 100 + 50 * (Math.floor(Math.random() * 4));
}

// Update the princess's position, required method for game
// Parameter: dt, a time delta between ticks
Princess.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x * (dt);
    this.y * (dt);
}

// Reset the princess she collides with the enemies.
Princess.prototype.reset = function() {
    this.x = 20 + 120 * (Math.floor(Math.random() * 4));
    this.y = 100 + 50 * (Math.floor(Math.random() * 4));
}

// Draw the princess on the screen, required method for game
Princess.prototype.render = function() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    // End draw the Princess

// Draw the Gems

var Gems = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our players, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/Gem Orange.png';
    this.x = 20 + 120 * (Math.floor(Math.random() * 4));
    this.y = 100 + 50 * (Math.floor(Math.random() * 4));
}

// Update the gems's position, required method for game
// Parameter: dt, a time delta between ticks
Gems.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x * (dt);
    this.y * (dt);
}

// Draw the gems on the screen, required method for game
Gems.prototype.render = function() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    // End draw Gems

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player();
var princess = new Princess();
var gems = new Gems();

var Darth = new Enemy(-100, 60, 250);
var Vader = new Enemy(-100, 180, 400);
var Joker = new Enemy(-100, 240, 150);
var Specter = new Enemy(-100, 120, 300);
allEnemies = [Darth, Vader, Joker, Specter];
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

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

// This function is for moving the player.  xxxx

Player.prototype.handleInput = function(key) {
    if (key === 'left' && this.x > 0) {
        this.x -= 101;
    } else if (key === 'right' && this.x < 395) {
        this.x += 101;
    } else if (key === 'up' && this.y > 0) {
        this.y -= 83;
    } else if (key === 'down' && this.y < 400) {
        this.y += 83;
    }
}