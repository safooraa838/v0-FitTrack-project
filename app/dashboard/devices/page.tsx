"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Watch, Smartphone, Activity, RefreshCw } from "lucide-react"

export default function DevicesPage() {
  const [devices, setDevices] = useState([
    { id: 1, name: "Fitbit Charge 5", type: "Fitness Tracker", connected: true, lastSync: "Today, 10:23 AM" },
    { id: 2, name: "Apple Watch Series 8", type: "Smartwatch", connected: true, lastSync: "Today, 9:45 AM" },
    { id: 3, name: "iPhone 14 Pro", type: "Smartphone", connected: true, lastSync: "Today, 10:30 AM" },
    { id: 4, name: "Garmin Forerunner 255", type: "GPS Watch", connected: false, lastSync: "May 5, 2025" },
  ])

  const toggleConnection = (id: number) => {
    setDevices(devices.map((device) => (device.id === id ? { ...device, connected: !device.connected } : device)))
  }

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case "Fitness Tracker":
      case "GPS Watch":
        return <Activity className="h-8 w-8 text-green-500" />
      case "Smartwatch":
        return <Watch className="h-8 w-8 text-green-500" />
      case "Smartphone":
        return <Smartphone className="h-8 w-8 text-green-500" />
      default:
        return <Activity className="h-8 w-8 text-green-500" />
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Connected Devices</h1>
        <Button className="bg-green-600 hover:bg-green-700">Connect New Device</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {devices.map((device) => (
          <Card key={device.id}>
            <CardHeader className="flex flex-row items-start gap-4">
              {getDeviceIcon(device.type)}
              <div className="space-y-1">
                <CardTitle>{device.name}</CardTitle>
                <CardDescription>{device.type}</CardDescription>
                <Badge
                  variant={device.connected ? "default" : "outline"}
                  className={device.connected ? "bg-green-500" : ""}
                >
                  {device.connected ? "Connected" : "Disconnected"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor={`device-${device.id}`}>Connection</Label>
                  <Switch
                    id={`device-${device.id}`}
                    checked={device.connected}
                    onCheckedChange={() => toggleConnection(device.id)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Last synced</span>
                  <span className="text-sm">{device.lastSync}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" disabled={!device.connected}>
                <RefreshCw className="mr-2 h-4 w-4" />
                Sync Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Device Permissions</CardTitle>
          <CardDescription>Manage what data your devices can access and share</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="workout-data">Workout Data</Label>
                <p className="text-sm text-muted-foreground">Allow devices to read and write workout data</p>
              </div>
              <Switch id="workout-data" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="health-metrics">Health Metrics</Label>
                <p className="text-sm text-muted-foreground">Allow devices to read and write health metrics</p>
              </div>
              <Switch id="health-metrics" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="location">Location</Label>
                <p className="text-sm text-muted-foreground">
                  Allow devices to access your location for workout tracking
                </p>
              </div>
              <Switch id="location" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="notifications">Notifications</Label>
                <p className="text-sm text-muted-foreground">Allow devices to send you notifications</p>
              </div>
              <Switch id="notifications" defaultChecked />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
