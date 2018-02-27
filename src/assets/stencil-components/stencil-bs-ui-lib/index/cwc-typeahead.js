/*! Built with http://stenciljs.com */
const { h } = window.index;

export { CwcTypeahead } from './chunk7.js';

class StencilComponent {
    constructor() {
        this.complex = [
            {
                type: 'country',
                data: {
                    name: 'Austria',
                    capital: 'Vienna'
                }
            },
            {
                type: 'country',
                data: {
                    name: 'Australia',
                    capital: 'Canberra'
                }
            },
            {
                type: 'country',
                data: {
                    name: 'Argentina',
                    capital: 'Buenos Aires'
                }
            }
        ];
        this.searchString = 'data.name';
        this.complexResult = [];
        this.data = ['Alex', 'Alabama', 'Alaska', 'andreas', 'alexandro'];
    }
    typeaheadOnSubmit(e) {
        this.result = e.detail;
    }
    render() {
        return [
            h("h3", null, "Simple String[] data demo!"),
            h("cwc-typeahead", { data: this.data }),
            h("br", null),
            h("br", null),
            h("br", null),
            h("br", null),
            h("h3", null, "Complex Object[] demo!"),
            h("cwc-typeahead", { data: this.complex, searchKey: this.searchString, placeholder: "Search something e.g. 'Argentina'" }),
            h("br", null), h("br", null), h("br", null), h("h4", null, "result: "),
            h("pre", null, JSON.stringify(this.result, null, 2))
        ];
    }
    static get is() { return "typeahead-page"; }
    static get properties() { return { "result": { "state": true } }; }
    static get style() { return ""; }
}

export { StencilComponent as TypeaheadPage };
