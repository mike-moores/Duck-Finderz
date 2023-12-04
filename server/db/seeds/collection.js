export async function seed(knex) {
    // Deletes ALL existing entries
  await knex('Collection').del()
  await knex('Collection').insert([
    {
      id: 1,
      duck_id: 1,
      username: 'DuckHunter',
      times_collected: 0,
    },
    {
      id: 2,
      duck_id: 2,
      username: 'DuckHunter',
      times_collected: 0,
    },
    {
      id: 3,
      duck_id: 3,
      username: 'DuckHunter',
      times_collected: 0,
    },
    {
      id: 4,
      duck_id: 4,
      username: 'DuckHunter',
      times_collected: 0,
    },
    {
      id: 5,
      duck_id: 5,
      username: 'DuckHunter',
      times_collected: 0,
    },
    {
      id: 6,
      duck_id: 6,
      username: 'DuckHunter',
      times_collected: 0,
    },
    {
      id: 7,
      duck_id: 7,
      username: 'DuckHunter',
      times_collected: 0,
    },
    {
      id: 8,
      duck_id: 8,
      username: 'DuckHunter',
      times_collected: 0,
    },
    {
      id: 9,
      duck_id: 9,
      username: 'DuckHunter',
      times_collected: 0,
    },
    {
      id: 10,
      duck_id: 10,
      username: 'DuckHunter',
      times_collected: 0,
    },
    {
      id: 11,
      duck_id: 11,
      username: 'DuckHunter',
      times_collected: 0,
    },
    {
      id: 12,
      duck_id: 12,
      username: 'DuckHunter',
      times_collected: 0,
    },
    {
      id: 13,
      duck_id: 13,
      username: 'DuckHunter',
      times_collected: 0,
    },
    {
      id: 14,
      duck_id: 14,
      username: 'DuckHunter',
      times_collected: 0,
    },
  ])
}
