import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Dumbbell, Heart, LineChart, Utensils, Watch } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Heart className="h-6 w-6 text-green-500" />
            <span>FitTrack</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Track Your Fitness Journey
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Log workouts, track nutrition, monitor progress, and connect with your favorite fitness devices.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#features">
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt="Fitness Dashboard Preview"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  src="/placeholder.svg?height=550&width=750"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Everything You Need</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our comprehensive platform helps you track every aspect of your fitness journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-green-100 p-3">
                  <Dumbbell className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Workout Tracking</h3>
                <p className="text-center text-muted-foreground">
                  Log your exercises, sets, reps, and weights with our intuitive workout tracker.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-green-100 p-3">
                  <Utensils className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Nutrition Logging</h3>
                <p className="text-center text-muted-foreground">
                  Track your meals, calories, macros, and water intake to maintain a balanced diet.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-green-100 p-3">
                  <LineChart className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Progress Analytics</h3>
                <p className="text-center text-muted-foreground">
                  Visualize your progress with detailed charts and insights to stay motivated.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-green-100 p-3">
                  <Watch className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Device Integration</h3>
                <p className="text-center text-muted-foreground">
                  Connect with your favorite fitness devices and apps to sync your data automatically.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-green-100 p-3">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Health Metrics</h3>
                <p className="text-center text-muted-foreground">
                  Monitor vital health metrics like heart rate, sleep quality, and more.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-green-100 p-3">
                  <ArrowRight className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Smart Reminders</h3>
                <p className="text-center text-muted-foreground">
                  Get personalized workout suggestions and reminders to stay on track.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 font-semibold">
            <Heart className="h-5 w-5 text-green-500" />
            <span>FitTrack</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} FitTrack. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
