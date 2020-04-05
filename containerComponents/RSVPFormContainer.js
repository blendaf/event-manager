import RSVPForm from '../uiComponents/RSVPForm'
import { useState } from 'react'

export default ({ visible }) => {
  const [noGuests, setNoGuests] = useState(1)
  return (
    <RSVPForm visible={visible} noGuests={noGuests} setNoGuests={setNoGuests} />
  )
}
