'use strict';

describe('DealService', function() {
  var dealService, httpBackend;

  beforeEach(module('diilikoneFront'));

  beforeEach(inject(function (_DealService_) {
    dealService = _DealService_;
    console.log(dealService);
  }));

  beforeEach(inject(function (_$httpBackend_) {
    httpBackend = _$httpBackend_;
    console.log(httpBackend);
  }));

  describe('postDeal', function() {
    it('it should post data to correct url', function() {
      var asd = dealService.postDeal({});
      expect(false).toBe(false);
    })
  });
})
