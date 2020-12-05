import { table,minifyRecord } from './utils/Airtable.js';
import auth0 from './utils/auth0';

export default auth0.requireAuthentication(async (req, res) => {
    const { id,fields } = req.body;
    try {
        const updatedRecords = await table.update([
            { id,fields },
        ]);
       
        res.statusCode = 200;
        res.json(minifyRecord(updatedRecords[0]));
    } catch (error) {
        console.error(error);
        res.statusCode = 500;
        res.json({ msg: 'Something went wrong' });
    }
})


