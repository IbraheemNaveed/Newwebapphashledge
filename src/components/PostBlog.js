import React from 'react';
import { useState } from "react";
import { Editor, EditorTools } from "@progress/kendo-react-editor";

const {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Subscript,
  Superscript,
  ForeColor,
  BackColor,
  CleanFormatting,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Indent,
  Outdent,
  OrderedList,
  UnorderedList,
  NumberedList,
  BulletedList,
  Undo,
  Redo,
  FontSize,
  FontName,
  FormatBlock,
  Link,
  Unlink,
  InsertImage,
  ViewHtml,
  InsertTable,
  InsertFile,
  SelectAll,
  Print,
  Pdf,
  AddRowBefore,
  AddRowAfter,
  AddColumnBefore,
  AddColumnAfter,
  DeleteRow,
  DeleteColumn,
  DeleteTable,
  MergeCells,
  SplitCell,
} = EditorTools;

const tools = [
  [Bold, Italic, Underline, Strikethrough],
  [Subscript, Superscript],
  ForeColor,
  BackColor,
  [CleanFormatting],
  [AlignLeft, AlignCenter, AlignRight, AlignJustify],
  [Indent, Outdent],
  [OrderedList, UnorderedList],
  [NumberedList, BulletedList],
  FontSize,
  FontName,
  FormatBlock,
  [SelectAll],
  [Undo, Redo],
  [Link, Unlink, InsertImage, ViewHtml],
  [InsertTable, InsertFile],
  [Pdf, Print],
  [AddRowBefore, AddRowAfter, AddColumnBefore, AddColumnAfter],
  [DeleteRow, DeleteColumn, DeleteTable],
  [MergeCells, SplitCell],
];

const initialRichText = `<h1>Hello world</h1>
  <p>How are you doing?</p>
`;

const PostBlog = props => {
  const [richText, setRichText] = useState(initialRichText);

  const onChangeText = e => {
    setRichText(e.html);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(richText);
  };
  const [formData, setFormData] = useState({
    image: '',
    heading: '',
    description: '',
    dateName: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }


 return (
    <>
        <div>
        <div className="k-flex-grow" style={{ maxWidth: "1000%" }}>
          <h2 className='font-bold text-center  text-5xl'>Create New Blog</h2>
         
        </div>
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" for="image">
          Image
        </label>
        <input 
          className="border border-gray-400 p-2 rounded-lg w-full" 
          type="file" 
          id="image" 
          name="image"
          onChange={handleChange} 
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" for="heading">
          Heading
        </label>
        <input 
          className="border border-gray-400 p-2 rounded-lg w-full" 
          type="text" 
          id="heading" 
          name="heading"
          onChange={handleChange} 
        />
      </div>
      <div className="mb-4">

      <form onSubmit={handleSubmit}  for="description"  >
            <Editor
              defaultContent={richText}
              tools={tools}
              onChange={onChangeText}
              contentStyle={{ height: 500 }}
            />
          </form>
        <label className="block text-gray-700 font-medium mb-2" for="description">
          Description
        </label>
        <textarea 
          className="border border-gray-400 p-2 rounded-lg w-full" 
          id="description" 
          name="description"
          onChange={handleChange} 
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" for="dateName">
          Date Name
        </label>
        <input 
          className="border border-gray-400 p-2 rounded-lg w-full" 
          type="date" 
          id="dateName" 
          name="dateName"
          onChange={handleChange} 
        />
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
        Submit
      </button>
    </form>
      <div className="k-d-flex k-gap-8">
        
        <div className="k-flex-grow">
          <h2>Parsed Editor Text</h2>
          <div dangerouslySetInnerHTML={{ __html: richText }} />
        </div>
      </div>
    </div>
    </>
  );
};

export default PostBlog;