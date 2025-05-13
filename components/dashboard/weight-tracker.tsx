"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

const data = [
  { date: "May 1", weight: 175 },
  { date: "May 3", weight: 174 },
  { date: "May 5", weight: 173.5 },
  { date: "May 7", weight: 173 },
  { date: "May 9", weight: 172.5 },
  { date: "May 11", weight: 172 },
  { date: "May 13", weight: 172 },
]

export function WeightTracker({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className={detailed ? "space-y-4" : ""}>
      {detailed && (
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-medium">Current Weight</h3>
            <p className="text-3xl font-bold">172 lbs</p>
            <p className="text-sm text-muted-foreground">-3 lbs from starting weight</p>
          </div>
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="mr-2 h-4 w-4" />
            Log Weight
          </Button>
        </div>
      )}
      <div className={detailed ? "h-[400px]" : "h-[200px]"}>
        <ChartContainer className="h-full">
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
              <YAxis domain={["dataMin - 2", "dataMax + 2"]} />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <ChartTooltip>
                        <ChartTooltipContent
                          content={
                            <div className="flex flex-col gap-2">
                              <div className="flex items-center gap-2">
                                <span>Date: {payload[0]?.payload?.date || ""}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[#82ca9d]" />
                                <span>Weight: {payload[0]?.value || 0} lbs</span>
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
              <Line type="monotone" dataKey="weight" stroke="#82ca9d" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  )
}

export default WeightTracker
