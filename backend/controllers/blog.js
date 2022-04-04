export function time(req, res) {
  res.json({ time: Date().toString() });
}
