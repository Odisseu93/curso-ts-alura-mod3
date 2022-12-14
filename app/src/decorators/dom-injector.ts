export function domInjector(seletor: string) {
  return function(target: any, propertyKey: string) {

      console.info('modificando protype', target.constructor.name,
      '\ne adicionando getter para a propriedade', propertyKey);
      let elemento: HTMLElement;
      const getter = function() {
        if(!elemento){
            elemento = <HTMLElement>document.querySelector(seletor);
            console.info('buscando elemento do DOM como seletor\n',seletor, 'para injetar em', propertyKey);
        }
        
          return elemento;
      }


      Object.defineProperty(
        target,
        propertyKey, 
        { get: getter }
      );

  }
}