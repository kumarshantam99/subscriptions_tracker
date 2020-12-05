import { table } from './utils/Airtable.js';
import auth0 from './utils/auth0';
export default auth0.requireAuthentication (async (req, res) => {
    
    
    const { user } = await auth0.getSession(req);   
    const fields= req.body;
    const arr_from_json = JSON.parse( fields );
    
    try {
        const createdRecords = await table.create([{fields:{name:arr_from_json.name,url:arr_from_json.url,amount:arr_from_json.amount,date:arr_from_json.date,edate:arr_from_json.edate,userid:user.sub}}]);
        const createdRecord = {
            id: createdRecords[0].id,
            fields: createdRecords[0].fields,
        };
        
        res.statusCode = 200;
        res.json(createdRecord);
    } catch (error) {
        console.error(error);
        res.statusCode = 500;
        res.json({ msg: 'Something went wrong' });
    }
})