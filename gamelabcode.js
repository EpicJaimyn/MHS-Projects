var ground = createSprite(130, 398);
ground.setAnimation("ground");
var floor = createSprite(270, 398);
floor.setAnimation("floor");
var sprite = createSprite(214, 200);
var enemy = createSprite(200, 1);
enemy.setAnimation("enemy");
function draw() {
  enemy.velocityY = 3;
  sprite.velocityY = 10;
  sprite.collide(ground);
  sprite.collide(floor);
  background("skyblue");
  fill("yellow");
  ellipse(350, 50, 50, 50);
  sprite.setAnimation("Stick Man Idol");
  if (keyDown("right")) {
  sprite.x = sprite.x + 3;
  sprite.setAnimation("Stick Man Forward");
  }
  if (keyDown("left")) {
      sprite.x = sprite.x - 3;
      sprite.setAnimation("Stick Man Backward");
    }
  if (keyDown("up")) {
      sprite.y = sprite.y - 15;
      sprite.setAnimation("Stick Man Jump");
    }
  if (keyDown("space")) {
      sprite.setAnimation("Stick Man Gun");
      var shot = createSprite(250, 268);
      shot.setAnimation("shot");
      shot.velocityY = -4;
      shot.x = sprite.x;
      shot.x = sprite.x;
      if (shot.isTouching(enemy)) {
        enemy.velocityY = randomNumber(3, 100);
        enemy.x = randomNumber(400, 1);
        enemy.y = randomNumber(10, 1);
      }
    }
  if (enemy.isTouching(sprite)) {
    var death = createSprite(200, 200);
    death.setAnimation("death");
    death.scale = 4;
  }
  if (enemy.isTouching(ground)) {
    var death = createSprite(200, 200);
    death.setAnimation("death");
    death.scale = 4;
  }
  if (enemy.isTouching(floor)) {
    var death = createSprite(200, 200);
    death.setAnimation("death");
    death.scale = 4;
  }
  drawSprites();
  }
