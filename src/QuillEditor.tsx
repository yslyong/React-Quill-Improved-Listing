import React, { ReactElement } from "react";
import ReactQuill from "react-quill";

//Styles
import "react-quill/dist/quill.snow.css";

export type TProps = {
  value: string;
};

const QuillEditor: React.FC<TProps> = (props): ReactElement => {
  const { value } = props;

  const nProps = {
    theme: "snow",
    value: value
  };

  return <ReactQuill {...nProps} />;
};

export default QuillEditor;
