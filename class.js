"use strict";
{
  class User {
    name;
    score;
    
    constructor(name, score) {
      this.name = name;
      this.score = score;
    }

    getUserSrting() {
      return `${this.name} ${this.score}`;
    }
  }

  const user1 = new User("Taro", 70);
  const user2 = new User("Jiro", 80);

  console.log(user1.getUserSrting());
  console.log(user2.getUserSrting());
}
