'use client'

import Loading from '@/components/loading'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useGetUsersQuery } from '@/data/user'

export function UsersList() {
  const { data: users, isLoading } = useGetUsersQuery()

  if (!users || isLoading) return <Loading />

  return (
    <ScrollArea>
      <Table className="mb-4">
        <TableCaption>Users list.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Nickname</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>ROLE</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="max-w-[5rem] truncate">{user.id}</TableCell>
              <TableCell className="w-min whitespace-nowrap">{user.name}</TableCell>
              <TableCell className="w-min whitespace-nowrap">{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
