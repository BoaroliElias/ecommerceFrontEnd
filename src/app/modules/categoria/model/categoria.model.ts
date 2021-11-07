// interface que contem atributos do objeto - serve para tipar 
// semelhante ao model no Java
interface ICategoria {
    id: number;
    descricao: string;
    status?: string;
}

export interface ICadastroAtualizacaoCategoria {
    descricao: string;
}