export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.info('modificando protype', target.constructor.name, '\ne adicionando getter para a propriedade', propertyKey);
        const getter = function () {
            const elemento = document.querySelector(seletor);
            console.info('buscando elemento do DOM como seletor\n', seletor, 'para injetar em', propertyKey);
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
