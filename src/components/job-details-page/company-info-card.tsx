import { Briefcase, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function CompanyInfoCard() {
  return (
    <Card className="w-full lg:w-[300px] mt-5">
      <CardContent className="p-6 flex flex-col items-center space-y-4">
        <Image
          src="/placeholder.svg?height=100&width=200"
          alt="Tecno Mobile"
          width={200}
          height={100}
          className="mb-4"
        />
        <h2 className="text-xl font-bold text-center">Tecno mobile</h2>
        <Button variant="outline" className="w-full">
          FOLLOW
        </Button>
        <div className="w-full pt-4 space-y-4">
          <h3 className="font-semibold">Company overview</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Briefcase className="w-4 h-4" />
              Website:
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Address:
            </div>
          </div>
          <Button variant="link" className="p-0 h-auto text-blue-500">
            More Jobs From This Company →
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

