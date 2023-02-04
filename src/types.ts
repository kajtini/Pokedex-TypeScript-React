type PageData = {
  next: string;
  previous: string;
  results: Array<Pokemon>;
};

type Pokemon = {
  name: string;
  url: string;
};

type PokemonDetailed = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: { other: { dream_world: { front_default: string } } };
  stats: Array<Stat>;
  types: Array<PokemonType>;
};

type PokemonType = {
  slot: number;
  type: { name: string; url: string };
};

type Stat = {
  base_stat: number;
  effort: number;
  stat: { name: string; url: string };
};

type Pagination = {
  currentPageNumber: number;
  allPages: number;
  currentPageUrl: string;
};

export type {
  Pokemon,
  PokemonDetailed,
  PokemonType,
  Stat,
  PageData,
  Pagination,
};
