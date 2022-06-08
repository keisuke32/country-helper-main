import * as fromRegion from './region.actions';

describe('loadRegions', () => {
  it('should return an action', () => {
    expect(fromRegion.loadRegions().type).toBe('[Region] Load Regions');
  });
});
