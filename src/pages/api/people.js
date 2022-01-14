export default (req, res) => {
    fetch(process.env.API_URL)
        .then(response => response.json())
        .then(json => {
            if(json.statusCode !== 200) res.status(400).json(json.message);
            res.status(200).json(json.body)
        });
}
