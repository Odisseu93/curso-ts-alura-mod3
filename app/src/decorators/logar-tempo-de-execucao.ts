export function logarTempoDeExecucao() {
  return function(
    target: any,
    propertykey: string,
    descriptor: PropertyDescriptor
  ) {
    const merodoOriginal = descriptor.value;
    descriptor.value =  function() {
      const t1 = performance.now();
      // chamar o método original
      const t2 = performance.now();
      console.log(`${propertykey}, tempo de execução: ${(t2 - t1)/1000} segundos`)
    }

    return descriptor;
  }
}