(function() {
  'use strict';

  angular
    .module('app.admin')
    .controller('AdminController', AdminController);

  AdminController.$inject = ['logger'];
  /* @ngInject */
  function AdminController(logger) {
    var vm = this;
    vm.title = 'Tab 2';

    vm.onSubmit = onSubmit;
    vm.textValue = "";

    activate();

    function activate() {
      logger.info('Activated Tab 2 View');
    }

    function onSubmit() {
      alert("hello " + vm.textValue);
    }
  }
})();
