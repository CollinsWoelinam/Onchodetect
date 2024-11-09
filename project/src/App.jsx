'use client'

import React, { useState } from 'react'
import FileUpload from './components/FileUpload'
import Alert from './components/Alert'
import AnalysisResult from './components/AnalysisResult'
import { simulateApiCall } from './services/api'

export default function OnchoDetect() {
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0])
      setError(null)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!file) {
      setError('Please select a file to upload.')
      return
    }

    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const response = await simulateApiCall()
      setResult(response)
    } catch (err) {
      setError('An error occurred while processing the image. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8 w-full">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1">OnchoDetect</div>
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">Prostate PSA Tissue Analysis</h1>
            <p className="mt-2 text-gray-500">Upload a prostate PSA tissue slide for Gleason score analysis.</p>
            
            <form onSubmit={handleSubmit} className="mt-6">
              <FileUpload onFileChange={handleFileChange} file={file} />
              <button
                type="submit"
                className="mt-6 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={loading}
              >
                {loading ? 'Processing...' : 'Analyze Tissue'}
              </button>
            </form>

            {error && <Alert type="error" message={error} />}
            {result && <AnalysisResult result={result} />}
          </div>
        </div>
      </div>
    </div>
  )
}