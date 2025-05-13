"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Activity, BarChart3, Calendar, Heart, Home, Settings, Utensils, User, Watch, Dumbbell } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Sidebar() {
  const pathname = usePathname()

  const routes = [
    {
      label: "Dashboard",
      icon: Home,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      label: "Workouts",
      icon: Dumbbell,
      href: "/dashboard/workouts",
      active: pathname === "/dashboard/workouts",
    },
    {
      label: "Nutrition",
      icon: Utensils,
      href: "/dashboard/nutrition",
      active: pathname === "/dashboard/nutrition",
    },
    {
      label: "Progress",
      icon: BarChart3,
      href: "/dashboard/progress",
      active: pathname === "/dashboard/progress",
    },
    {
      label: "Calendar",
      icon: Calendar,
      href: "/dashboard/calendar",
      active: pathname === "/dashboard/calendar",
    },
    {
      label: "Health",
      icon: Heart,
      href: "/dashboard/health",
      active: pathname === "/dashboard/health",
    },
    {
      label: "Activity",
      icon: Activity,
      href: "/dashboard/activity",
      active: pathname === "/dashboard/activity",
    },
    {
      label: "Devices",
      icon: Watch,
      href: "/dashboard/devices",
      active: pathname === "/dashboard/devices",
    },
    {
      label: "Profile",
      icon: User,
      href: "/dashboard/profile",
      active: pathname === "/dashboard/profile",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
      active: pathname === "/dashboard/settings",
    },
  ]

  return (
    <div className="flex h-full w-64 flex-col border-r bg-muted/40">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <Heart className="h-5 w-5 text-green-500" />
          <span>FitTrack</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-2 text-sm font-medium">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground",
                route.active && "bg-muted text-foreground",
              )}
            >
              <route.icon className="h-4 w-4" />
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-auto p-4">
        <Button variant="outline" className="w-full">
          <Heart className="mr-2 h-4 w-4 text-green-500" />
          Upgrade to Pro
        </Button>
      </div>
    </div>
  )
}
