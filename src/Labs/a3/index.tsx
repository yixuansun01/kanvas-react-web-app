import Classes from "./Classes";
import JavaScript from "./JavaScript";
import PathParameters from "./routing/PathParameters";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";

import Highlight from "./Highlight";
import Add from "./Add";
import TodoItem from "./todos/TodoItem"
import TodoList from "./todos/TodoList"

function Assignment3() {
    return (
       <div>
          <h2>Assignment 3</h2>
          <JavaScript/>
          <PathParameters/>
          <Classes/>
          <Styles/>
          <ConditionalOutput/>
          <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
         </Highlight>
         <Add a={3} b={4} />
         <h2>To do Items</h2>
         <TodoItem/>
         <TodoList/>
       </div>
    );
 }
 export default Assignment3;