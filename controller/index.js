var yoUtils = require('yo-utils');
var chalk = require('chalk');


var EndpointGenerator = yoUtils.NamedBase.extend({

  constructor: function() {
    yoUtils.NamedBase.apply(this, arguments);
  },

  /* Init method */
  initializing: function() {
    if (!this.options['skip-message']) {
      console.log(chalk.magenta('Express controllers brought to you by generator-mongoose-component.\n'));
    }

    this.composeWith('express-component:controller', {
      arguments: this.arguments,
      options: this._.defaults({
        'skip-message': true,
        'controller-template': __dirname + '/templates/controller.js'
      }, this.options)
    }, {
      local: require.resolve('generator-express-component/controller')
    })
  }

});

module.exports = EndpointGenerator;
