class quiz {

    constructor() {
      this.input = createInput("question");
      this.button = createButton('Start Quiz');
      this.question = createElement('h2');
      this.title = createElement('h2');
    }
    hide(){
      this.question.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Quiz");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
  2
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.question = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.question.position(displayWidth/2 - 70, displayHeight/4);
      });
  
    }
  }
  