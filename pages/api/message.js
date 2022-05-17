export default function hander(req, res) {
  console.log("Message API")
  res.status(200).json({ message: "Hello Next.js!" })
}
