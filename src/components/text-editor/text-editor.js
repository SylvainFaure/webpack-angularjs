export default class textEditorController {
  constructor(
		$scope,
		$compile,
		TextEditor
  ) {
		'ngInject'
		this.$scope = $scope;
		this.$compile = $compile;
		this.TextEditor = TextEditor;
	}
	

	triggerAction(action) {
		this.TextEditor.isEditingComponent = true
		let elmt = $('.text-editor_active-action')
		elmt.append(`<editor-comp type="${action.toLowerCase()}" actions="['bold', 'italic', 'link', 'asterisk']"></editor-comp>`)
		this.$compile($('editor-comp'))(this.$scope)
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