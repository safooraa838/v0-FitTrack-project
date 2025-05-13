"use client"

import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import { ActivityOverview } from "@/components/dashboard/activity-overview"
import { NutritionSummary } from "@/components/dashboard/nutrition-summary"
import { RecentWorkouts } from "@/components/dashboard/recent-workouts"
import { ProgressCharts } from "@/components/dashboard/progress-charts"
import { UpcomingWorkouts } from "@/components/dashboard/upcoming-workouts"

export default function DashboardTabs() {
  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
        <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
        <TabsTrigger value="progress">Progress</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Workouts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">+2 from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Minutes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">860</div>
              <p className="text-xs text-muted-foreground">+120 from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Calories Burned</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4,320</div>
              <p className="text-xs text-muted-foreground">+540 from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Goal Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">68%</div>
              <p className="text-xs text-muted-foreground">+12% from last week</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Activity Overview</CardTitle>
              <CardDescription>Your activity for the past 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
                <ActivityOverview />
              </Suspense>
            </CardContent>
          </Card>
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Upcoming Workouts</CardTitle>
              <CardDescription>Your scheduled workouts</CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
                <UpcomingWorkouts />
              </Suspense>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Nutrition Summary</CardTitle>
              <CardDescription>Your nutrition for today</CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
                <NutritionSummary />
              </Suspense>
            </CardContent>
          </Card>
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Recent Workouts</CardTitle>
              <CardDescription>Your most recent workouts</CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
                <RecentWorkouts />
              </Suspense>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="activity" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Activity Log</CardTitle>
            <CardDescription>Track and manage your workouts</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Activity tracking content will go here</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="nutrition" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Nutrition Log</CardTitle>
            <CardDescription>Track your meals and nutrition</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Nutrition tracking content will go here</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="progress" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Progress Tracking</CardTitle>
            <CardDescription>Monitor your fitness progress</CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
              <ProgressCharts />
            </Suspense>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
