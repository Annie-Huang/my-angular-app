import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { TaskComponent } from './task.component';

// When creating a story we use a base task (task) to build out the shape of the task
// the component expects. This is typically modelled from what the true data looks like.
// Again, export-ing this shape will enable us to reuse it in later stories, as we'll see.
export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

// It is convenient to bundle the actions up into a single actions variable.
// That way we can export them and use them in stories for components that reuse this component,
// as we'll see later.
export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

storiesOf('Task', module)
  .addDecorator(
    moduleMetadata({
      declarations: [TaskComponent],
    }),
  )
  // To define our stories, we call add() once for each of our test states to generate a story.
  // The action story is a function that returns a rendered element (i.e. a component class with a
  // set of props) in a given state.
  .add('default', () => {
    // action() allows us to create a callback that appears in the actions panel of the Storybook UI
    // when clicked. So when we build a pin button, we’ll be able to determine in the test UI if
    // a button click is successful.
    return {
      template: `<task-item [task]="task" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)" ></task-item>`,
      props: {
        task,
        onPinTask: actions.onPinTask,
        onArchiveTask: actions.onArchiveTask,
      },
    };
  })
  .add('pinned', () => {
    return {
      template: `<task-item [task]="task" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)" ></task-item>`,
      props: {
        task: { ...task, state: 'TASK_PINNED' },
        onPinTask: actions.onPinTask,
        onArchiveTask: actions.onArchiveTask,
      },
    };
  })
  .add('archived', () => {
    return {
      template: `<task-item [task]="task" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)" ></task-item>`,
      props: {
        task: { ...task, state: 'TASK_ARCHIVED' },
        onPinTask: actions.onPinTask,
        onArchiveTask: actions.onArchiveTask,
      },
    };
  });
