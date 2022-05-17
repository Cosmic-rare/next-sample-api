import { useState, useEffect } from "react"

const HomePage = () => {
  const [message, setMessage] = useState("")
  useEffect(() => {
    const fetchMessage = async () => {
      const res = await fetch("/api/message")
      const data = await res.json()
      setMessage(data.message)
    }
    fetchMessage()
  })
  return <div>{message}</div>
}

export default HomePage
