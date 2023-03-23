import React, { ReactElement } from "react";
import ReactQuill from "react-quill";
import "./styles.css";

//Styles
import "react-quill/dist/quill.snow.css";
import { CustomList } from "./PlainListItem";

export type TProps = {
  value: string;
};

const QuillEditorFixes: React.FC<TProps> = (props): ReactElement => {
  const { value } = props;

  const Parchment = ReactQuill.Quill.import("parchment");
  const IndentNoText = new Parchment.Attributor.Class(
    "indent-no",
    "indent-no",
    {
      scope: Parchment.Scope.ANY,
      whitelist: ["text"]
    }
  );

  ReactQuill.Quill.register(IndentNoText, true);
  ReactQuill.Quill.register({ "formats/list-item": CustomList }, true);

  const nProps = {
    className: "fixes",
    theme: "snow",
    value: value
  };

  return <ReactQuill {...nProps} />;
};

export default QuillEditorFixes;
