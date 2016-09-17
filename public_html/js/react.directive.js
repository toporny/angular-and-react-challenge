(function() {
  var myReactDirective = React.createClass({
    propTypes: {
      tablica: React.PropTypes.array.isRequired
    },
    render: function() {
      var tabs = [];
      for (var i = 0; i < this.props.tablica.length; i++) {
        var tab = React.DOM.a({
          key: i + 'a',
          className: 'repo_link',
          href: "#"
        }, this.props.tablica[i].name);
        tabs.push(React.DOM.div({
          key: i
        }, tab, ' ', this.props.tablica[i].description));
      }
      return React.DOM.div({
        className: "list"
      }, tabs);
    }
  });

  angular.module('app').value("myReactDirective", myReactDirective);
  
  angular.module('app').directive('myReactDirective', function(reactDirective) {
    return reactDirective(myReactDirective);
  });

})();