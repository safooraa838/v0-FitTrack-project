"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { day: "Mon", minutes: 45, calories: 320 },
  { day: "Tue", minutes: 60, calories: 450 },
  { day: "Wed", minutes: 30, calories: 280 },
  { day: "Thu", minutes: 75, calories: 520 },
  { day: "Fri", minutes: 45, calories: 350 },
  { day: "Sat", minutes: 90, calories: 620 },
  { day: "Sun", minutes: 60, calories: 410 },
]

export function ActivityOverview() {
  return (
    <div className="h-[300px] w-full">
      <ChartContainer title="Activity Overview" description="Your activity for the past 7 days" className="h-full">
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
            <XAxis dataKey="day" />
            <YAxis yAxisId="left" orientation="left" stroke="#82ca9d" />
            <YAxis yAxisId="right" orientation="right" stroke="#8884d8" />
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
                              <span>Minutes: {payload[0]?.value || 0}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-[#8884d8]" />
                              <span>Calories: {payload[1]?.value || 0}</span>
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
            <Bar yAxisId="left" dataKey="minutes" fill="#82ca9d" name="Minutes" />
            <Bar yAxisId="right" dataKey="calories" fill="#8884d8" name="Calories" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}

export default ActivityOverview
