import {LEOElement} from 'leo'
import 'src/ui/registry'

class App extends LEOElement {
	render() {
		this.innerHTML = `
			<fd-header></fd-header>
			<fd-books title="Books" class="fd-block"></fd-books>
			<fd-code-editors title="Code Editors" class="fd-block"></fd-code-editors>
			<fd-frameworks title="Frameworks" class="fd-block"></fd-frameworks>
			<fd-tools title="Tools" class="fd-block"></fd-tools>
		`
	}
}

customElements.define('fd-app', App)