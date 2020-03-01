import healthSort from '../src/index';

test("Testing sort", () => {
  const heros = [
    {name: 'мечник', health: 20},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 120},
    {name: 'свечник', health: 20},
  ]

  const heros2 = [
    {name: 'мечник', health: 20},
    {name: 'маг', health: 100},
  ]

  const received = healthSort(heros);
  const expected = [
    {name: 'лучник', health: 120},
    {name: 'маг', health: 100},
    {name: 'мечник', health: 20},
    {name: 'свечник', health: 20},
  ]

  const received1 = healthSort(heros)[1];
  const expected1 = {name: 'маг', health: 100};

  const received2 = healthSort(heros)[0];
  const expected2 = {name: 'лучник', health: 120};

  const received3 = healthSort(heros)[2].health;
  const expected3 = 20;

  const received4 = healthSort(heros2);
  const expected4 = [
    {name: 'маг', health: 100},
    {name: 'мечник', health: 20},
  ]

  expect(received).toEqual(expected);
  expect(received1).toEqual(expected1);
  expect(received2).toEqual(expected2);
  expect(received3).toEqual(expected3);
  expect(received4).toEqual(expected4);
});
