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
  location_area_encounters: string;
  abilities: Array<Ability>;
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

type Location = {
  location_area: LocationArea;
};

type LocationArea = {
  name: string;
  url: string;
};

type Ability = {
  ability: { name: string; url: string };
  is_hidden: boolean;
  slot: number;
};

export type {
  Pokemon,
  PokemonDetailed,
  PokemonType,
  Stat,
  PageData,
  Pagination,
  Location,
  Ability,
};
