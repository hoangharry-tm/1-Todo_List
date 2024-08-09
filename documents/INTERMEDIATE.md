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

<!-- Foot notes section -->

[^1]: [Basic Level Document](./BASICS.md)
