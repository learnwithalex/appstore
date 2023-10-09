"use client"

import RelatedApps from '@/app/components/apps/RelatedApps'
import App from '@/app/components/home/Header'
import React from 'react'

export default function Page({ params }: { params: { id: string } }) {
    return (
        <>
        <App />
        <div className='p-7'>
            <RelatedApps />
        </div>
        </>
    )
  }