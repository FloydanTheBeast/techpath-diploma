import React from 'react';

import { Text } from '@mantine/core';
import {
  RichTextEditor as RichTextEditorBase,
  RichTextEditorProps as RichTextEditorBaseProps,
  Link,
} from '@mantine/tiptap';
import Highlight from '@tiptap/extension-highlight';
import SubScript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

type RichTextEditorProps = Pick<RichTextEditorBaseProps, 'contentEditable' | 'placeholder'> & {
  content?: string;
  editable?: boolean;
  label?: string;
  minHeight?: number;
  maxHeight?: number;
  onChange?: (value: string) => void;
};

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
  content,
  editable,
  label,
  minHeight,
  maxHeight,
  onChange,
  ...baseProps
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    editable,
    content,
    onUpdate: onChange ? ({ editor }) => onChange(editor.getHTML()) : undefined,
  });

  return (
    <div>
      {label && (
        <Text
          component="label"
          sx={theme => ({
            color: theme.colors.gray,
            fontWeight: 500,
            fontSize: theme.fontSizes['sm'],
          })}
        >
          {label}
        </Text>
      )}
      <RichTextEditorBase
        {...baseProps}
        onChange={console.log}
        editor={editor}
        sx={
          !editable ? { border: 'none', '& .ProseMirror': { padding: '0 !important' } } : undefined
        }
      >
        <RichTextEditorBase.Toolbar
          sticky
          stickyOffset={60}
          sx={!editable ? { display: 'none' } : undefined}
        >
          <RichTextEditorBase.ControlsGroup>
            <RichTextEditorBase.Bold />
            <RichTextEditorBase.Italic />
            <RichTextEditorBase.Underline />
            <RichTextEditorBase.Strikethrough />
            <RichTextEditorBase.ClearFormatting />
            <RichTextEditorBase.Highlight />
            <RichTextEditorBase.Code />
          </RichTextEditorBase.ControlsGroup>

          <RichTextEditorBase.ControlsGroup>
            <RichTextEditorBase.H1 />
            <RichTextEditorBase.H2 />
            <RichTextEditorBase.H3 />
            <RichTextEditorBase.H4 />
          </RichTextEditorBase.ControlsGroup>

          <RichTextEditorBase.ControlsGroup>
            <RichTextEditorBase.Blockquote />
            <RichTextEditorBase.Hr />
            <RichTextEditorBase.BulletList />
            <RichTextEditorBase.OrderedList />
            <RichTextEditorBase.Subscript />
            <RichTextEditorBase.Superscript />
          </RichTextEditorBase.ControlsGroup>

          <RichTextEditorBase.ControlsGroup>
            <RichTextEditorBase.Link />
            <RichTextEditorBase.Unlink />
          </RichTextEditorBase.ControlsGroup>

          <RichTextEditorBase.ControlsGroup>
            <RichTextEditorBase.AlignLeft />
            <RichTextEditorBase.AlignCenter />
            <RichTextEditorBase.AlignJustify />
            <RichTextEditorBase.AlignRight />
          </RichTextEditorBase.ControlsGroup>
        </RichTextEditorBase.Toolbar>

        <RichTextEditorBase.Content
          placeholder="test"
          sx={{ minHeight: minHeight ?? DEFAULT_MIN_HEIGHT, maxHeight, overflow: 'auto' }}
        />
      </RichTextEditorBase>
    </div>
  );
};

const DEFAULT_MIN_HEIGHT = 85;
