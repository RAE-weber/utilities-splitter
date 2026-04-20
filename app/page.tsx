import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center gap-8 md:flex-row">
        <Card className="w-full max-w-md rounded-sm border border-gray-500">
          <CardHeader>
            <CardTitle>Bill & Charges</CardTitle>
            <CardDescription>Total Bill and Cost Breakdown</CardDescription>
          </CardHeader>

          <CardContent>
            <form>
              <div className="flex flex-col gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="totalBill">Total Bill (RM)</Label>
                  <Input
                    id="totalBill"
                    type="number"
                    placeholder="123.45"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="totalUsage">Total Usage (kwh)</Label>
                  <Input
                    id="totalUsage"
                    type="number"
                    placeholder="123.45"
                    required
                  />
                </div>
              </div>

              <hr className="my-2" />

              <div className="my-4 text-sm font-semibold tracking-wider text-muted-foreground uppercase">
                Charges Breakdown
              </div>

              <div className="flex flex-col gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="energy">Energy Charge (RM/kwh)</Label>
                  <Input
                    id="energy"
                    type="number"
                    placeholder="123.45"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="capacity">Capacity Charge (RM/kwh)</Label>
                  <Input
                    id="capacity"
                    type="number"
                    placeholder="123.45"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="network">Network Charge (RM/kwh)</Label>
                  <Input
                    id="network"
                    type="number"
                    placeholder="123.45"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="misc">Miscellaneous Charges (RM)</Label>
                  <Input
                    id="misc"
                    type="number"
                    placeholder="123.45"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="rebate">Rebate (RM)</Label>
                  <Input
                    id="rebate"
                    type="number"
                    placeholder="123.45"
                    required
                  />
                </div>
              </div>
            </form>
          </CardContent>

          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Login
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-full max-w-md rounded-sm border border-gray-500">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
            <CardAction>
              <Button variant="link">Sign Up</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Login
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-full max-w-md rounded-sm border border-gray-500">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
            <CardAction>
              <Button variant="link">Sign Up</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Login
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
