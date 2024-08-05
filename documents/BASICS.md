<div align="center">
  <h3>Basic Level</h3>
  <p><i>Treat the process like a game 🏅</i></p>
</div>

To grasp the very basic of ReactJS, in this particular level, I will only focus
on very basic topics, which are:

- 2 main React Hooks 🪝:
  - useState
  - useEffect
- Functional Components with passing props _and/or_ children
- Conditional Rendering
- List Rendering
- Styling with SCSS

I try not to overwhelm myself with so many topics as well as complex rendering
concepts like animations and other hooks like useContext et cetera. I will keep
this level as simple as possible with these following goals:

1. Create a list of tasks → using List Rendering
2. CRUD with tasks → learn about Form actions and useState, useEffect hook
3. Having basic styling with SCSS modules

#### Result

After successfully creating the form, and logging the input content to the
console. I can say that for the basic level, I have accomplished most of the goals.
Through this level, I have learned how useEffect works with 3 scenarios: without
dependency list, with empty dependency list and with items in dependency list.

```javascript
import { useEffect } from "react";

useEffect(() => {}); // This will run in every render
useEffect(() => {}, []); // This will only run once when the component is mounted
useEffect(() => {}, [dependency]); // This will run when the dependency is changed
```

Moreover, I have also known how to use SCSS modules for styling and some of its
flaws regarding naming convention and tag rendering which means I should avoid
calling HTML tags in a .module.scss file for rendering to avoid it affect other
unwanted tags.

Here are the footage of the final result:

![Result][Result-Video]

#### During the development

During the development process, there is a minor problem that occured to me.
Currently, there are 2 components that are accessing the dummyData and for the
form component, when it use useState hook to update the data, it only creates a
clone of the data which means I cannot update the data from component to component.
For this particular issue, I figure out that the useContext hook might solve the
problem! And since the useContext hook is planned to be in the intermediate level,
I believe that the basics level is successful and I have learned a lot along the
way.

[Result-Video]: media/basics/result-basic-level.gif
