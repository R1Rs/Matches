let heros = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];

export default function healthSort(heros) {
  heros.sort((a, b) => {
    if (b.health > a.health) {
    return 1;
    }
    else if (b.health < a.health) {
    return -1;
    }
    return 0;
    })
    return heros;
}

