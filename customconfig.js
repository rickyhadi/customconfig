var rootdir = env.rootdir || __dirname;
var appConfig = require('appconfig');
var isUAT = appConfig.IsUAT;
var level = isUAT ? 'UAT':'PROD';
var customConfig = require(rootdir + appConfig.ConfigurationFilePath["Custom"+level]);

module.exports = customConfig;
