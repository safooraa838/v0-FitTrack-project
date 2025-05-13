"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

const data = [
  { name: "Chest", current: 42, previous: 43 },
  { name: "Waist", current: 34, previous: 36 },
  { name: "Hips", current: 40, previous: 41 },
  { name: "Arms", current: 15, previous: 14.5 },
  { name: "Thighs", current: 24, previous: 25 },
]

export function MeasurementsTracker({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className={detailed ? "space-y-4" : ""}>
      {detailed && (
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-medium">Body Measurements</h3>
            <p className="text-sm text-muted-foreground">Track your body composition changes</p>
          </div>
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="mr-2 h-4 w-4" />
            Log Measurements
          </Button>
        </div>
      )}
      <div className={detailed ? "h-[400px]" : "h-[200px]"}>
        <ChartContainer className="h-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <ChartTooltip>
                        <ChartTooltipContent
                          content={
                            <div className="flex flex-col gap-2">
                              <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[#82ca9d]" />
                                <span>Current: {payload[0]?.value || 0} in</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[#8884d8]" />
                                <span>Previous: {payload[1]?.value || 0} in</span>
                              </div>
                            </div>
                          }
                        />
                      </ChartTooltip>
                    )
                  }
                  return null
                }}
              />
              <Legend />
              <Bar dataKey="current" fill="#82ca9d" name="Current" />
              <Bar dataKey="previous" fill="#8884d8" name="Previous" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  )
}

export default MeasurementsTracker
