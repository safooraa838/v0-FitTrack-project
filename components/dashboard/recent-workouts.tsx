import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dumbbell, MonitorIcon as Running, SpaceIcon as Yoga } from "lucide-react"

export function RecentWorkouts() {
  const workouts = [
    {
      id: 1,
      name: "Upper Body Strength",
      date: "May 12, 2025",
      duration: "45 min",
      type: "Strength",
      icon: Dumbbell,
    },
    {
      id: 2,
      name: "HIIT Cardio",
      date: "May 10, 2025",
      duration: "30 min",
      type: "Cardio",
      icon: Running,
    },
    {
      id: 3,
      name: "Yoga Flow",
      date: "May 8, 2025",
      duration: "60 min",
      type: "Flexibility",
      icon: Yoga,
    },
  ]

  return (
    <div className="space-y-4">
      {workouts.map((workout) => (
        <div key={workout.id} className="flex items-center justify-between rounded-lg border p-3">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-green-100 p-2">
              <workout.icon className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h4 className="font-medium">{workout.name}</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{workout.date}</span>
                <span>•</span>
                <span>{workout.duration}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline">{workout.type}</Badge>
            <Button variant="ghost" size="sm">
              View
            </Button>
          </div>
        </div>
      ))}
      <Button variant="outline" className="w-full">
        View All Workouts
      </Button>
    </div>
  )
}

export default RecentWorkouts
