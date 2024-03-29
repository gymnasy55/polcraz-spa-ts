abstract class Page {
    protected container: HTMLElement;
    static TextObject = {};

    protected constructor(id: string) {
        this.container = document.createElement('div');
        this.container.id = id;
    }

    protected createHeaderTitle(text: string) : HTMLElement {
        const headerTitle = document.createElement('h1');
        headerTitle.innerText = text;
        return headerTitle;
    }

    render() : HTMLElement {
        return this.container;
    }
}

export default Page;