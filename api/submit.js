export default function handler(req, res) {
  let body = '';
  req.on('data', chunk => { body += chunk.toString(); });
  req.on('end', () => {
    try {
      const data = JSON.parse(body);
      console.log('Password submitted:', data.password);
      res.status(200).json({ message: 'Received!' });
    } catch {
      res.status(400).json({ message: 'Bad request' });
    }
  });
}
