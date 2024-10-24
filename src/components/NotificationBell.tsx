import { BiSolidBellRing } from 'react-icons/bi'

type TNotificationBell = {
  message: string
}

const NotificationBell = (props: TNotificationBell) => {
  const { message } = props

  return (
    <div className='px-4 py-1 flex'>
      <span className='text-yellow-400 content-center mr-1'>
        <BiSolidBellRing />
      </span>
      <p className='truncate font-semibold text-sm tracking-wide text-sky-500'>
        {message}
      </p>
    </div>
  )
}

export default NotificationBell
