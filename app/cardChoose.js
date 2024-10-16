//import object from './database.json'
/*let object;
fetch('database.json')
  .then(response => response.json())
  .then(data => {
    object=data;
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });*/

export function chooseCard(){
    if (object.scheduledTime == 0) {
        div.append(prompt);
     }
}

export function difficultyLevel(level, questionResult){
    if (questionResult==false){
        level = 5;
    }
    if (questionResult==true){
        level = level-1;
        if (level=0){
            level=1;
        }
    }
}

export function scheduleDrop(level){
    if (object.scheduledTime != 0) {
        object.scheduledTime=object.scheduledTime-1;
  }
}

export function scheduleSet(level){
    if (level = 1) {
        object.scheduledTime = 16;
    }
    if (level = 2) {
        object.scheduledTime = 10;
    }
    if (level = 3) {
        object.scheduledTime = 5;
    }
    if (level = 4) {
        object.scheduledTime = 2;
    }
    if (level = 5) {
        object.scheduledTime = 1;
    }
}