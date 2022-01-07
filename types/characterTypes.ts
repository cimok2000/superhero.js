export interface ICharacterName {
  response: string;
  results: [
    {
      id: string;
      name: string;
      powerstats: IPowerstats;
      biography: IBiography;
      appearance: IAppearance;
      work: IWork;
      connections: IConnections;
      image: IImage;
    }
  ];
}

export interface ICharacterID {
  response: string;
  id: string;
  name: string;
  powerstats: IPowerstats;
  biography: IBiography;
  appearance: IAppearance;
  work: IWork;
  connections: IConnections;
  image: IImage;
}

interface IPowerstats {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
}

interface IBiography {
  "full-name": string;
  "alter-egos": string;
  aliases: [string];
  "place-of-birth": string;
  "first-appearance": string;
  publisher: string;
  alignment: string;
}

interface IAppearance {
  gender: string;
  race: string;
  height: [string];
  weight: [string];
  "eye-color": string;
  "hair-color": string;
}

interface IWork {
  occupation: string;
  base: string;
}

interface IConnections {
  "group-affiliation": string;
  relatives: string;
}

interface IImage {
  url: string;
}
