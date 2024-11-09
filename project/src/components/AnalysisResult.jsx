import React from 'react'
import Alert from './Alert'

export default function AnalysisResult({ result }) {
  if (!result) return null

  return (
    <Alert
      type="success"
      title="Analysis Complete"
      message={
        <>
          <p className="text-sm">Gleason Score: {result.gleasonScore}</p>
          <p className="text-sm mt-1">{result.suggestion}</p>
        </>
      }
    />
  )
}