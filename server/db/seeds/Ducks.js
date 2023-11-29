export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('Ducks').del()
  await knex('Ducks').insert([
    {
      id: 1,
      name: 'duck 1',
      image:
        'https://cdn.discordapp.com/attachments/1157146433393274950/1179242186680827975/jojo_duck.png?ex=657911de&is=65669cde&hm=bb130dede9326515e54bf4c5e71ed9ffe28d1ebb3bbf2265e7b53efec87f5bd9&',
    },
    {
      id: 2,
      name: 'duck 2',
      image:
        'https://cdn.discordapp.com/attachments/1179153443324174366/1179235491514683392/1000_F_581915502_pVvoUFLxvjwJbLE1URqx7IRecqnkY8oB.png?ex=65790ba2&is=656696a2&hm=ce1fe1c99f3537a74bb23e8be66b40669b619b74b3ee4e2c6b91ea98f913e1c3&',
    },
    {
      id: 3,
      name: 'duck 3',
      image:
        'https://cdn.discordapp.com/attachments/1179153443324174366/1179236212578467891/image.png?ex=65790c4e&is=6566974e&hm=2d41fbc6f3e6ebb225d6c9fe9b734686f881910c3568f893067bf6cb4d78e6b6&',
    },
    { id: 4, name: 'duck 4', image: '/images/pixel-rubber-duck-bubbles.png' },
    { id: 5, name: 'duck 4', image: '/images/flamingo.png' },
    { id: 6, name: 'duck 4', image: '/images/little-duck.png' },
    { id: 7, name: 'duck 4', image: '/images/pixel-mallard.png' },
  ])
}
