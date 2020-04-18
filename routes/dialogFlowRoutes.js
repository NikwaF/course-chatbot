const chatbot = require('../chatbot/chatbot');


module.exports = app => {
  // console.log(JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS));
  console.log()

  app.get('/', (req,res) => {
    res.json({
      data: 'hello world'
    })
  });

  app.post('/api/df_text_query', async (req,res) => {
    try{
      let response = await chatbot.textQuery(req.body.text, req.body.parameters);
      res.send(response[0].queryResult); 

    } catch(err){
      console.log(err);
    }
  });
 
}