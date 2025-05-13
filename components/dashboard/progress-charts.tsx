"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { date: "Jan", weight: 185, strength: 100, cardio: 70 },
  { date: "Feb", weight: 182, strength: 110, cardio: 75 },
  { date: "Mar", weight: 178, strength: 120, cardio: 80 },
  { date: "Apr", weight: 175, strength: 130, cardio: 85 },
  { date: "May", weight: 172, strength: 140, cardio: 90 },
]

export function ProgressCharts() {
  return (
    <div className="h-[300px] w-full">
      <ChartContainer title="Fitness Progress" description="Your progress over the past 5 months" className="h-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
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
                              <div className="h-2 w-2 rounded-full bg-[#8884d8]" />
                              <span>Weight: {payload[0]?.value || 0} lbs</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-[#82ca9d]" />
                              <span>Strength: {payload[1]?.value || 0}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-[#ffc658]" />
                              <span>Cardio: {payload[2]?.value || 0}</span>
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
            <Line type="monotone" dataKey="weight" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="strength" stroke="#82ca9d" />
            <Line type="monotone" dataKey="cardio" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}

export default ProgressCharts
