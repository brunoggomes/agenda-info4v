export enum TipoContato {
    AMIGO = 'Amigo(a)', FAMILIA = 'Família',
    IFRN = 'IFRN', TRAB = 'Trabalho', OUTRO = 'Outro'
}

export class Contato {
    private nome: string
    private tipo: TipoContato

    constructor(nm: string, tp: TipoContato) {
        this.nome = nm
        this.tipo = tp
    }
}