export default class textEditorController {
  constructor(
		$scope,
		$compile
  ) {
		'ngInject'
		this.$scope = $scope
		this.$compile = $compile
  }

	triggerAction(action) {
		let elmt = $('.text-editor_active-action')
		let tag = `editor-${action.toLowerCase()}`
		elmt.append(`<editor-${action.toLowerCase()}></editor-${action.toLowerCase()}>`)
		this.$compile($(tag))(this.$scope)
  }

}
export const textEditorComponent = {
	templateUrl: 'components/text-editor.html',
	controller: textEditorController,
	controllerAs: 'vm',
	bindings: {
		actions: '<'
	}
}