"use client"

import { Suspense, useState } from "react"
import dynamic from "next/dynamic"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"

// Dynamically import all chart components with ssr: false
const ProgressCharts = dynamic(() => import("@/components/dashboard/progress-charts-wrapper"), {
  ssr: false,
  loading: () => <Skeleton className="h-[300px] w-full" />,
})

const WeightTracker = dynamic(() => import("@/components/dashboard/weight-tracker-wrapper"), {
  ssr: false,
  loading: () => <Skeleton className="h-[300px] w-full" />,
})

const MeasurementsTracker = dynamic(() => import("@/components/dashboard/measurements-tracker-wrapper"), {
  ssr: false,
  loading: () => <Skeleton className="h-[300px] w-full" />,
})

const GoalsTracker = dynamic(() => import("@/components/dashboard/goals-tracker-wrapper"), {
  ssr: false,
  loading: () => <Skeleton className="h-[300px] w-full" />,
})

export default function ProgressClient() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Progress</h1>
      </div>

      <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="weight">Weight</TabsTrigger>
          <TabsTrigger value="measurements">Measurements</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Progress Overview</CardTitle>
                <CardDescription>Track your fitness progress over time</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                {activeTab === "overview" && (
                  <Suspense fallback={<Skeleton className="h-full w-full" />}>
                    <ProgressCharts />
                  </Suspense>
                )}
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Weight Tracking</CardTitle>
                <CardDescription>Monitor your weight changes</CardDescription>
              </CardHeader>
              <CardContent>
                {activeTab === "overview" && (
                  <Suspense fallback={<Skeleton className="h-[200px] w-full" />}>
                    <WeightTracker />
                  </Suspense>
                )}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Body Measurements</CardTitle>
                <CardDescription>Track your body measurements</CardDescription>
              </CardHeader>
              <CardContent>
                {activeTab === "overview" && (
                  <Suspense fallback={<Skeleton className="h-[200px] w-full" />}>
                    <MeasurementsTracker />
                  </Suspense>
                )}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Fitness Goals</CardTitle>
                <CardDescription>Monitor your goal progress</CardDescription>
              </CardHeader>
              <CardContent>
                {activeTab === "overview" && (
                  <Suspense fallback={<Skeleton className="h-[200px] w-full" />}>
                    <GoalsTracker />
                  </Suspense>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="weight" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Weight Tracking</CardTitle>
              <CardDescription>Monitor your weight changes over time</CardDescription>
            </CardHeader>
            <CardContent className="h-[500px]">
              {activeTab === "weight" && (
                <Suspense fallback={<Skeleton className="h-full w-full" />}>
                  <WeightTracker detailed />
                </Suspense>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="measurements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Body Measurements</CardTitle>
              <CardDescription>Track your body measurements over time</CardDescription>
            </CardHeader>
            <CardContent className="h-[500px]">
              {activeTab === "measurements" && (
                <Suspense fallback={<Skeleton className="h-full w-full" />}>
                  <MeasurementsTracker detailed />
                </Suspense>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="goals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Fitness Goals</CardTitle>
              <CardDescription>Set and track your fitness goals</CardDescription>
            </CardHeader>
            <CardContent className="h-[500px]">
              {activeTab === "goals" && (
                <Suspense fallback={<Skeleton className="h-full w-full" />}>
                  <GoalsTracker detailed />
                </Suspense>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
