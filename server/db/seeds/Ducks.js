export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('Ducks').del()
  await knex('Ducks').insert([
    {
      id: 1,
      name: 'Gym Duck',
      image: '/images/gym-duck.png',
      rarity: 3,
    },
    {
      id: 2,
      name: 'Bow Duck',
      image: '/images/bow-duck.png',
      rarity: 2,
    },
    {
      id: 3,
      name: 'Default Duck',
      image: '/images/default-duck.png',
      rarity: 1,
    },
    {
      id: 4,
      name: 'Fez Duck',
      image: '/images/fez-duck.png',
      rarity: 3,
    },
    { id: 5, name: 'Golden Duck', image: '/images/golden-duck.png', rarity: 3 },
    { id: 6, name: 'Green Duck', image: '/images/green-duck.png', rarity: 1 },
    { id: 7, name: 'Red Duck', image: '/images/red-duck.png', rarity: 1 },
    { id: 8, name: 'Knife Duck', image: '/images/knife-duck.png', rarity: 3 },
    {
      id: 9,
      name: 'JoJo Duck',
      image: '/images/jojo_duck-removebg-preview.png',
      rarity: 2,
    },
    {
      id: 10,
      name: 'Rubber Duck',
      image: '/images/rubber-duck.png',
      rarity: 2,
    },
    {
      id: 11,
      name: 'Zebra Duck',
      image: '/images/zebra-duck.png',
      rarity: 3,
    },
    {
      id: 12,
      name: 'Mike Duck',
      image: '/images/mike-duck.png',
      rarity: 2,
    },
  ])
}
