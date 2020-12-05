import { table,minifyRecord } from './utils/Airtable.js';
import auth0 from './utils/auth0';
import OwnsRecord from '../middleware/OwnsRecord.js';

export default auth0.requireAuthentication(async (req, res) => {
    const { id } = req.body;
    try {
        const deletedRecords = await table.destroy([
            id
        ]);
       
        res.statusCode = 200;
        res.json(minifyRecord(deletedRecords[0]));
    } catch (error) {
        console.error(error);
        res.statusCode = 500;
        res.json({ msg: 'Something went wrong' });
    }
})
