const char1 = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const char2 = {
  name: 'Демон',
  type: 'Daemon',
  health: 40,
  level: 5,
  attack: 60,
  defence: 5,
};

const char3 = {
  name: 'Маг',
  type: 'Magician',
  health: 80,
  level: 3,
  attack: 65,
  defence: 11,
};

const person = [char1, char2, char3];

class Team {
  constructor() {
    this.person = person;
  }

  * [Symbol.iterator]() {
    for (const row of this.person) {
      yield row;
    }
  }
}

const obj = new Team();
for (const row of obj) {
  console.log(row);
}
