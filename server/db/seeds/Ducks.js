export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('Ducks').del()
  await knex('Ducks').insert([
    { id: 1, name: 'duck 1', image: 'jojo_duck.png' },
    { id: 2, name: 'duck 2', image: 'duck.png' },
    { id: 3, name: 'duck 3', image: 'duck.png' },
  ]);
}
