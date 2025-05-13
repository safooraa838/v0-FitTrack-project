import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

export function UpcomingWorkouts() {
  const workouts = [
    {
      id: 1,
      name: "Lower Body Strength",
      date: "Today",
      time: "5:30 PM",
      type: "Strength",
    },
    {
      id: 2,
      name: "Yoga Flow",
      date: "Tomorrow",
      time: "7:00 AM",
      type: "Flexibility",
    },
    {
      id: 3,
      name: "HIIT Cardio",
      date: "May 15",
      time: "6:00 PM",
      type: "Cardio",
    },
  ]

  return (
    <div className="space-y-4">
      {workouts.map((workout) => (
        <div key={workout.id} className="flex items-center justify-between rounded-lg border p-3">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-green-100 p-2">
              <Calendar className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h4 className="font-medium">{workout.name}</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{workout.date}</span>
                <span>•</span>
                <span>{workout.time}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline">{workout.type}</Badge>
            <Button variant="ghost" size="sm">
              Edit
            </Button>
          </div>
        </div>
      ))}
      <Button variant="outline" className="w-full">
        View Calendar
      </Button>
    </div>
  )
}

export default UpcomingWorkouts
