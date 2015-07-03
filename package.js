// package metadata file for Meteor.js

Package.describe({
  name: 'marmelab:gremlins', // http://atmospherejs.com/marmelab/gremlins
  summary: 'gremlins.js (official): A monkey testing library written in JavaScript, for Node.js and the browser. Use it to check the robustness of web applications by unleashing a horde of undisciplined gremlins. by marmelab',
  version: '0.1.1',
  git: 'https://github.com/marmelab/gremlins.js.git'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@1.0']);
  api.addFiles('gremlins.min.js', 'client');
});
