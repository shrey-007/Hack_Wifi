export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;
        console.log(`Received username: ${username}, password: ${password}`);

        // You could also save to a file if you want persistence (optional)
        // fs.appendFileSync('log.txt', `${username} ${password}\n`);

        return res.status(200).json({ message: 'Form submitted successfully!' });
    }

    res.status(405).json({ message: 'Method not allowed' });
}
