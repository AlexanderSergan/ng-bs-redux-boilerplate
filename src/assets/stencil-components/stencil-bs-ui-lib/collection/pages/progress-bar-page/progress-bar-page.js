export class ProgressBarPage {
    constructor() {
        this.progressBarTypes = [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
        ];
    }
    render() {
        return [
            h("div", { class: "container mb-5" },
                h("h1", { class: "display-4 " }, "Progress Bar component"),
                h("h3", null, "API"),
                h("h4", { class: "my-3" }, "Props"),
                h("table", null,
                    h("thead", null,
                        h("tr", null,
                            h("th", null, "Prop"),
                            h("th", null, "PropType"),
                            h("th", null, "Required?"),
                            h("th", null, "defaultValue"),
                            h("th", null, "Description"))),
                    h("tbody", null,
                        h("tr", null,
                            h("td", null,
                                h("code", null, "text")),
                            h("td", null,
                                h("code", null, "string")),
                            h("td", null, "yes"),
                            h("td", null,
                                h("code", null, "''")),
                            h("td", null, "String to render inside Progress Bar.")),
                        h("tr", null,
                            h("td", null,
                                h("code", null, "height")),
                            h("td", null,
                                h("code", null, "number")),
                            h("td", null, "no"),
                            h("td", null,
                                h("code", null, "25")),
                            h("td", null, "Trims text to maximum length. Full Progress Bar text still available through hover tooltip")),
                        h("tr", null,
                            h("td", null,
                                h("code", null, "progressBarType")),
                            h("td", null,
                                h("code", null, "BootstrapThemeColor")),
                            h("td", null, "no"),
                            h("td", null,
                                h("code", null, "'primary'")),
                            h("td", null, "Modifier class to change the appearance of the Progress Bar.")),
                        h("tr", null,
                            h("td", null,
                                h("code", null, "classes")),
                            h("td", null,
                                h("code", null, "string")),
                            h("td", null, "no"),
                            h("td", null,
                                h("code", null, "''")),
                            h("td", null, "Additional classes to add to the Progress Bar element.")),
                        h("tr", null,
                            h("td", null,
                                h("code", null, "striped")),
                            h("td", null,
                                h("code", null, "boolean")),
                            h("td", null, "no"),
                            h("td", null,
                                h("code", null, "false")),
                            h("td", null, "Makes Progress Bar striped.")),
                        h("tr", null,
                            h("td", null,
                                h("code", null, "animated")),
                            h("td", null,
                                h("code", null, "boolean")),
                            h("td", null, "no"),
                            h("td", null,
                                h("code", null, "false")),
                            h("td", null, "Makes Progress Bar animated.")))),
                h("h3", { class: "mt-4" }, "Usage"),
                h("h4", { class: "mt-3" }, "Basic usage"),
                h("cwc-progress-bar", { text: 'Holla link', progress: 10 }),
                h("code", { class: "mb-3 d-block p-3" }, "<cwc-progress-bar text='Holla link' />"),
                h("h4", { class: "mt-3" }, "Bootstrap styles"),
                (() => {
                    return this.progressBarTypes.map(type => h("cwc-progress-bar", { class: "mx-1", text: 'Progress Bar ' + type, progressBarType: type, progress: 80 }));
                })(),
                h("code", { class: "mb-3 d-block p-3" }, "<cwc-progress-bar text='Holla link' progressBarType='primary | secondary | success etc.' />"),
                h("h4", { class: "mt-3" }, "Max text length"),
                h("cwc-progress-bar", { class: "mx-1", text: 'Lorem ipsum dolor sir amet', height: 10, progress: 50 }),
                h("code", { class: "mb-3 d-block p-3" }, "<cwc-progress-bar text='Lorem ipsum dolor sir amet' height={10} />"),
                h("h4", { class: "mt-3" }, "Rounded link tag with image"),
                h("code", { class: "mb-3 d-block p-3" },
                    "<cwc-progress-bar text='Stencil'",
                    h("br", null),
                    "striped={true} animated={true} />"),
                h("cwc-progress-bar", { class: "mx-1", text: 'Stencil', striped: true, animated: true, progress: 20 }),
                h("cwc-progress-bar", { class: "mx-1", text: 'Angular', striped: true, animated: true, progress: 30 }),
                h("cwc-progress-bar", { class: "mx-1", text: 'React', striped: true, animated: true, progress: 40 }))
        ];
    }
    static get is() { return "progress-bar-page"; }
    static get style() { return "/**style-placeholder:progress-bar-page:**/"; }
}
