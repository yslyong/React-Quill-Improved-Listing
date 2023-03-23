import * as React from "react";
import QuillEditor from "./QuillEditor";
import QuillEditorFixes from "./QuillEditorFixes";

export default function App() {
  //const context = React.useContext(AppContext);

  React.useEffect(() => {
    /* eslint-disable react-hooks/exhaustive-deps*/
  }, []);

  const value =
    "<ol><li>Item 1 </li><li class='ql-indent-1'>Sub Item 1</li><li class='ql-indent-1'>Sub Item 2</li><li>Item 2</li><li class='ql-indent-1'>Item 2 Sub Item 1</li><li class='ql-indent-1'>Item 2 Sub Item 2</li><li class='ql-indent-1 indent-no-text'>Line without listing number</li><li>Item 3 with listing number</li></ol><p><br/></p><ol><li>Second Listing Start 1</li><li>Second Listing Start 2</li><li>Second Listing Start 3</li><li>Second Listing Start 4</li></ol><p><br></p><ul><li>Dot listing working too</li><li class='ql-indent-1'>Dot listing working too</li><li class='ql-indent-1 indent-no-text'>See there are no dots in front</li><li class='ql-indent-1'>See Dot again  </li></ul>";

  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <div>
        <h1>Before Fixes</h1>
        <QuillEditor value={value} />
      </div>
      <div>
        <h1>After Fixes</h1>
        <QuillEditorFixes value={value} />
      </div>
    </div>
  );
}
