"use client"

import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

const goals = [
  {
    id: 1,
    name: "Lose 10 lbs",
    progress: 70,
    target: "10 lbs",
    current: "7 lbs",
    deadline: "June 30, 2025",
  },
  {
    id: 2,
    name: "Run 5K under 25 minutes",
    progress: 85,
    target: "25:00",
    current: "26:30",
    deadline: "July 15, 2025",
  },
  {
    id: 3,
    name: "Bench press 200 lbs",
    progress: 60,
    target: "200 lbs",
    current: "180 lbs",
    deadline: "August 1, 2025",
  },
]

export function GoalsTracker({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className={detailed ? "space-y-4" : ""}>
      {detailed && (
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-medium">Fitness Goals</h3>
            <p className="text-sm text-muted-foreground">Track your progress towards your goals</p>
          </div>
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="mr-2 h-4 w-4" />
            Add Goal
          </Button>
        </div>
      )}
      <div className="space-y-4">
        {goals.map((goal) => (
          <div key={goal.id} className="space-y-2">
            <div className="flex justify-between">
              <div>
                <h4 className="font-medium">{goal.name}</h4>
                <p className="text-sm text-muted-foreground">
                  Current: {goal.current} / Target: {goal.target}
                </p>
              </div>
              <div className="text-right text-sm">
                <div>{goal.progress}%</div>
                <div className="text-muted-foreground">Due {goal.deadline}</div>
              </div>
            </div>
            <Progress value={goal.progress} className="h-2" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default GoalsTracker
