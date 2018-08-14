/* import path from 'path'
import string from 'lodash/string' */

// Core Styles
import './app.scss';

// Core Angular
import angular from 'angular';
import $ from "jquery";
global.$ = global.jQuery = $;

// Controllers
import HomeController from "./controllers/home.controller"
import CountryController from "./controllers/country.controller"

//Components
import * as textEditor from './components/text-editor/text-editor';
import * as editorTitle from './components/editor-title/editor-title'



// These all export the module name
import ngRouteModuleName from 'angular-ui-router';
import ngSanitizeModuleName from 'angular-sanitize';


// Internal Services
import Articles from 'services/Articles';
import TextEditor from 'services/TextEditor';

// Config, routes
import Router from './app.route';


const dependencies = [
  /*ngInject*/
  ngRouteModuleName,
  ngSanitizeModuleName
];



angular.module('myApp', dependencies)
  .service('Articles', Articles)
  .service('TextEditor', TextEditor)
  .controller('HomeController', HomeController)
  .controller('CountryController', CountryController)
  .component('textEditor', textEditor.textEditorComponent)
  .component('editorTitle', editorTitle.editorTitleComponent)
  .config(Router)