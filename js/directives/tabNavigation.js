(function() {

  angular.module('filmVizApp')
    .directive('tabNavigation', function() {
      return {
        restrict: 'E',
        transclude: true,
        scope: {
          items: '=',
          isDeletable: '=deletable'
        },
        templateUrl: 'js/directives/templates/tabNavigation.html',
        link: function(scope, element, attributes) {

          scope.activeTab = 0;

          scope.analysis = {};

          scope.selectTab = function(setTab) {
            scope.activeTab = setTab;
            project.selectedAnalysis = setTab;
          };

          scope.isSelected = function(checkTab) {
            return scope.activeTab === checkTab;
          };

          scope.remove = function(setTab) {
            scope.activeTab = setTab;
            var r = confirm('Delete analysis???');
            if (r === true) {
              project.analysis.splice(scope.activeTab, 1);
              scope.activeTab = project.analysis.length - 1;
            }
          };

          scope.addAnalysis = function() {
            scope.analysis.name = prompt('Please enter analysis name', 'Metadata');
            if (name != null) {
              if (!project.analysis.contains(scope.analysis.name)) {
                scope.analysis.isDone = false;
                scope.analysis.tags = [];
                scope.analysis.data = [];
                project.analysis.push(this.analysis);
                scope.activeTab = project.analysis.length - 1;
                scope.analysis = {};
              }
            }
          };
        }
      };
    });
}());
