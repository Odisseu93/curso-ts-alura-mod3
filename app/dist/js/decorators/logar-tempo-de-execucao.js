export function logarTempoDeExecucao() {
    return function (target, propertykey, descriptor) {
        const merodoOriginal = descriptor.value;
        descriptor.value = function () {
            const t1 = performance.now();
            const t2 = performance.now();
            console.log(`${propertykey}, tempo de execução: ${(t2 - t1) / 1000} segundos`);
        };
        return descriptor;
    };
}
