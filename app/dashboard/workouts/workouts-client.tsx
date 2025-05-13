"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search } from "lucide-react"
import { WorkoutForm } from "@/components/dashboard/workout-form"

export default function WorkoutsClient() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Workouts</h1>
        <Button onClick={() => setShowForm(true)} className="bg-green-600 hover:bg-green-700">
          <Plus className="mr-2 h-4 w-4" />
          Add Workout
        </Button>
      </div>

      <Tabs defaultValue="history" className="space-y-4">
        <TabsList>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="plans">Workout Plans</TabsTrigger>
        </TabsList>
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Workout History</CardTitle>
                  <CardDescription>View and manage your past workouts</CardDescription>
                </div>
                <div className="relative w-64">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search workouts..." className="pl-8" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Workout</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Calories</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>May 12, 2025</TableCell>
                    <TableCell>Upper Body Strength</TableCell>
                    <TableCell>45 min</TableCell>
                    <TableCell>320</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>May 10, 2025</TableCell>
                    <TableCell>HIIT Cardio</TableCell>
                    <TableCell>30 min</TableCell>
                    <TableCell>450</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>May 8, 2025</TableCell>
                    <TableCell>Lower Body Strength</TableCell>
                    <TableCell>50 min</TableCell>
                    <TableCell>380</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>May 6, 2025</TableCell>
                    <TableCell>Yoga</TableCell>
                    <TableCell>60 min</TableCell>
                    <TableCell>220</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>May 4, 2025</TableCell>
                    <TableCell>Full Body Workout</TableCell>
                    <TableCell>55 min</TableCell>
                    <TableCell>410</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Workout Templates</CardTitle>
              <CardDescription>Create and manage your workout templates</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Workout templates content will go here</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="plans" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Workout Plans</CardTitle>
              <CardDescription>View and manage your workout plans</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Workout plans content will go here</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {showForm && <WorkoutForm onClose={() => setShowForm(false)} />}
    </div>
  )
}
