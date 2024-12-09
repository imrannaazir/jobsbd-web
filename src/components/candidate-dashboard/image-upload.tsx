'use client'

import { Camera } from 'lucide-react'
import Image from "next/image"
import { useState } from "react"
import { StaticImageData } from "next/image";

interface ImageUploadProps {
  currentImage: string | StaticImageData | undefined;
  onUpload: (file: File) => Promise<void>;
  className?: string;
}

export function ImageUpload({ currentImage, onUpload, className = "" }: ImageUploadProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      setIsUploading(true)
      await onUpload(file)
    } catch (error) {
      console.error('Error uploading image:', error)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        alt="profile image"
        src={typeof currentImage === 'string' ? currentImage : currentImage?.src || ''}
        width={70}
        height={70}
        className="w-[60px] h-[60px] rounded-full object-cover"
      />
      <label
        htmlFor="profile-upload"
        className={`absolute -top-1 -right-1 p-1 rounded-full bg-white shadow-sm cursor-pointer
          transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0 lg:opacity-100'}`}
      >
        <Camera className="size-6 text-primary bg-bgColour p-1 rounded-full" />
        <input
          type="file"
          id="profile-upload"
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
          disabled={isUploading}
        />
      </label>
      {isUploading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  )
}

