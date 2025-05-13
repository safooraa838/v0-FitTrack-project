"use client"

import { GoalsTracker } from "./goals-tracker"

export default function GoalsTrackerWrapper({ detailed = false }: { detailed?: boolean }) {
  return <GoalsTracker detailed={detailed} />
}
