interface TreinamentoAttributes {
    ContentTitle: string;
    ContentDescription: string;
    Content: {
        type: string;
        children: {
            type: string;
            text: string;
        }[];
    }[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

interface TreinamentoItem {
    id: number;
    attributes: TreinamentoAttributes;
}