import path from 'path'
import string from 'lodash/string'

const controllers = angular.module('myApp.controller', [])

require.context("./", true, /^((?!_.js).)*.js$/).keys().forEach((key) => {
	let basename = path.basename(key,'.js')
  let name = string.upperFirst(string.camelCase(basename));
  //let ctrlPath = `./controllers/${basename}`
	let controller = require(`${key}`).controller
	controllers.controller(name, controller)
});

console.log(controllers.name)

export default controllers.name

