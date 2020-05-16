(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{126:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return i})),o.d(t,"rightToc",(function(){return s})),o.d(t,"default",(function(){return p}));var n=o(1),a=o(6),r=(o(0),o(148)),l={title:"Selectors"},i={id:"basic-tutorial/selectors",title:"Selectors",description:"A **selector** represents a piece of **derived state**. You can think of derived state as the output of passing state to a pure function that modifies the given state in some way.",source:"@site/docs/basic-tutorial/selectors.md",permalink:"/docs/basic-tutorial/selectors",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/basic-tutorial/selectors.md",sidebar:"someSidebar",previous:{title:"Atoms",permalink:"/docs/basic-tutorial/atoms"},next:{title:"Asynchronous Data Queries",permalink:"/docs/guides/asynchronous-data-queries"}},s=[],c={rightToc:s};function p(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A ",Object(r.b)("strong",{parentName:"p"},"selector")," represents a piece of ",Object(r.b)("strong",{parentName:"p"},"derived state"),". You can think of derived state as the output of passing state to a pure function that modifies the given state in some way."),Object(r.b)("p",null,"Derived state is a powerful concept because it lets us build dynamic data that depends on other data. In the context of our todo list application, the following are considered derived state:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Filtered todo list"),": derived from the complete todo list by creating a new list that has certain items filtered out based on some criteria (such as filtering out items that are already completed)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Todo list statistics"),": derived from the complete todo list by calculating useful attributes of the list, such as the total number of items in the list, the number of completed items, and the percentage of items that are completed.")),Object(r.b)("p",null,'To implement a filtered todo list, we need to choose a set of filter criteria whose value can be saved in an atom. The filter options we\'ll use are: "Show All", "Show Completed", and "Show Uncompleted". The default value will be "Show All":'),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const todoListFilterState = atom({\n  key: 'todoListFilterState',\n  default: 'Show All',\n});\n")),Object(r.b)("p",null,"Using ",Object(r.b)("inlineCode",{parentName:"p"},"todoListFilterState")," and ",Object(r.b)("inlineCode",{parentName:"p"},"todoListState"),", we can build a ",Object(r.b)("inlineCode",{parentName:"p"},"filteredTodoListState")," selector which derives a filtered list:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const filteredTodoListState = selector({\n  key: 'filteredTodoListState',\n  get: ({get}) => {\n    const filter = get(todoListFilterState);\n    const list = get(todoListState);\n\n    switch (filter) {\n      case 'Show Completed':\n        return list.filter((item) => item.isComplete);\n      case 'Show Uncompleted':\n        return list.filter((item) => !item.isComplete);\n      default:\n        return list;\n    }\n  },\n});\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"filteredTodoListState")," internally keeps track of two dependencies: ",Object(r.b)("inlineCode",{parentName:"p"},"todoListFilterState")," and ",Object(r.b)("inlineCode",{parentName:"p"},"todoListState")," so that it re-runs if either of those change."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"From a component's point of view, selectors can be read using the same hooks that are used to read atoms. However it's important to note that certain hooks only work with ",Object(r.b)("strong",{parentName:"p"},"writable state")," (i.e ",Object(r.b)("inlineCode",{parentName:"p"},"useRecoilState()"),"). All atoms are writable state, but only some selectors are considered writable state (selectors that have both a ",Object(r.b)("inlineCode",{parentName:"p"},"get")," and ",Object(r.b)("inlineCode",{parentName:"p"},"set")," property). See the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/introduction/core-concepts"}),"Core Concepts")," page for more information on this topic.")),Object(r.b)("p",null,"Displaying our filtered todoList is as simple as changing one line in the ",Object(r.b)("inlineCode",{parentName:"p"},"TodoList")," component:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"function TodoList() {\n  // changed from todoListState to filteredTodoListState\n  const todoList = useRecoilValue(filteredTodoListState);\n\n  return (\n    <>\n      <TodoListStats />\n      <TodoListFilters />\n      <TodoItemCreator />\n\n      {todoList.map((todoItem) => (\n        <TodoItem item={todoItem} key={todoItem.id} />\n      ))}\n    </>\n  );\n}\n")),Object(r.b)("p",null,"Note the UI is the same as the ",Object(r.b)("inlineCode",{parentName:"p"},"todoListFilterState")," has a default of ",Object(r.b)("inlineCode",{parentName:"p"},'"Show All"'),". In order to change the filter, we need to implement the ",Object(r.b)("inlineCode",{parentName:"p"},"TodoListFilters")," component:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'function TodoListFilters() {\n  const [filter, setFilter] = useRecoilState(todoListFilterState);\n\n  const updateFilter = ({target: {value}}) => {\n    setFilter(value);\n  };\n\n  return (\n    <>\n      Filter:\n      <select value={filter} onChange={updateFilter}>\n        <option value="Show All">All</option>\n        <option value="Show Completed">Completed</option>\n        <option value="Show Uncompleted">Uncompleted</option>\n      </select>\n    </>\n  );\n}\n')),Object(r.b)("p",null,"With a few lines of code we've managed to implement filtering! We'll use the same concepts to implement the ",Object(r.b)("inlineCode",{parentName:"p"},"TodoListStats")," component."),Object(r.b)("p",null,"We want to display the following stats:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Total number of todo items"),Object(r.b)("li",{parentName:"ul"},"Total number of completed items"),Object(r.b)("li",{parentName:"ul"},"Total number of uncompleted items"),Object(r.b)("li",{parentName:"ul"},"Percentage of items completed")),Object(r.b)("p",null,"While we could create a selector for each of the stats, an easier approach would be to create one selector that returns an object containing the data we need. We'll call this selector ",Object(r.b)("inlineCode",{parentName:"p"},"todoListStatsState"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const todoListStatsState = selector({\n  key: 'todoListStatsState',\n  get: ({get}) => {\n    const todoList = get(filteredTodoListState);\n    const totalNum = todoList.length;\n    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;\n    const totalUncompletedNum = totalNum - totalCompletedNum;\n    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;\n\n    return {\n      totalNum,\n      totalCompletedNum,\n      totalUncompletedNum,\n      percentCompleted,\n    };\n  },\n});\n")),Object(r.b)("p",null,"To read the value of ",Object(r.b)("inlineCode",{parentName:"p"},"todoListStatsState"),", we use ",Object(r.b)("inlineCode",{parentName:"p"},"useRecoilValue()")," once again:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"function TodoListStats() {\n  const {\n    totalNum,\n    totalCompletedNum,\n    totalUncompletedNum,\n    percentCompleted,\n  } = useRecoilValue(todoListStatsState);\n\n  const formattedPercentCompleted = Math.round(percentCompleted * 100);\n\n  return (\n    <ul>\n      <li>Total items: {totalNum}</li>\n      <li>Items completed: {totalCompletedNum}</li>\n      <li>Items not completed: {totalUncompletedNum}</li>\n      <li>Percent completed: {formattedPercentCompleted}</li>\n    </ul>\n  );\n}\n")),Object(r.b)("p",null,"To summarize, we've created a todo list app that meets all of our requirements:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add todo items"),Object(r.b)("li",{parentName:"ul"},"Edit todo items"),Object(r.b)("li",{parentName:"ul"},"Delete todo items"),Object(r.b)("li",{parentName:"ul"},"Filter todo items"),Object(r.b)("li",{parentName:"ul"},"Display useful stats")))}p.isMDXComponent=!0},148:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return b}));var n=o(0),a=o.n(n);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i({},t,{},e)),o},d=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(o),u=n,b=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return o?a.a.createElement(b,i({ref:t},c,{components:o})):a.a.createElement(b,i({ref:t},c))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<r;c++)l[c]=o[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"}}]);