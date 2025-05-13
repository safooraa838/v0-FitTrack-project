"use client"

import { MeasurementsTracker } from "./measurements-tracker"

export default function MeasurementsTrackerWrapper({ detailed = false }: { detailed?: boolean }) {
  return <MeasurementsTracker detailed={detailed} />
}
