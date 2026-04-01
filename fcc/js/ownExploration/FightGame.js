const hero = {
  blueTeam: [
       {name: "Fanny", attack: 300, hp: 500, defense: 10},
       {name: "Tigreal", attack: 100, hp: 1000, defense: 20}]
    }


function attack(attacker, defender) {
  console.clear();
  if (attacker.hp > 0) {
    let damage = attacker.attack - defender.defense;
    defender.hp = defender.hp - damage;
    if (defender.hp > 0) {
    console.log(`${attacker.name} dealt ${damage} damage to ${defender.name} `)
    console.log(`${defender.name} hp:${defender.hp}`)
    } else {
      console.log(`${attacker.name} have slained ${defender.name}`)
    }
  } else {
    console.log(`Your Hero is dead`)
  }
}
attack(hero.blueTeam[0], hero.blueTeam[1])

attack(hero.blueTeam[1], hero.blueTeam[0])
attack(hero.blueTeam[1], hero.blueTeam[0])
attack(hero.blueTeam[1], hero.blueTeam[0])
attack(hero.blueTeam[1], hero.blueTeam[0])
attack(hero.blueTeam[1], hero.blueTeam[0])
