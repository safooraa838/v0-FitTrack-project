"use client"

import type React from "react"

import { useState } from "react"
import { NutritionForm } from "@/components/dashboard/nutrition-form"

export default function NutritionFormWrapper({ children }: { children: React.ReactNode }) {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <div onClick={() => setShowForm(true)}>{children}</div>
      {showForm && <NutritionForm onClose={() => setShowForm(false)} />}
    </>
  )
}
