"use client"

import { WeightTracker } from "./weight-tracker"

export default function WeightTrackerWrapper({ detailed = false }: { detailed?: boolean }) {
  return <WeightTracker detailed={detailed} />
}
