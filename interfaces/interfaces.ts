export interface TreinamentoAttributes {
    ContentTitle: string;
    ContentDescription: string;
    Content?: ContentProps[];
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    Quiz?: QuizProps[]
}

export interface TreinamentoItem {
    id: number;
    attributes: TreinamentoAttributes;
}

export interface ContentProps {
    type: string
    children: {
        type: string;
        text: string;
    }[];
    level?: number;
}

export interface QuizProps {
    id: number;
    Questao: string;
    Respostas: ContentProps[];
    NumeroResposta: number;
}

