export interface Word {
  id: string;
  word: string;
  emoji: string;
  description: string;
  image?: string;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  words: Word[];
}