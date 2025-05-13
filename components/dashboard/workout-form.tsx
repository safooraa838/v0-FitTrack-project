"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"

export function WorkoutForm({ onClose }: { onClose: () => void }) {
  const [exercises, setExercises] = useState([{ name: "", sets: "", reps: "", weight: "" }])

  const addExercise = () => {
    setExercises([...exercises, { name: "", sets: "", reps: "", weight: "" }])
  }

  const removeExercise = (index: number) => {
    const newExercises = [...exercises]
    newExercises.splice(index, 1)
    setExercises(newExercises)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-auto">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Log Workout</CardTitle>
                <CardDescription>Record your workout details</CardDescription>
              </div>
              <Button type="button" variant="ghost" size="icon" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="workout-name">Workout Name</Label>
                <Input id="workout-name" placeholder="Upper Body Strength" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="workout-type">Workout Type</Label>
                <Select>
                  <SelectTrigger id="workout-type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="strength">Strength</SelectItem>
                    <SelectItem value="cardio">Cardio</SelectItem>
                    <SelectItem value="hiit">HIIT</SelectItem>
                    <SelectItem value="flexibility">Flexibility</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" defaultValue={new Date().toISOString().split("T")[0]} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Duration (minutes)</Label>
                <Input id="duration" type="number" placeholder="45" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Exercises</Label>
                <Button type="button" variant="outline" size="sm" onClick={addExercise}>
                  Add Exercise
                </Button>
              </div>
              <div className="space-y-4">
                {exercises.map((exercise, index) => (
                  <div key={index} className="rounded-md border p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Exercise {index + 1}</h4>
                      {exercises.length > 1 && (
                        <Button type="button" variant="ghost" size="icon" onClick={() => removeExercise(index)}>
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`exercise-name-${index}`}>Exercise Name</Label>
                        <Input id={`exercise-name-${index}`} placeholder="Bench Press" />
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="space-y-2">
                          <Label htmlFor={`sets-${index}`}>Sets</Label>
                          <Input id={`sets-${index}`} placeholder="3" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`reps-${index}`}>Reps</Label>
                          <Input id={`reps-${index}`} placeholder="10" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`weight-${index}`}>Weight</Label>
                          <Input id={`weight-${index}`} placeholder="135" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Add any notes about your workout..." />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-green-600 hover:bg-green-700">
              Save Workout
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
