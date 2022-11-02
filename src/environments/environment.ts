// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

function crearURLAPIBase(path: any){
  return (path);
}

function signInURLBase(path: any){
  return (path);
}
function TodosInURLBase(path: any){
  return (path);
}

function ActualizarURLBase(path: any){
  return (path);
}

function EliminarURLBase(path: any){
  return (path);
}

function urlId(path: any){
  return (path);
}

function urlDocumentoC(path: any){
  return (path);
}

function urlDocumentoCER(path: any){
  return (path);
}


export const URLUsuario={
  urlId: crearURLAPIBase("/usuarios/getUser"),
  urlSave: crearURLAPIBase("/usuarios/registros"),
  urlUpdate: ActualizarURLBase("/usuarios/actualizar"),
  urlDelete: EliminarURLBase("/usuarios/eliminar"),
  urlLogin: signInURLBase(""),
  urlTodos: TodosInURLBase("/usuarios/todos"),
  urlDocumentoC: urlDocumentoC("/usuarios/contrato"),
  urlDocumentoCER: urlDocumentoCER("/usuarios/certificado"),
  
}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
