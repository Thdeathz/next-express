'use client'

import { RxExit } from 'react-icons/rx'

import { IUserInfo } from '@/@types/auth'
import ROLE from '@/constants/roles'
import { useLogoutMutation } from '@/data/auth'

import Loading from '../loading'
import { Button } from '../ui/button'

import { UsersList } from './users-list'

type Props = {
  user: IUserInfo
  currentToken: string
}

export default function UserInfo({ user, currentToken }: Props) {
  const { mutateAsync, isSuccess } = useLogoutMutation()

  const isAdmin = user.role === ROLE.ADMIN

  const handleLogout = async () => {
    await mutateAsync()
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <p className="font-medium">
          {user.name} | {user.role}
        </p>

        <Button variant="ghost" tooltip="logout" onClick={handleLogout}>
          {isSuccess ? <Loading /> : <RxExit />}
        </Button>
      </div>

      <p className="mb-2 w-full break-words opacity-60">{currentToken}</p>

      {isAdmin && <UsersList />}
    </>
  )
}
