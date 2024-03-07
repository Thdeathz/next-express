import UserInfo from '@/components/home/user-info'
import ThemeButton from '@/components/theme-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { auth } from '@/server/auth'

export default async function Home() {
  const session = await auth()

  return (
    <Card>
      <ScrollArea className="aspect-square h-[30rem]">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Home</CardTitle>

            <ThemeButton />
          </div>
        </CardHeader>

        <CardContent className="w-[30rem]">
          {session && <UserInfo user={session.user} currentToken={session.accessToken} />}
        </CardContent>
      </ScrollArea>
    </Card>
  )
}
