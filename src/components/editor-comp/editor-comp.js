import { identity } from "../../../node_modules/@uirouter/core";

export default class editorCompController {
  constructor(
		TextEditor
  ) {
		'ngInject'
		this.TextEditor = TextEditor;
		this.init()
		$('.editor-comp_content').on('mouseup', (e) => {
			if (window.getSelection().toString().length) {
				let span = document.createElement('span')
				$(span).attr('id','highlighted-text')
				window.getSelection().getRangeAt(0).surroundContents(span)
				this.setActionsElement(e.clientY, e.clientX)
			}
		})
		
	}

	init() {
		setTimeout(()=> {
			$(`.editor-comp_content`).focus()
		})
	}
	
	getContent(e) {
		let content = e.currentTarget.innerText
		this.content = content;
	}

	addContent() {
		this.TextEditor[this.type] = this.content
		this.destroyComponent()
	}	

	destroyComponent() {
		this.TextEditor.isEditingComponent = false;
		$('editor-comp').remove()
	}

	setActionsElement(top, left) {
		$('.editor-comp_actions').fadeIn(400).css({'top': top-60+'px', 'left': left-90+'px', 'display':'flex'})
	}

	execAction(action) {
		$('#highlighted-text').addClass(action).removeAttr('id')
	}



}
export const editorCompComponent = {
	templateUrl: 'components/editor-comp.html',
	controller: editorCompController,
	controllerAs: 'vm',
	bindings: {
		type: '@',
		actions: '<'
	}
}