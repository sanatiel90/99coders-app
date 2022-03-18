import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Content, TDocumentDefinitions } from 'pdfmake/interfaces';

interface ClienteType {
    id: string;
    nome: string;
    email: string;
    fone: string;
}


export default function clientesPDF(clientes: ClienteType[]){
    //aplicando as fontes
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    //cabecalho (colocar sempre a tipagem)
    const headerContent: Content = [
        {
            text: 'Clientes',
            fontSize: 15,            
            alignment: 'center',
            bold: true,            
            margin: [15, 20, 0, 45],  //left top right bottom
            tocItem: true
        }
    ];

    //array contendo os dados do cliente no formato da linha da tabela do PDF
    const dataClientes = clientes.map((cliente) => (        
        [ 
            {text: cliente.id, style: 'tableHeader', fontSize: 9},   
            {text: cliente.nome, style: 'tableHeader', fontSize: 9},   
            {text: cliente.email, style: 'tableHeader', fontSize: 9},   
            {text: cliente.fone, style: 'tableHeader', fontSize: 9},   
        ]
    ));

    //conteudo principal
    const mainContent: Content = [
        {
            table: {
                headerRows: 1, //numero de cabeçalhos da tabela
                widths: ['*', '*', '*', '*'], //numero de colunas, o * indica que elas se adequarão ao tamanho do conteudo
                body: [  //cada array do body vai ser uma linha, e cada obj dentro desse array sera uma coluna
                    
                    [ //linha do cabeçalho
                        {text: 'Código', style: 'tableHeader', fontSize: 10},   
                        {text: 'Nome', style: 'tableHeader', fontSize: 10},   
                        {text: 'E-mail', style: 'tableHeader', fontSize: 10},   
                        {text: 'Telefone', style: 'tableHeader', fontSize: 10},   
                    ],
                     //linhas do conteudos, usando o spread operator pq esta incluindo o array de dataClientes 
                     //dentro do array 'body'
                    ...dataClientes 
                ]
            },
            layout: 'lightHorizontalLines'  //layout para linha apenas abaixo do cabecalho
        }
    ];

    //o rodape pode ser uma funcao que recebe 2 params: currentPage, que é a pag atual 
    //e pageCount que é o total de pags do pdf. A funcao retorna um Content
    function footerContent(currentPage: number, pageCount: number): Content{
        const footer: Content = 
            {
                text: `${currentPage} / ${pageCount}`,
                alignment: 'right',
                fontSize: 9,
                margin: [0, 10, 20, 0] 
            }        

        return footer;
    };

    //obj com as definicoes do pdf
    const docDefinitions: TDocumentDefinitions = {        
        header: headerContent,
        content: mainContent,
        footer: footerContent      
    }

    //cria o pdf
    pdfMake.createPdf(docDefinitions).open();
}