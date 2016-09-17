(function() {

  // this part of code allows to use react component as angular directive

  var myReactDirective = React.createClass({
    propTypes: {
      repotable: React.PropTypes.array.isRequired
    },
    render: function() {
      var tabs = [];
      for (var i = 0; i < this.props.repotable.length; i++) {
        var tab = React.DOM.a({
          key: i + 'a',
          className: 'repo_link',
          href: this.props.repotable[i].html_url
        }, this.props.repotable[i].name);
        tabs.push(React.DOM.div({
          key: i
        }, tab, ' ', this.props.repotable[i].description));
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