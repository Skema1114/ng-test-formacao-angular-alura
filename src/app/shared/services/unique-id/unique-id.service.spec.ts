import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let uniqueIdService: UniqueIdService;

  beforeEach(() => {
    uniqueIdService = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name}
   should generate id when called with prefix`, () => {
    const id = uniqueIdService.generatedUniqueIdWithPrefix('app');

    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name}
   should not generate duplicate IDs when called multiple times`, () => {
    const ids = new Set();

    for (let i = 0; i < 50; i++) {
      ids.add(uniqueIdService.generatedUniqueIdWithPrefix('app'));
    }

    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
   should return the number of generatedIds when called`, () => {
    uniqueIdService.generatedUniqueIdWithPrefix('app');
    uniqueIdService.generatedUniqueIdWithPrefix('app');

    expect(uniqueIdService.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name}
   should throw when called with empty`, () => {
    const emptyValues = ['', '0', '1'];

    emptyValues.forEach((values) => {
      expect(() => uniqueIdService.generatedUniqueIdWithPrefix(values))
        .withContext(`Empty values: ${values}`)
        .toThrow();
    });
  });
});
