export type Favorite = {
  id: string;
  image: string;
  fact: string;
};

export type FactResponse = {
  data: {
    fact: string;
  };
  success: boolean;
};

export type ImageResponse = {
  data: {
    alt: string;
    height: number;
    index: number;
    url: string;
    width: number;
  };
  success: boolean;
};
