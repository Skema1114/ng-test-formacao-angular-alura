import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const uniqueIdService = new UniqueIdService();
    const id = uniqueIdService.generatedUniqueIdWithPrefix('app');

    expect(id).toContain('app-');
  });
});
