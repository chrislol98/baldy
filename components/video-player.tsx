"use client"

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function VideoPlayer() {
  const [videoSrc, setVideoSrc] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string>("")
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const url = URL.createObjectURL(file)
    setVideoSrc(url)
    setFileName(file.name)
  }

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    const files = e.dataTransfer.files
    if (files && files.length > 0 && files[0].type.startsWith('video/')) {
      const file = files[0]
      const url = URL.createObjectURL(file)
      setVideoSrc(url)
      setFileName(file.name)
    }
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <Card className="w-full max-w-3xl">
      <CardContent className="p-6 flex flex-col items-center space-y-6">
        {videoSrc ? (
          <div className="w-full aspect-video">
            <video 
              className="w-full h-full object-contain bg-black" 
              src={videoSrc} 
              controls
            />
          </div>
        ) : (
          <div 
            onClick={handleClick}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={cn(
              "w-full aspect-video bg-muted flex flex-col items-center justify-center rounded-lg cursor-pointer transition-colors",
              isDragging && "border-2 border-dashed border-primary bg-primary/5"
            )}
          >
            <p className="text-muted-foreground">Drag and drop a video here or click to browse</p>
            {fileName && <p className="text-sm text-muted-foreground mt-2">{fileName}</p>}
          </div>
        )}
        
        <input
          type="file"
          accept="video/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </CardContent>
    </Card>
  )
} 