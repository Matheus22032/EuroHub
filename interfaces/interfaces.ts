interface TreinamentoAttributes {
    ContentTitle: string;
    ContentDescription: string;
    Content?: {
        type: string;
        children: {
            type: string;
            text: string;
        }[];
    }[];
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    Quiz?: {
        id: number;
        questao: string;
        respostas: {
            type: string
            children: {
                type: string;
                text: string;
            }[];
        }[]
        numeroResposta: number;
    }[]
}

interface TreinamentoItem {
    id: number;
    attributes: TreinamentoAttributes;
}

