import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, AlertTriangle, Fuel, FileCheck, TrendingUp } from "lucide-react"

export function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="bg-blue-50 hover:shadow-md transition-shadow cursor-pointer">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Active Vehicles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Car className="h-8 w-8 text-blue-600 mr-2" />
              <div className="text-2xl font-bold">42</div>
            </div>
            <div className="flex items-center text-emerald-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm">+5.2%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-amber-50 hover:shadow-md transition-shadow cursor-pointer">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Maintenance Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <AlertTriangle className="h-8 w-8 text-amber-600 mr-2" />
              <div className="text-2xl font-bold">7</div>
            </div>
            <div className="flex items-center text-rose-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm">+2</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-emerald-50 hover:shadow-md transition-shadow cursor-pointer">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Fuel Efficiency Score</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Fuel className="h-8 w-8 text-emerald-600 mr-2" />
              <div className="text-2xl font-bold">7.2 km/l</div>
            </div>
            <div className="flex items-center text-emerald-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm">+0.3</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-sky-50 hover:shadow-md transition-shadow cursor-pointer">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Compliance Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileCheck className="h-8 w-8 text-sky-600 mr-2" />
              <div className="text-2xl font-bold">96%</div>
            </div>
            <div className="flex items-center text-emerald-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm">+2.1%</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

