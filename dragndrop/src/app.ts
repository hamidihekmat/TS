// Validation
interface Validator {
  value: string | number;
  required: boolean;
  minLength: number;
  maxLength: number;
  min?: number;
  max?: number;
}

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInput: HTMLInputElement;
  descriptionInput: HTMLInputElement;
  people: HTMLInputElement;
  constructor() {
    this.templateElement = document.getElementById(
      'project-input'
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement;
    // Show template elements
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = 'user-input';
    this.titleInput = this.element.querySelector('#title')! as HTMLInputElement;
    this.descriptionInput = this.element.querySelector(
      '#description'
    )! as HTMLInputElement;
    this.people = this.element.querySelector('#people')! as HTMLInputElement;
    this.configure();
    this.attach();
  }
  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }

  private submitHandler = (event: Event) => {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      console.log(title, desc, people);
    }
  };

  private configure = () => {
    this.element.addEventListener('submit', this.submitHandler);
  };

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInput.value;
    const enteredDesc = this.descriptionInput.value;
    const enteredPeople = this.people.value;
    if (
      enteredTitle.length === 0 ||
      enteredDesc.length === 0 ||
      enteredPeople.length === 0
    ) {
      alert('invalid Input');
      return;
    } else {
      return [enteredTitle, enteredDesc, +enteredPeople];
    }
  }
}

const projectInput = new ProjectInput();
