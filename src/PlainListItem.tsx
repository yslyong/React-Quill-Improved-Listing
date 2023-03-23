import ReactQuill from "react-quill";

const ListItem = ReactQuill.Quill.import("formats/list/item");

export class CustomList extends ListItem {
  format(name: any, value: any) {
    if (this.domNode) {
      let tempClassList = this.domNode.classList.values();

      let a: any[] = [];

      for (const value of tempClassList) {
        a.push(value);
      }

      if (name === "indent") {
        if (value === "-1") {
          if (!a.some((d: any) => d.startsWith("indent-no"))) {
            super.format("indent-no", "text");
          } else {
            super.format("indent-no", "");
            super.format(name, value);
          }
        } else if (value === "+1") {
          super.format(name, value);
        } else {
          super.format(name, value);
        }
      } else {
        super.format(name, value);
      }
    }
  }
}
