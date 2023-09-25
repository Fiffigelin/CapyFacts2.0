export interface Capy {
  id: number;
  image: string;
  fact: string;
}

export const cards: Capy[] = [
  {
    id: 1,
    image: "https://api.capy.lol/v1/capybara/3",
    fact: "Capybaras are semi-aquatic animals, spending a lot of their time in water.",
  },
  {
    id: 2,
    image: "https://api.capy.lol/v1/capybara/4",
    fact: "They are excellent swimmers and can stay underwater for up to five minutes at a time.",
  },
  {
    id: 3,
    image: "https://api.capy.lol/v1/capybara/7",
    fact: "Capybaras are native to South America and can be found in Panama, Venezuela, Colombia, Argentina, and Brazil.",
  },
  {
    id: 4,
    image: "https://api.capy.lol/v1/capybara/8",
    fact: "They can weigh up to 140 pounds, making them the world's largest rodents.",
  },
  {
    id: 5,
    image: "https://api.capy.lol/v1/capybara/9",
    fact: "Despite their hefty size, capybaras are quick and can reach speeds up to 22 mph.",
  },
];
