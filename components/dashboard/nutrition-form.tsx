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

export function NutritionForm({ onClose }: { onClose: () => void }) {
  const [foods, setFoods] = useState([{ name: "", servingSize: "", calories: "", protein: "", carbs: "", fat: "" }])

  const addFood = () => {
    setFoods([...foods, { name: "", servingSize: "", calories: "", protein: "", carbs: "", fat: "" }])
  }

  const removeFood = (index: number) => {
    const newFoods = [...foods]
    newFoods.splice(index, 1)
    setFoods(newFoods)
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
                <CardTitle>Log Meal</CardTitle>
                <CardDescription>Record your meal details</CardDescription>
              </div>
              <Button type="button" variant="ghost" size="icon" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="meal-type">Meal Type</Label>
                <Select>
                  <SelectTrigger id="meal-type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="breakfast">Breakfast</SelectItem>
                    <SelectItem value="lunch">Lunch</SelectItem>
                    <SelectItem value="dinner">Dinner</SelectItem>
                    <SelectItem value="snack">Snack</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="meal-time">Time</Label>
                <Input id="meal-time" type="time" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Foods</Label>
                <Button type="button" variant="outline" size="sm" onClick={addFood}>
                  Add Food
                </Button>
              </div>
              <div className="space-y-4">
                {foods.map((food, index) => (
                  <div key={index} className="rounded-md border p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Food {index + 1}</h4>
                      {foods.length > 1 && (
                        <Button type="button" variant="ghost" size="icon" onClick={() => removeFood(index)}>
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`food-name-${index}`}>Food Name</Label>
                        <Input id={`food-name-${index}`} placeholder="Chicken Breast" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`serving-size-${index}`}>Serving Size</Label>
                        <Input id={`serving-size-${index}`} placeholder="100g" />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-2 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor={`calories-${index}`}>Calories</Label>
                        <Input id={`calories-${index}`} placeholder="165" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`protein-${index}`}>Protein (g)</Label>
                        <Input id={`protein-${index}`} placeholder="31" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`carbs-${index}`}>Carbs (g)</Label>
                        <Input id={`carbs-${index}`} placeholder="0" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`fat-${index}`}>Fat (g)</Label>
                        <Input id={`fat-${index}`} placeholder="3.6" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Add any notes about your meal..." />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-green-600 hover:bg-green-700">
              Save Meal
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
