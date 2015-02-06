'use strict';

describe('ProvisionService', function() {
  var provisionService, $httpBackend;

  beforeEach(module('diilikoneFront'));

  beforeEach(inject(function (_ProvisionService_) {
    provisionService = _ProvisionService_;
    console.log(provisionService);
  }));

  beforeEach(inject(function (_$httpBackend_) {
    $httpBackend = _$httpBackend_;
    console.log($httpBackend);
    $httpBackend.when('GET', '/provision').respond(200, {provision: 9});
  }));

  describe('getProvision', function() {
    it('it should call correct url', function() {
      $httpBackend.expectGET('/provision');
      var asd = provisionService.getProvision({});
      console.log(asd);
      $httpBackend.flush();
      expect(asd.$$state.value.data.provision).toBe(9);
    })
  });

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
  });
})
