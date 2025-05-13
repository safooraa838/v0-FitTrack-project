"use client"

import type React from "react"

import { useState } from "react"
import { WorkoutForm } from "@/components/dashboard/workout-form"

export default function WorkoutFormWrapper({ children }: { children: React.ReactNode }) {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <div onClick={() => setShowForm(true)}>{children}</div>
      {showForm && <WorkoutForm onClose={() => setShowForm(false)} />}
    </>
  )
}
