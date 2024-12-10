"use client"

import * as React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Editor } from "@tiptap/react"
import { AiOutlineRedo, AiOutlineUndo } from "react-icons/ai"
import { BsTypeUnderline } from "react-icons/bs"
import { IoListOutline } from "react-icons/io5"
import {
  RiBold,
  RiCodeSSlashLine,
  RiItalic,
  RiListOrdered2,
  RiStrikethrough,
} from "react-icons/ri"
import { Level } from "@tiptap/extension-heading"

const Button = ({
  onClick,
  isActive,
  disabled,
  children,
}: {
  onClick: () => void
  isActive: boolean
  disabled?: boolean
  children: React.ReactNode
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className={`p-1 sm:p-2 ${
      isActive ? "bg-primary text-white rounded-md" : ""
    } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    aria-pressed={isActive}
  >
    {children}
  </button>
)

export default function TextEditorMenuBar({
  editor,
}: {
  editor: Editor | null
}) {
  if (!editor) return null

  const buttons = [
    {
      icon: <RiBold className="size-4 sm:size-5" />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive("bold"),
      ariaLabel: "Toggle bold",
    },
    {
      icon: <BsTypeUnderline className="size-4 sm:size-5" />,
      onClick: () => editor.chain().focus().toggleUnderline().run(),
      isActive: editor.isActive("underline"),
      ariaLabel: "Toggle underline",
    },
    {
      icon: <RiItalic className="size-4 sm:size-5" />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      isActive: editor.isActive("italic"),
      disabled: !editor.can().chain().focus().toggleItalic().run(),
      ariaLabel: "Toggle italic",
    },
    {
      icon: <RiStrikethrough className="size-4 sm:size-5" />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      isActive: editor.isActive("strike"),
      disabled: !editor.can().chain().focus().toggleStrike().run(),
      ariaLabel: "Toggle strikethrough",
    },
    {
      icon: <RiCodeSSlashLine className="size-4 sm:size-5" />,
      onClick: () => editor.chain().focus().toggleCode().run(),
      isActive: editor.isActive("code"),
      disabled: !editor.can().chain().focus().toggleCode().run(),
      ariaLabel: "Toggle code",
    },
    {
      icon: <IoListOutline className="size-4 sm:size-5" />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      isActive: editor.isActive("bulletList"),
      ariaLabel: "Toggle bullet list",
    },
    {
      icon: <RiListOrdered2 className="size-4 sm:size-5" />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: editor.isActive("orderedList"),
      disabled: !editor.can().chain().focus().toggleOrderedList().run(),
      ariaLabel: "Toggle ordered list",
    },
    {
      icon: <AiOutlineUndo className="size-4 sm:size-5" />,
      onClick: () => editor.chain().focus().undo().run(),
      isActive: editor.isActive("undo"),
      disabled: !editor.can().chain().focus().undo().run(),
      ariaLabel: "Undo",
    },
    {
      icon: <AiOutlineRedo className="size-4 sm:size-5" />,
      onClick: () => editor.chain().focus().redo().run(),
      isActive: editor.isActive("redo"),
      disabled: !editor.can().chain().focus().redo().run(),
      ariaLabel: "Redo",
    },
  ]

  const handleHeadingChange = (value: string) => {
    if (value === "paragraph") {
      editor.chain().focus().setParagraph().run()
    } else {
      editor.chain().focus().toggleHeading({ level: parseInt(value) as Level }).run()
    }
  }

  return (
    <div className="mb-2 flex flex-wrap items-center gap-1 sm:gap-2">
      <div className="flex flex-wrap gap-1 sm:gap-2">
        {buttons.map(({ icon, onClick, isActive, disabled, ariaLabel }, index) => (
          <Button
            key={index}
            onClick={onClick}
            isActive={isActive}
            disabled={disabled}
            aria-label={ariaLabel}
          >
            {icon}
          </Button>
        ))}
      </div>

      <Select onValueChange={handleHeadingChange} defaultValue="paragraph">
        <SelectTrigger className="w-[120px] sm:w-[150px]">
          <SelectValue placeholder="Heading" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="paragraph">Paragraph</SelectItem>
          <SelectItem value="1">Heading 1</SelectItem>
          <SelectItem value="2">Heading 2</SelectItem>
          <SelectItem value="3">Heading 3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}