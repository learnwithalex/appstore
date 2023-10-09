"use client"
import AppDetails from '@/app/components/apps/AppDetails'
import AppHeader from '@/app/components/apps/AppHeader'
import AppRelated from '@/app/components/apps/AppRelated'
import AppScreenshots from '@/app/components/apps/AppScreenshots'
import App from '@/app/components/home/Header'
import React from 'react'

export default function Page({ params }: { params: { id: string } }) {
    return (
        <>
        <App />
        <div className='p-7'>
        <AppHeader
        app_name={params.id}
        />
        <AppScreenshots />
        <div className='mobile-flex'>
        <AppDetails />
        <AppRelated />
        </div>
        </div>
        </>
    )
  }