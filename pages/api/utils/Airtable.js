require('dotenv').config()
const Airtable=require('airtable')
const base=new Airtable({apiKey:process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_ID)
const table=base(process.env.AIRTABLE_TABLE_NAME)
const minifyRecords=(records)=>{
    return records.map(record=>minifyRecord(record))
}
const minifyRecord=(record)=>{
    if(!record.fields.archive){
        record.fields.archive=false
    }
    return{
        id:record.id,
        fields:record.fields
    }
}
export {table,minifyRecord,minifyRecords}