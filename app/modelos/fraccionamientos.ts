
export interface controladores {
    nombre: any;
    id_controlador: any;
    id_fraccionamiento: any;
    user: any;
    password: any;
    port: any; 
    ip: any;

    };
    
    export class controlador {
        nombre: any;
        id_controlador: any;
        id_fraccionamiento: any;
        user: any;
        password: any;
        port: any;
        ip: any;

        };
        
        export interface fraccionamientos {
            nombre: string,
            direccion: string,
            coordenadas: string,
            id_administrador: number,
            id_tesorero: number,
            id_fraccionamiento: number,
            dia_pago: number
        
            };
            
            export class fraccionamiento {
                nombre: any;
                direccion: any;
                coordenadas: any;
                id_administrador: any;
                id_tesorero: any;
                id_fraccionamiento: any;
                dia_pago: any;
        
                };
                
