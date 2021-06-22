import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let uniqueIdService: UniqueIdService;
  let nameGeneratedUniqueIdWithPrefix =
    UniqueIdService.prototype.generatedUniqueIdWithPrefix.name;
  let nameGetNumberOfGeneratedUniqueIds =
    UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name;

  beforeEach(() => {
    uniqueIdService = new UniqueIdService();
  });

  it(`#${nameGeneratedUniqueIdWithPrefix} should generate id when called with prefix;`, () => {
    const id = uniqueIdService.generatedUniqueIdWithPrefix('app');

    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${nameGeneratedUniqueIdWithPrefix} should not generate duplicate IDs when called multiple times;`, () => {
    const ids = new Set();

    for (let i = 0; i < 50; i++) {
      ids.add(uniqueIdService.generatedUniqueIdWithPrefix('app'));
    }

    expect(ids.size).toBe(50);
  });

  it(`#${nameGetNumberOfGeneratedUniqueIds} should return the number of generated Ids when called;`, () => {
    uniqueIdService.generatedUniqueIdWithPrefix('app');
    uniqueIdService.generatedUniqueIdWithPrefix('app');

    expect(uniqueIdService.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`#${nameGeneratedUniqueIdWithPrefix} should throw when called with empty;`, () => {
    const emptyValues = ['', '0', '1'];

    emptyValues.forEach((values) => {
      expect(() => uniqueIdService.generatedUniqueIdWithPrefix(values))
        .withContext(`Empty values: ${values}`)
        .toThrow();
    });
  });
});
