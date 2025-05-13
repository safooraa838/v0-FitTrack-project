"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Plus, Search } from "lucide-react"
import { NutritionForm } from "@/components/dashboard/nutrition-form"
import { Progress } from "@/components/ui/progress"

export default function NutritionClient() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Nutrition</h1>
        <Button onClick={() => setShowForm(true)} className="bg-green-600 hover:bg-green-700">
          <Plus className="mr-2 h-4 w-4" />
          Log Meal
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Calories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,450 / 2,200</div>
            <Progress value={65} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">750 calories remaining</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Protein</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85g / 140g</div>
            <Progress value={60} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">55g remaining</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Carbs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">160g / 220g</div>
            <Progress value={72} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">60g remaining</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fat</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45g / 70g</div>
            <Progress value={64} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">25g remaining</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="today" className="space-y-4">
        <TabsList>
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="meals">Saved Meals</TabsTrigger>
        </TabsList>
        <TabsContent value="today" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Today's Meals</CardTitle>
                  <CardDescription>Track your food intake for today</CardDescription>
                </div>
                <div className="relative w-64">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search meals..." className="pl-8" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Time</TableHead>
                    <TableHead>Meal</TableHead>
                    <TableHead>Calories</TableHead>
                    <TableHead>Protein</TableHead>
                    <TableHead>Carbs</TableHead>
                    <TableHead>Fat</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>7:30 AM</TableCell>
                    <TableCell>Breakfast</TableCell>
                    <TableCell>450</TableCell>
                    <TableCell>25g</TableCell>
                    <TableCell>60g</TableCell>
                    <TableCell>12g</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>12:15 PM</TableCell>
                    <TableCell>Lunch</TableCell>
                    <TableCell>620</TableCell>
                    <TableCell>35g</TableCell>
                    <TableCell>70g</TableCell>
                    <TableCell>20g</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>3:30 PM</TableCell>
                    <TableCell>Snack</TableCell>
                    <TableCell>180</TableCell>
                    <TableCell>10g</TableCell>
                    <TableCell>15g</TableCell>
                    <TableCell>8g</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>7:00 PM</TableCell>
                    <TableCell>Dinner</TableCell>
                    <TableCell>200</TableCell>
                    <TableCell>15g</TableCell>
                    <TableCell>15g</TableCell>
                    <TableCell>5g</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Nutrition History</CardTitle>
              <CardDescription>View your past nutrition logs</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Nutrition history content will go here</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="meals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Saved Meals</CardTitle>
              <CardDescription>Your saved meals and recipes</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Saved meals content will go here</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {showForm && <NutritionForm onClose={() => setShowForm(false)} />}
    </div>
  )
}
