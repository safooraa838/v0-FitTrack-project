"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer } from "@/components/ui/chart"

const data = [
  { name: "Protein", value: 85, color: "#4ade80" },
  { name: "Carbs", value: 160, color: "#60a5fa" },
  { name: "Fat", value: 45, color: "#f87171" },
]

export function NutritionSummary() {
  return (
    <div className="h-[300px] w-full">
      <ChartContainer title="Macronutrients" description="Your macronutrient breakdown for today" className="h-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
              label={({ name, percent }) => `${name || ""} ${((percent || 0) * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}

export default NutritionSummary
