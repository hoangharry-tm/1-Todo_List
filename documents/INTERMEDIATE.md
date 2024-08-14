<div align="center">
  <h3>Intermediate Level</h3>
  <p><i>Don’t Wait for Opportunity, Create it!</i></p>
</div>

As metioned before in the Basic Level document [^1], during the process of
creating a form to add new tasks, there are quite a few problems: <br/>

1. First of all, because there 2 separate components that use the same data, I
   noticed that whenever create an object with useState, it create a clone of the
   real data. In another word, it means each component will have a different clone
   of the data and when one of them update the data, other components will not catch
   the changes. Thus, this has introduced me to the useContext hook.
2. Secondly, for the folder structure, I recognize that, because the context hooks
   will be used in many other components so I have created a new `_contexts/` folder
   to store all of the contexts.

The goals for this level are:

1. Learn `useContext`. This includes creating a Provider and a Consumer
   custom hooks
2. Organize the folder structure
3. Implement other features: Update, Delete tasks

#### The `useContext` hook:

Learning the useContext hook is absolutely challenging! Since I use Typescript,
there are some problems occured related to type errors.

- When create a new context, the typescript compiler requires to pass in the initial
  value through the `createContext()` function. And if we pass in the `null` value,
  the compiler will screams for errors when we extract and use the context. Thus,
  the solution for this problem is to create <b>a custom hook</b> that will handle
  the null value if `useContext()` is use outside of the _Context Provider_. Here
  is the code:

  ```typescript
  export function useDataContext() {
    const context = useContext(DataContext);
    if (context === null) {
      throw new Error(
        "useDataContext must be used within a DataContextProvider"
      );
    }

    return context;
  }
  ```

- Moreover, regarding to types, since the `createContext<T>()` is generic, I have
  to pass in a custom type of `DataContext` like follow:

  ```typescript
  type DataContext = {
    data: ITask[];
    setData: Dispatch<SetStateAction<ITask[]>>;
  };
  const DataContext = createContext<DataContext | null>(null);
  ```

  so that when the consumer extract this context, it will have the default data
  as well as a function to manipulate it.

#### The results?

##### v2.1: Create task successfully

![Gif - Create task successfully by using the `useContext()` hook][GIF-v2.1]

As demonstrated above, by using the `useContext()` hook, I have successfully
share the task list among other components in the application. However there are
some problems I haven't solved yet: I haven't checked if the input boxes aren't
empty before submit the form, which will create an empty task item like follow:

![Empty Task Box][PIC-emty-task-box]

To fix the problem, I simply check the `name` input field is not empty before
submit:

```typescript
if (!name) return;
```

##### v2.2: Remove and update task

![GIF-v2.2-Full Feature Demo][GIF-v2.2-Full_Feature_Demo]

In the version 2.2, I have add the feature to add and edit task by using basic
form actions. With the help of `useState()` hook, I can capture the new value
and update it to the applying context with `setData()`

```typescript
const handleEdit = (e: React.FormEvent) => {
  e.preventDefault();
  if (!titleEdit) return;
  if (titleEdit === title && descEdit === desc) return;
  setData(
    data.map((task, i) =>
      i === idx ? { name: titleEdit, desc: descEdit } : task
    )
  );
  setEditing(false);
};
const [titleEdit, setTitleEdit] = React.useState<string>(title);
const [descEdit, setDescEdit] = React.useState<string | undefined>(desc);
```

In the `handleEdit()` function, firstly, I prevents the default form submission 
behavior by using `e.preventDefault();`. After that, I will need to check and 
make sure after editing, the title is not empty as well as they are not the same 
as the original task. Therefore there are 2 if statements in the above code. Then, 
I update the data state by mapping over the tasks and replacing the task at the 
specified `idx` with the edited values. Ultimately, setting the `editting` state 
to `false` to close the changing form.

In case of deleting task, it is much simpler:

```typescript
const handleDelete = (e: React.MouseEvent) => {
  setData(data.filter((_, i) => i !== idx));
};
```

The function removes the task at index `idx` from the data array by filtering it
out and updating the data state with the new array. The reason for the `_`
(underscore) symbol to be used in this context is because I do not care about the
value at that index.

<!-- Links section -->

[PIC-emty-task-box]: media/intermediate/empty-task-error.png
[GIF-v2.1]: media/intermediate/result-intermediate-level-create-task-success.gif
[GIF-v2.2-Full_Feature_Demo]: media/intermediate/result-intermediate-level-full-feature.gif

<!-- Foot notes section -->

[^1]: [Basic Level Document](./BASICS.md)
