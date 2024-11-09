import React from 'react'
import { AlertCircle, Check } from 'lucide-react'

export default function Alert({ type, title, message }) {
  const isError = type === 'error'
  const bgColor = isError ? 'bg-red-100' : 'bg-green-100'
  const borderColor = isError ? 'border-red-400' : 'border-green-400'
  const textColor = isError ? 'text-red-700' : 'text-green-700'
  const Icon = isError ? AlertCircle : Check

  return (
    <div className={`mt-4 ${bgColor} border ${borderColor} ${textColor} px-4 py-3 rounded relative`} role="alert">
      <Icon className="inline-block mr-2" size={16} />
      {title && <p className="font-bold">{title}</p>}
      <span className="block sm:inline">{message}</span>
    </div>
  )
}