export interface TreinamentoAttributes {
  ContentTitle: string;
  ContentDescription: string;
  Content?: ContentProps[];
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  Quiz?: QuizProps[];
  expireDate?: string;
}

export interface TextContent {
  type: string;
  text: string;
}

export interface ParagraphContent {
  type: string;
  children: TextContent[];
}

export interface ContentProps {
  type: string;
  children: TextContent[];
}

export interface TagAttributes {
  TagName: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export interface TagData {
  id: number;
  attributes: TagAttributes;
}

export interface TagProps {
  data: TagData[];
}

export interface ConhecimentoAttributes {
  ContentTitle: string;
  ContentDescription: string;
  Content?: ContentProps[];
  createdAt?: string;
  updatedAt?: string;
  publishedAt: string;
  tags: TagProps;
}

export interface ConhecimentoItem {
  id: number;
  attributes: ConhecimentoAttributes;
}

export interface TreinamentoItem {
  id: number;
  attributes: TreinamentoAttributes;
}

export interface ContentProps {
  type: string;
  children: {
    type: string;
    text: string;
  }[];
  level?: number;
  image?: ImageProps;
}

export interface QuizProps {
  id: number;
  Questao: string;
  Respostas: ContentProps[];
  NumeroResposta: number;
}

export interface ImageProps {
  url: string;
  alt: string;
  caption?: string;
}

export interface ChatProps {
  role: string;
  message: string;
}
