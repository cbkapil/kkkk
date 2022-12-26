export var unioncashSlip =  (firmname,
    branchname,
    totalamount,
    twothousandqty,
    twothousandamount,
    fivehundredqty,
    fivehundredamount,
    twohundredqty,
    twohundredamount,
    onehundredqty,
    onehundredamount,
    fiftyqty,
    fiftyamount,
    twentyqty,
    twentyamount,
    tenqty,
    tenamount,
    fiveqty,
    fiveamount,
    coinsamount,
    wamount,
    accnoBlocks,
    accnoBlocksRight,
    accoudate)=>{

        
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
      *{
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 0.8rem;
      }
      
      body{
        background-color: aliceblue;
      }
      
      /*A4 page size 1200X848  */
      .page{
        width: 1200px;
        height: 424px;/* half of page */
        display: flex;
        background-color: white;
        color : #2CAED0;
        font-weight: 600;
      }
      
      
      .left-container,
      .right-container{
        padding: 10px;
      }
      
      .left-container{
        border-right: 1px dashed #ccc;
      }

     


      
      /* left part of payslip  */
      
      .left{
        width: 320px;
        height: auto;
        border: 1px solid #5899B7;
      }

      .left >p{
        display : grid;
        place-items: center;
        padding : 2px 0 0 0;
      }
      
      .left > div{
        padding: 2px;
      }
      
      .left .logo{
        height: 65px;
      }
      
      .logo{
        display: flex;
        justify-content: space-between;
        padding: 4px;
      }
      
       .left .logo img{
        width: 100%;
        height: 60px;
      }
  
      .left .branch{
        display: flex;
      }

      .left .branch p:nth-child(1){
        width : 35%;
      }

      .left .branch p:nth-child(2){
        width : 35%;
        color : black;
      }
  
      .left .date {
        display: flex;
     
      }

      .left .date .daterow{
        display : flex;
    
      }

      .left .date .daterow .datecolumn{
        border: 1px solid #2CAED0;
        width: 24px;
        height: 20px;
        display: grid;
        place-items: center;
        font-size : 1rem;
        font-weight : bold;
        color : black;
      }
      
     
      
      .left .accountno .blocks{
        display: flex;
      }
      
      .left .blocks .block{
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 1px solid #2CAED0;
        display: grid;
        place-items: center;
        font-size: 1rem;
        font-weight: bold;
        color : black;
      }
      
      .left .name{
       display: flex;
       align-items: center;
      }
      
      .left .creditof p,
      .left .creditof p span{
        display: flex;
        flex-direction: column;
        font-size: 1rem;
        font-weight: bold;
        color : black;
      }
  
      .left .amounte {
        display : flex;
  
      }
  
     
  
      .left .amounte .row {
          display : flex;
          border : 1px solid #2CAED0;
          width : 100%;
      }
  .left .amounte .row .column1 {
        width : 5%;
        border-right: 1px solid #2CAED0;
        display : grid;
        place-items: center;
        font-size : 1rem;
      }
  .left .amounte .row .column2 {
        width : 75%;
        display : grid;
        place-items: center;
        font-size : 1rem;
        font-weight : bold;
        color : black;
      }
  .left .amounte .row .column3 {
        border-left: 1px solid #2CAED0 ;
        width : auto;
        font-size : 1rem;

        padding-left: 1%;
        padding-top: 2%;
      }
      
      .left .amount div{
        display : flex;
      }

      .left .amount div span:nth-child(1){
        color : #2CAED0;
        font-size : 0.6rem;
      }
      
      .left .details{
        padding: 0;
      }
      .left .details table{
        width: 100%;
        border-collapse: collapse;
      }
      
      .left .details table th{
        border: 1px solid #2CAED0;
        background-color: #2CAED0;
        color : white;
      }
      
      .left .details table tr td{
        height: 15px;
        border: 1px solid #2CAED0;
        text-align: center;
      }
      
      .left .details table tr td:first-child{
        width: 70%;
      }
  
      .left .details table .cheque p {
        font-size: 0.7rem;
      }
  
      .left .details table tr .tamount{
        border : none;
      }
      
      .left .sign{
        width: 100%;
        display: flex;
        padding: 0;
      }
  
      .left .sign .cash-passing-officer{
        width : 45%;
        margin-top: 0.5rem;
      
      }
      .left .sign .cash-passing-officer p{
        width : 100%;
       font-size: 0.6rem;
      
      }
  
      .left .sign .information{
  
        
        border : 1px solid #2CAED0;
      }
  
      .left .sign .information div{
        width : 100%;
        font-size : 0.6rem;
  
      }
  
  
      
      
      
      /* right part of payslip  */
      
      .right{
        width: 840px;
        height: auto;
        border: 1px solid #2CAED0;
        padding: 0;
        display : flex;
      }
  
      .right .amount-details{
        padding: 0;
        width : 300px;
        border : 1px solid #2CAED0;
      }
  
      .right .amount-details .top{
          padding : 3px;
      }

      .right .amount-details .top > p{
       display : grid;
       place-items : center;
      }
  
      .right .pan {
        display : flex;
  
      }
  
      .right .pan div{
        width : 15%;
      }
  
      .right .pan div > p {
        font-size: 0.7rem;
      }
  
      .right .pan .panrow {
          display : flex;
          border : 1px solid #2CAED0;
          width : 85%;
      }
      .right .pan .panrow .column {
        display : grid;
        place-items: center;
        font-size : 1rem;
        border-right: 1px solid #2CAED0;
        color : black;
      }
  
      .right .form60{
        display : flex;
      }
      
      .right .form60 p:nth-child(2){
        border : 1px solid #2CAED0;
        width : 20%;
        margin-left: 5%;
      }
  
      .right .amount-info{
        display : grid;
        place-items: center;
      }
  
      .right .amount-details h1{
        background-color: #2CAED0;
        color: white;
        font-size: 1rem;
        font-weight: bold;
        display : grid;
        place-items: center;
        
      }
  
      .right .amount-details table{
        width : 100%;
        border-collapse: collapse;
      }
  
      .right .amount-details table thead tr th {
        border: 1px solid #2CAED0;
  
      }
      .right .amount-details table tbody tr td{
        border: 1px solid #2CAED0;
        padding-left: 10px;
        height : 1.2rem;
      }
  
      .right .amount-details table thead tr th:nth-child(3){
        width : 50%;
      } 
  
      .right .amount-details table tbody tr td:nth-child(3){
        text-align: right;
        font-size: 0.9rem;
        color : black;
        padding : 0 5px 0 0;
      }

      .right .amount-details table tbody tr td:nth-child(2){
        text-align: center;
        font-size: 0.9rem;
        color : black;
      }

      .right .rtamount {
        display : grid;
        place-items : center;
        font-size : 1rem;
        font-weight : bold;
        color : black;

      }
  
      .right .amount-details .afooter p{
        font-size: 0.6rem;
      }
  
      .right .account-details{
        width : 530px;
        padding: 3px;
      }
  
      .right .logo{
        height: 65px;
      }
      
      .right .logo{
        display: flex;
        justify-content: space-between;
        padding: 4px;
      }
      
      .right .logo img{
        width: 50%;
        height: 60px;
      }

      .right .date {
        display: flex;
     
      }

      .right .date .daterow{
        display : flex;
    
      }

      .right .date .daterow .datecolumn{
        border: 1px solid #2CAED0;
        width: 24px;
        height: 24px;
        display: grid;
        place-items: center;
        font-size : 1rem;
        font-weight : bold;
        color : black;
      }
  
      .right .branch {
        display: flex;
        justify-content: space-between;
        width : 100%;
      }
  
      .right .branch .subbranch{
        width : 35%;
      }
      
      .right .branch .subbranch div{
        display: flex;
      }

      .right .branch .subbranch div p:nth-child(1){
        width : 35%;
      }
      
      .right .branch .subbranch div p:nth-child(2){
        color : black;
      }


  
      .right .branch .acc{
        width : 60%;
      }  

      .right .account-details .account-block .boxes{
        display : flex;
        margin-left : 30px;
        margin : 5px 0 0 0 ;
      }

      .right .account-block .boxes .box{
        border: 1px solid #2CAED0;
        width: 30px;
        height: 25px;
        display: grid;
        place-items: center;
        font-size : 1rem;
        font-weight: bold;
        color : black;
      }
  
      .right .name div{
        display : flex;
        justify-content: space-between;
        width : 100%;
      }

      .right .name div p:nth-child(1){
        width : 10%;
      }

      .right .mobile div{
        display : flex;
        justify-content: space-between;
        width : 100%;
      }

      .right .mobile div p:nth-child(1){
        width : 30%;
      }

      .right .e-mail div{
        display : flex;
        justify-content: space-between;
        width : 100%;
      }

      .right .e-mail div p:nth-child(1){
        width : 15%;
      }

      .right .w-amount div{
        display : flex;
        justify-content: space-between;
        width : 100%;
      }

      .right .w-amount div p:nth-child(1){
        width : 30%;
        margin : 0 0 5px 0;
      }

      
      .right .details{
        padding: 0;
      }
      .right .details table{
        width: 100%;
        border-collapse: collapse;
      }
      
      .right .details table th{
        border: 1px solid #2CAED0;
        background-color: #2CAED0;
        color : white;
      }
      
      .right .details table tr td{
        height: 18px;
        border: 1px solid #2CAED0;
        text-align: center;
      }
      
      .right .details table tr td:first-child{
        width: 70%;
      }
  
      .right .details table .cheque p {
        font-size: 0.7rem;
      }
  
      .right .details table tr .tamount{
        border : none;
      }
  
      .right .sign {
        display : flex;
      }
  
      .right .passing-officer{
        margin : 10px 0 0 0;
        width : 30%;
        border: 1px solid #2CAED0;
      }
  
      .right .passing-officer div{
        display: flex;
        justify-content: space-between;
      }
      .right .passing-officer div div {
        display : flex;
        flex-direction: column;
      }
  
      .right .cashier{
        margin : 60px 0 0 70px;
      }

      
  .borderbottom{
    border-bottom : 1px solid #2CAED0;
    width : 100%;
    display : grid;
    place-items: center;
    color : black;
  }
    
      </style>
    </head>
    <body>
      <div class="a4">
        <div class="page">
          <div class="left-container">
            <div class="left">
              <p>
                पैसे भरणा स्लीप / जमा पर्ची / DEPOSIT PAY IN SLIP
              </p>
              <div class="logo">
                <img alt="" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA3ADcAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAD8AxwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9UKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoooo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" alt="image uploaded" />
  
                
              
              </div>
              <div class="branch">
                <p>शाखा /Branch : </p>
                <p class="borderbottom">${branchname}</p>
              </div>
  
              <div class="date">
                <p>दिनांक /Date :</p>
                <div class="daterow">
                  ${accoudate}
                </div>
                
              </div>
            
            <div class="accountno">
              <small>बचत/चालू/ओडी/कॅश क्रेडिट/आवर्ती जमा खाते/टीएल/डीएल खाते/क्रेडिट कार्ड नं</small>
              <small>SB/CA/OD/CC/RD/TL/DL A/c No./Credit Card No.</small>
              <div class="blocks">${accnoBlocks}</div>
            </div>
            <div class="name">
              <p>
                <span>Name: </span>
               
              </p>
              <p class="borderbottom">${firmname}</p>
            </div>
            <div class="name">
              <p>
                <span>Tel. No.: </span>
               
              </p>
              <p class="borderbottom"></p>
            </div>
            <div class="amounte">
              <div>
                <p>राशि</p>
                <p>Amount</p>
              </div>
              <div class="row">
                 <div class="column1"> <p>₹</p> </div>
                 <div class="column2">${totalamount}</div>
                 <div class="column3">पैसे</div>
              </div>
             
            </div>
            <div class="amount">
               <span>रु. शब्दों में </span>
              <div>
               
                <span>Rupees in words:</span>
                <span class="borderbottom">${wamount}</span>
              </div>
            </div>
            <div class="details">
              <table>
                <tr>
                  <th class="cheque">
                    <p>नकदी/ चेक सं दिनांक एवं बैंक व शाखा का नाम</p>
                    <p>Cash/Cheque No./Date & Name of Bank & Branch</p>
                  </th>
                  <th> 
                    <p>₹</p> 
                  </th>
                  <th>
                    <p>P.</p>
                    <p>पै</p>
                  </th>
                </tr>
                <tr>
                 <td></td>
                 <td></td>
                 <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                 </tr>
                 <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                 </tr>
                 
                 <tr>
                  <td class="tamount">कुल रुपये Total ₹</td>
                  <td></td>
                  <td></td>
                 </tr>
              </table>
            </div>
            <div class="sign">
              <div class="cash-passing-officer">
                <p>अधिकारी/ रोकड़िया एकल खिड़की संचालक</p> 
                <p>Officer/Cashier/SWO</p> 
              </div>
              <div class="information">
                <div>यूनियन बैंक ऑफ़ इंडिया टोल फ्री 24 घंटे कॉल सेंटर</div>
                <div>Union Bank of India Toll Free 24 hours call centre</div>
                <div> टोल फ्री नं./Toll Free No. 1800-22-2244</div>
              </div>
            </div>
          
            </div>
          </div>
  
          <div class="right-container">
            <div class="right">
              <div class="amount-details">
                <div class="top">
                  <p> पैसे भरणा स्लीप / जमा पर्ची / DEPOSIT PAY IN SLIP</p>
                  <div class="pan">
                    <div >
                      <p>पैन कार्ड सं.</p>
                      <p>PAN No.</p>
                    </div>
                    <div class="panrow">
                       <div class="column"></div>
                       <div class="column"></div>
                       <div class="column"></div>
                       <div class="column"></div>
                       <div class="column"></div>
                       <div class="column"></div>
                       <div class="column"></div>
                       <div class="column"></div>
                       <div class="column"></div>
                       <div class="column"></div>
                    </div>
                   
                  </div>
                  <div >
                    <p>or</p>
                    <div class="form60">
                      <p>फॉर्म 60/Form 60</p>
                      <p ></p>
                    </div>
                  </div>
                  <div class="amount-info">
                    <p>₹ 50,000/- एवं अधिक की नकदी जमा हेतु</p>
                    <p>For Cash Deposit of ₹ 50,000/- & Above</p>
                  </div>
                 
                </div>
                <h1>रोख जमा विवरण/ नकदी जमा/CASH DEPOSIT</h1>
                <table>
                  <thead>
                    <tr>
                      <th>नोट/ Notes</th>
                      <th>सं./ No.</th>
                      <th>₹</th>
                      <th>पैसे/P.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2000 x</td>
                      <td>${(twothousandqty === 0 || twothousandqty === null )? '' : (twothousandqty)} </td>
                      <td>${(twothousandamount === 0)? '' : (twothousandamount)}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>500 x</td>
                      <td>${(fivehundredqty===0 || fivehundredqty === null)? '': (fivehundredqty)}</td>
                      <td>${(fivehundredamount ===0)? '' : (fivehundredamount)} </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>200 x</td>
                      <td>${(twohundredqty===0 || twohundredqty === null)? '' : (twohundredqty)}</td>
                      <td>${(twohundredamount===0)? '' : (twohundredamount)} </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>100 x</td>
                      <td>${(onehundredqty===0 || onehundredqty === null)? '' : (onehundredqty)}</td>
                      <td>${(onehundredamount===0)? '' : (onehundredamount)} </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>50 x</td>
                      <td>${(fiftyqty===0 || fiftyqty=== null)? '' : (fiftyqty)}</td>
                      <td>${(fiftyamount===0)? '' : (fiftyamount)} </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>20 x</td>
                      <td>${(twentyqty===0 || twentyqty === null)? '' : (twentyqty)}</td>
                      <td>${(twentyamount===0)? '' : (twentyamount)} </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>10 x</td>
                      <td>${(tenqty===0 || tenqty === null)? '' : (tenqty)}</td>
                      <td>${(tenamount===0)? '' : (tenamount)} </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>5 x</td>
                      <td>${(fiveqty===0 || fiveqty === null)? '' : (fiveqty)}</td>
                      <td>${(fiveamount===0)? '' : (fiveamount)}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>2 x</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>1 x</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>सिक्के/Coins</td>
                      <td></td>
                      <td>${(coinsamount===0)? '' : (coinsamount)} </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td colspan = "2">एकूण/ कुल/ Total </td>
                      <td class="rtamount">${totalamount}</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                <div class="afooter">
                  <p>1. सभी चेक क्रॉस किये जाएं |</p>
                  <p>2. कृपया चेक के पीछे अपना खाता सं.,मोबाइल नं व नाम लिखें |</p>
                  <p>3. कृपया नकदी जमा, बाहरी केंद्र के चेक और स्थानीय चेक के लिए अलग - अलग पर्चियों का प्रयोग करें|</p>
                  <p>1. All cheque must be crossed.</p>
                  <p>2. Please mention your A/c No., Mobile No. and Name on bank of the cheque</p>
                  <p>3. Please use seperate slip for Cash Deposit,outstation cheques and local cheques.</p>
                </div>
              </div>
             
              <div class="account-details">
                <div class="logo">
                  <img alt="" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA3ADcAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAD8AxwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9UKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoooo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" alt="image uploaded" />
    
                  <div class="date">
                    <div>
                      <p>दिनांक</p>
                      <p>Date</p>
                    </div>
                    <div class="daterow">
                      ${accoudate}
                    </div>
                  </div>
                
                </div>
  
                <div class="branch">
                  <div class="subbranch">
                    <p>शाखा</p>
                    <div>
                      <p>Branch : </p>
                      <P class="borderbottom">${branchname}</P>
                    </div>
  
                    
                  </div>
                  <div class="subacc">
                    <small>बचत/चालू/ओडी/कॅश क्रेडिट/आवर्ती जमा खाते/टीएल/डीएल खाते/क्रेडिट कार्ड नं.</small><br/>
                    <small>SB/CA/OD/CC/RD/TL/DL A/c No./Credit Card No.</small>
                  </div>
                </div>
                <div class="account-block">
                  <div class="boxes">
                  ${accnoBlocksRight}
                  </div>
                </div>
                <div class="name">
                  <p>नाम / नाव</p>
                  <div>
                    <p>Name : </p>
                    <p class="borderbottom">${firmname}</p>
                  </div>
                </div>
                <div class="mobile">
                  <p>टेलीफोन नं / मोबाइल नं</p>
                  <div>
                    <p>Tel. No. / Mobile No. : </p>
                    <p class="borderbottom"></p>
                  </div>
                </div>
                <div class="e-mail">
                  <p>ई-मेल आईडी</p>
                  <div>
                    <p>E-mail ID: </p>
                    <p class="borderbottom"></p>
                  </div>
                </div>
                <div class="w-amount">
                  <p>₹ शब्दों में/ अक्षरी रकम</p>
                  <div>
                    <p>Rupees in words : </p>
                    <p class="borderbottom">${wamount}</p>
                  </div>
                </div>
  
                <div class="details">
                  <table>
                    <tr>
                      <th class="cheque">
                        <p>नकदी/ चेक सं दिनांक एवं बैंक व शाखा का नाम</p>
                        <p>Cash/Cheque No./Date & Name of Bank & Branch</p>
                      </th>
                      <th> 
                        <p>₹</p> 
                      </th>
                      <th>
                        <p>P.</p>
                        <p>पै</p>
                      </th>
                    </tr>
                    <tr>
                     <td></td>
                     <td></td>
                     <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                     </tr>
                     <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                     </tr>
                     
                     <tr>
                      <td class="tamount">कुल रुपये Total ₹</td>
                      <td></td>
                      <td></td>
                     </tr>
                  </table>
                </div>
  
                <div class="sign">
                  <div class="passing-officer">
                    <p>ट्रान्जैक्शन आईडी</p>
                    <p>Transaction Id</p>
                    <div>
                      <div>
                        <p>एसडब्ल्यूओ</p> <br/>
                        <p>SWO</p>
                      </div>
                      <div>
                        <p>पारितकर्ता अधिकारी</p> <br/>
                        <p>Passing Officer</p>
                      </div>
                    </div>
                  </div>
                  <div class="cashier">
                      <p>जमा करणार / जमाकर्ता के हस्ताक्षर / Signature of Depositor</p>
                  </div>
                </div>
  
              </div>
            </div>
           
          </div>
         
        </div>
    </body>
    </html>
        `
}

export var unionchequeslip = (firmname,
  branchname,
  date,
  result,
  quantity,
  wamount,
    dataa,
    bankname,
    accountno,
    accnoBlocks,
    accnoBlocksRight,
    accoudate)=>{
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    *{
      font-family: Arial, Helvetica, sans-serif;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-size: 0.8rem;
    }
    
    body{
      background-color: aliceblue;
    }
    
    /*A4 page size 1200X848  */
    .page{
      width: 1200px;
      height: 424px;/* half of page */
      display: flex;
      background-color: white;
      color : #2CAED0;
      font-weight: 600;
    }
    
    
    .left-container,
    .right-container{
      padding: 10px;
    }
    
    .left-container{
      border-right: 1px dashed #ccc;
    }

   


    
    /* left part of payslip  */
    
    .left{
      width: 320px;
      height: auto;
      border: 1px solid #5899B7;
    }

    .left >p{
      display : grid;
      place-items: center;
      padding : 2px 0 0 0;
    }
    
    .left > div{
      padding: 2px;
    }
    
    .left .logo{
      height: 65px;
    }
    
    .logo{
      display: flex;
      justify-content: space-between;
      padding: 4px;
    }
    
     .left .logo img{
      width: 100%;
      height: 60px;
    }

    .left .branch{
      display: flex;
    }

    .left .branch p:nth-child(1){
      width : 35%;
    }

    .left .branch p:nth-child(2){
      width : 35%;
      color : black;
    }

    .left .date {
      display: flex;
   
    }

    .left .date .daterow{
      display : flex;
  
    }

    .left .date .daterow .datecolumn{
      border: 1px solid #2CAED0;
      width: 24px;
      height: 20px;
      display: grid;
      place-items: center;
      font-size : 1rem;
      font-weight : bold;
      color : black;
    }
    
   
    
    .left .accountno .blocks{
      display: flex;
    }
    
    .left .blocks .block{
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 1px solid #2CAED0;
      display: grid;
      place-items: center;
      font-size: 1rem;
      font-weight: bold;
      color : black;
    }
    
    .left .name{
     display: flex;
     align-items: center;
    }
    
    .left .creditof p,
    .left .creditof p span{
      display: flex;
      flex-direction: column;
      font-size: 1rem;
      font-weight: bold;
      color : black;
    }

    .left .amounte {
      display : flex;

    }

   

    .left .amounte .row {
        display : flex;
        border : 1px solid #2CAED0;
        width : 100%;
    }
.left .amounte .row .column1 {
      width : 5%;
      border-right: 1px solid #2CAED0;
      display : grid;
      place-items: center;
      font-size : 1rem;
    }
.left .amounte .row .column2 {
      width : 75%;
      display : grid;
      place-items: center;
      font-size : 1rem;
      font-weight : bold;
      color : black;
    }
.left .amounte .row .column3 {
      border-left: 1px solid #2CAED0 ;
      width : auto;
      font-size : 1rem;

      padding-left: 1%;
      padding-top: 2%;
    }
    
    .left .amount div{
      display : flex;
    }

    .left .amount div span:nth-child(1){
      color : #2CAED0;
      font-size : 0.6rem;
    }
    
    .left .details{
      padding: 0;
    }
    .left .details table{
      width: 100%;
      border-collapse: collapse;
    }
    
    .left .details table th{
      border: 1px solid #2CAED0;
      background-color: #2CAED0;
      color : white;
    }
    
    .left .details table tr td{
      height: 15px;
      border: 1px solid #2CAED0;
      text-align: center;
    }
    
    .left .details table tr td:first-child{
      width: 70%;
    }

    .left .details table .cheque p {
      font-size: 0.7rem;
    }

    .left .details table tr .tamount{
      border : none;
    }
    
    .left .sign{
      width: 100%;
      display: flex;
      padding: 0;
    }

    .left .sign .cash-passing-officer{
      width : 45%;
      margin-top: 0.5rem;
    
    }
    .left .sign .cash-passing-officer p{
      width : 100%;
     font-size: 0.6rem;
    
    }

    .left .sign .information{

      
      border : 1px solid #2CAED0;
    }

    .left .sign .information div{
      width : 100%;
      font-size : 0.6rem;

    }


    
    
    
    /* right part of payslip  */
    
    .right{
      width: 840px;
      height: auto;
      border: 1px solid #2CAED0;
      padding: 0;
      display : flex;
    }

    .right .amount-details{
      padding: 0;
      width : 300px;
      border : 1px solid #2CAED0;
    }

    .right .amount-details .top{
        padding : 3px;
    }

    .right .amount-details .top > p{
     display : grid;
     place-items : center;
    }

    .right .pan {
      display : flex;

    }

    .right .pan div{
      width : 15%;
    }

    .right .pan div > p {
      font-size: 0.7rem;
    }

    .right .pan .panrow {
        display : flex;
        border : 1px solid #2CAED0;
        width : 85%;
    }
    .right .pan .panrow .column {
      display : grid;
      place-items: center;
      font-size : 1rem;
      border-right: 1px solid #2CAED0;
      color : black;
    }

    .right .form60{
      display : flex;
    }
    
    .right .form60 p:nth-child(2){
      border : 1px solid #2CAED0;
      width : 20%;
      margin-left: 5%;
    }

    .right .amount-info{
      display : grid;
      place-items: center;
    }

    .right .amount-details h1{
      background-color: #2CAED0;
      color: white;
      font-size: 1rem;
      font-weight: bold;
      display : grid;
      place-items: center;
      
    }

    .right .amount-details table{
      width : 100%;
      border-collapse: collapse;
    }

    .right .amount-details table thead tr th {
      border: 1px solid #2CAED0;

    }
    .right .amount-details table tbody tr td{
      border: 1px solid #2CAED0;
      padding-left: 10px;
      height : 1.2rem;
    }

    .right .amount-details table thead tr th:nth-child(3){
      width : 50%;
    } 

    .right .amount-details table tbody tr td:nth-child(3){
      text-align: right;
      font-size: 0.9rem;
      color : black;
    }

    .right .amount-details table tbody tr td:nth-child(2){
      text-align: right;
      font-size: 0.9rem;
      color : black;
    }

    .right .rtamount {
      display : grid;
      place-items : center;
      font-size : 1rem;
      font-weight : bold;
      color : black;

    }

    .right .amount-details .afooter p{
      font-size: 0.6rem;
    }

    .right .account-details{
      width : 530px;
      padding: 3px;
    }

    .right .logo{
      height: 65px;
    }
    
    .right .logo{
      display: flex;
      justify-content: space-between;
      padding: 4px;
    }
    
    .right .logo img{
      width: 50%;
      height: 60px;
    }

    .right .date {
      display: flex;
   
    }

    .right .date .daterow{
      display : flex;
  
    }

    .right .date .daterow .datecolumn{
      border: 1px solid #2CAED0;
      width: 24px;
      height: 24px;
      display: grid;
      place-items: center;
      font-size : 1rem;
      font-weight : bold;
      color : black;
    }

    .right .branch {
      display: flex;
      justify-content: space-between;
      width : 100%;
    }

    .right .branch .subbranch{
      width : 35%;
    }
    
    .right .branch .subbranch div{
      display: flex;
    }

    .right .branch .subbranch div p:nth-child(1){
      width : 35%;
    }
    
    .right .branch .subbranch div p:nth-child(2){
      color : black;
    }



    .right .branch .acc{
      width : 60%;
    }  

    .right .account-details .account-block .boxes{
      display : flex;
      margin-left : 30px;
      margin : 5px 0 0 0 ;
    }

    .right .account-block .boxes .box{
      border: 1px solid #2CAED0;
      width: 30px;
      height: 25px;
      display: grid;
      place-items: center;
      font-size : 1rem;
      font-weight: bold;
      color : black;
    }

    .right .name div{
      display : flex;
      justify-content: space-between;
      width : 100%;
    }

    .right .name div p:nth-child(1){
      width : 10%;
    }

    .right .mobile div{
      display : flex;
      justify-content: space-between;
      width : 100%;
    }

    .right .mobile div p:nth-child(1){
      width : 30%;
    }

    .right .e-mail div{
      display : flex;
      justify-content: space-between;
      width : 100%;
    }

    .right .e-mail div p:nth-child(1){
      width : 15%;
    }

    .right .w-amount div{
      display : flex;
      justify-content: space-between;
      width : 100%;
    }

    .right .w-amount div p:nth-child(1){
      width : 30%;
      margin : 0 0 5px 0;
    }

    
    .right .details{
      padding: 0;
    }
    .right .details table{
      width: 100%;
      border-collapse: collapse;
    }
    
    .right .details table th{
      border: 1px solid #2CAED0;
      background-color: #2CAED0;
      color : white;
    }
    
    .right .details table tr td{
      height: 18px;
      border: 1px solid #2CAED0;
      text-align: center;
    }
    
    .right .details table tr td:first-child{
      width: 70%;
    }

    .right .details table .cheque p {
      font-size: 0.7rem;
    }

    .right .details table tr .tamount{
      border : none;
    }

    .right .sign {
      display : flex;
    }

    .right .passing-officer{
      margin : 10px 0 0 0;
      width : 30%;
      border: 1px solid #2CAED0;
    }

    .right .passing-officer div{
      display: flex;
      justify-content: space-between;
    }
    .right .passing-officer div div {
      display : flex;
      flex-direction: column;
    }

    .right .cashier{
      margin : 60px 0 0 70px;
    }

    
.borderbottom{
  border-bottom : 1px solid #2CAED0;
  width : 100%;
  display : grid;
  place-items: center;
  color : black;
}

.page1{
  width : 1100px;
  height : 800px;
  margin-left : 100px;
  padding-right : 100px;
  padding-top : 80px;


}

.headers{
          width : 1200px;
          height : 30vh;
          display : flex !important;
          
      }
      .firstheader{
          width: 600px;
          height: 100%;
          padding: 8px;
          border : 3px solid black; 
          
      }
      .firstheaderdiv{
          display : flex !important;
          margin: 10px;
          
      }
      .firstheaderdiv > h1{
        font-size: 18px;
      }
      .firstheaderdiv > h1:nth-child(2){
          margin-left:  10px;
      }
      .secondheader{
          width : 500px;
          height: auto;
          padding: 10px;
          border : 3px solid black; 
      }

      .bodysection{
          width : 1100px;
          padding-left: 10px;
      }

      .bodytable{
          width : 100%;
          border-collapse:  collapse;
          border : 3px solid black;
          
      }

      .bodytable > thead > tr >th{
        padding: 3px;
        margin : 3px;
        font-size: 20px;
        font-weight: 700;
    }

    .bodytable > tbody > tr >td{
      padding: 3px;
      margin : 3px;
      font-size: 18px;
      font-weight: 500;
    }

    

      .bodytable > thead > tr{
          border-bottom: 3px solid black;
      }

      .footer {
          width : 1000px !important;

      }
      .tamounts {
          display : flex !important;
          margin-left: 800px;
          padding: 15px;
      }
      .tamounts > h1 {
         font-size: 18px;
      }
      .tamounts >h1:nth-child(2){
        margin-left:  10px;
      }

      .wamount {
          display : flex !important;
          margin-left: 100px;
          padding: 5px;
      }

      .wamount > h1{
        font-size: 18px;
      }

      .wamount >h1:nth-child(2){
        margin-left:  10px;
      }
  
    </style>
  </head>
  <body>
    <div class="a4">
      <div class="page">
        <div class="left-container">
          <div class="left">
            <p>
              पैसे भरणा स्लीप / जमा पर्ची / DEPOSIT PAY IN SLIP
            </p>
            <div class="logo">
              <img alt="" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA3ADcAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAD8AxwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9UKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoooo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" alt="image uploaded" />

              
            
            </div>
            <div class="branch">
              <p>शाखा /Branch : </p>
              <p class="borderbottom">${branchname}</p>
            </div>

            <div class="date">
              <p>दिनांक /Date :</p>
              <div class="daterow">
                ${accoudate}
              </div>
              
            </div>
          
          <div class="accountno">
            <small>बचत/चालू/ओडी/कॅश क्रेडिट/आवर्ती जमा खाते/टीएल/डीएल खाते/क्रेडिट कार्ड नं</small>
            <small>SB/CA/OD/CC/RD/TL/DL A/c No./Credit Card No.</small>
            <div class="blocks">${accnoBlocks}</div>
          </div>
          <div class="name">
            <p>
              <span>Name: </span>
             
            </p>
            <p class="borderbottom">${firmname}</p>
          </div>
          <div class="name">
            <p>
              <span>Tel. No.: </span>
             
            </p>
            <p class="borderbottom"></p>
          </div>
          <div class="amounte">
            <div>
              <p>राशि</p>
              <p>Amount</p>
            </div>
            <div class="row">
               <div class="column1"> <p>₹</p> </div>
               <div class="column2">${result}</div>
               <div class="column3">पैसे</div>
            </div>
           
          </div>
          <div class="amount">
             <span>रु. शब्दों में </span>
            <div>
             
              <span>Rupees in words:</span>
              <span class="borderbottom">${wamount}</span>
            </div>
          </div>
          <div class="details">
            <table>
              <tr>
                <th class="cheque">
                  <p>नकदी/ चेक सं दिनांक एवं बैंक व शाखा का नाम</p>
                  <p>Cash/Cheque No./Date & Name of Bank & Branch</p>
                </th>
                <th> 
                  <p>₹</p> 
                </th>
                <th>
                  <p>P.</p>
                  <p>पै</p>
                </th>
              </tr>
              <tr>
               <td>${quantity} No. of cheques</td>
               <td></td>
               <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
               </tr>
               <tr>
                <td></td>
                <td></td>
                <td></td>
               </tr>
               
               <tr>
                <td class="tamount">कुल रुपये Total ₹</td>
                <td>${result}</td>
                <td></td>
               </tr>
            </table>
          </div>
          <div class="sign">
            <div class="cash-passing-officer">
              <p>अधिकारी/ रोकड़िया एकल खिड़की संचालक</p> 
              <p>Officer/Cashier/SWO</p> 
            </div>
            <div class="information">
              <div>यूनियन बैंक ऑफ़ इंडिया टोल फ्री 24 घंटे कॉल सेंटर</div>
              <div>Union Bank of India Toll Free 24 hours call centre</div>
              <div> टोल फ्री नं./Toll Free No. 1800-22-2244</div>
            </div>
          </div>
        
          </div>
        </div>

        <div class="right-container">
          <div class="right">
            <div class="amount-details">
              <div class="top">
                <p> पैसे भरणा स्लीप / जमा पर्ची / DEPOSIT PAY IN SLIP</p>
                <div class="pan">
                  <div >
                    <p>पैन कार्ड सं.</p>
                    <p>PAN No.</p>
                  </div>
                  <div class="panrow">
                     <div class="column"></div>
                     <div class="column"></div>
                     <div class="column"></div>
                     <div class="column"></div>
                     <div class="column"></div>
                     <div class="column"></div>
                     <div class="column"></div>
                     <div class="column"></div>
                     <div class="column"></div>
                     <div class="column"></div>
                  </div>
                 
                </div>
                <div >
                  <p>or</p>
                  <div class="form60">
                    <p>फॉर्म 60/Form 60</p>
                    <p ></p>
                  </div>
                </div>
                <div class="amount-info">
                  <p>₹ 50,000/- एवं अधिक की नकदी जमा हेतु</p>
                  <p>For Cash Deposit of ₹ 50,000/- & Above</p>
                </div>
               
              </div>
              <h1>रोख जमा विवरण/ नकदी जमा/CASH DEPOSIT</h1>
              <table>
                <thead>
                  <tr>
                    <th>नोट/ Notes</th>
                    <th>सं./ No.</th>
                    <th>₹</th>
                    <th>पैसे/P.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2000 x</td>
                    <td> </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>500 x</td>
                    <td></td>
                    <td> </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>200 x</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>100 x</td>
                    <td></td>
                    <td> </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>50 x</td>
                    <td></td>
                    <td> </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>20 x</td>
                    <td></td>
                    <td> </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>10 x</td>
                    <td></td>
                    <td> </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>5 x</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>2 x</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>1 x</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>सिक्के/Coins</td>
                    <td></td>
                    <td> </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colspan = "2">एकूण/ कुल/ Total </td>
                    <td class="rtamount"></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <div class="afooter">
                <p>1. सभी चेक क्रॉस किये जाएं |</p>
                <p>2. कृपया चेक के पीछे अपना खाता सं.,मोबाइल नं व नाम लिखें |</p>
                <p>3. कृपया नकदी जमा, बाहरी केंद्र के चेक और स्थानीय चेक के लिए अलग - अलग पर्चियों का प्रयोग करें|</p>
                <p>1. All cheque must be crossed.</p>
                <p>2. Please mention your A/c No., Mobile No. and Name on bank of the cheque</p>
                <p>3. Please use seperate slip for Cash Deposit,outstation cheques and local cheques.</p>
              </div>
            </div>
           
            <div class="account-details">
              <div class="logo">
                <img alt="" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA3ADcAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAD8AxwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9UKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoooo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" alt="image uploaded" />
  
                <div class="date">
                  <div>
                    <p>दिनांक</p>
                    <p>Date</p>
                  </div>
                  <div class="daterow">
                    ${accoudate}
                  </div>
                </div>
              
              </div>

              <div class="branch">
                <div class="subbranch">
                  <p>शाखा</p>
                  <div>
                    <p>Branch : </p>
                    <P class="borderbottom">${branchname}</P>
                  </div>

                  
                </div>
                <div class="subacc">
                  <small>बचत/चालू/ओडी/कॅश क्रेडिट/आवर्ती जमा खाते/टीएल/डीएल खाते/क्रेडिट कार्ड नं.</small><br/>
                  <small>SB/CA/OD/CC/RD/TL/DL A/c No./Credit Card No.</small>
                </div>
              </div>
              <div class="account-block">
                <div class="boxes">
                ${accnoBlocksRight}
                </div>
              </div>
              <div class="name">
                <p>नाम / नाव</p>
                <div>
                  <p>Name : </p>
                  <p class="borderbottom">${firmname}</p>
                </div>
              </div>
              <div class="mobile">
                <p>टेलीफोन नं / मोबाइल नं</p>
                <div>
                  <p>Tel. No. / Mobile No. : </p>
                  <p class="borderbottom"></p>
                </div>
              </div>
              <div class="e-mail">
                <p>ई-मेल आईडी</p>
                <div>
                  <p>E-mail ID: </p>
                  <p class="borderbottom"></p>
                </div>
              </div>
              <div class="w-amount">
                <p>₹ शब्दों में/ अक्षरी रकम</p>
                <div>
                  <p>Rupees in words : </p>
                  <p class="borderbottom">${wamount}</p>
                </div>
              </div>

              <div class="details">
                <table>
                  <tr>
                    <th class="cheque">
                      <p>नकदी/ चेक सं दिनांक एवं बैंक व शाखा का नाम</p>
                      <p>Cash/Cheque No./Date & Name of Bank & Branch</p>
                    </th>
                    <th> 
                      <p>₹</p> 
                    </th>
                    <th>
                      <p>P.</p>
                      <p>पै</p>
                    </th>
                  </tr>
                  <tr>
                   <td>${quantity} No. of cheques</td>
                   <td></td>
                   <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                   </tr>
                   <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                   </tr>
                   
                   <tr>
                    <td class="tamount">कुल रुपये Total ₹</td>
                    <td>${result}</td>
                    <td></td>
                   </tr>
                </table>
              </div>

              <div class="sign">
                <div class="passing-officer">
                  <p>ट्रान्जैक्शन आईडी</p>
                  <p>Transaction Id</p>
                  <div>
                    <div>
                      <p>एसडब्ल्यूओ</p> <br/>
                      <p>SWO</p>
                    </div>
                    <div>
                      <p>पारितकर्ता अधिकारी</p> <br/>
                      <p>Passing Officer</p>
                    </div>
                  </div>
                </div>
                <div class="cashier">
                    <p>जमा करणार / जमाकर्ता के हस्ताक्षर / Signature of Depositor</p>
                </div>
              </div>

            </div>
          </div>
         
        </div>
       
      </div>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <div class="a4">
        <div class="page1">
          <section class="headers">
            <div class="firstheader">
                <div class="firstheaderdiv">
                    <h1>Bank Name</h1>
                    <h1>${bankname} </h1>
                </div>
                <div class="firstheaderdiv">
                    <h1>Branch Name</h1>
                    <h1>${branchname}</h1>
                </div>
                <div class="firstheaderdiv">
                    <h1>Deposit Date</h1>
                    <h1>${date}</h1>
                </div>
            </div>
            <div class="secondheader">
                <div class="firstheaderdiv">
                    <h1>A/c Name</h1>
                    <h1>${firmname}</h1>
                </div>
                <div class="firstheaderdiv"> 
                    <h1>A/c No.</h1>
                    <h1>${accountno}</h1>
                </div>
                <div class="firstheaderdiv">
                    <h1>Total Rs.</h1>
                    <h1>${result}</h1>
                </div>
            </div>
        </section>
        <section class="bodysection">
            <table class="bodytable">
                <thead >
                    <tr>
                        <th>Sr No.</th>
                        <th>Chq Date</th>
                        <th>Party Name</th>
                        <th>Bank Name</th>
                        <th>Branch</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    ${dataa && dataa.map((item,index)=>`
                    <tr key=${index}>
                      <td>${index+1}</td>
                      <td>${new Date(item?.chequedate).toLocaleDateString('es-CL')}</td>
                      <td>${item.partyname}</td>
                      <td>${item.partybankname}</td>
                      <td>${item.partybranchname}</td>
                      <td>${item.amount}</td>
                    </tr>
                    `)}
                </tbody>
                
            </table>
        </section>
    
        <section class="footer">
            <div class="tamounts">
                <h1>Total </h1>
                <h1>${result}</h1>
            </div>
            <div class="wamount">
                <h1>Amount In words</h1>
                <h1>${wamount}</h1>
            </div>
            <div class="wamount">
                <h1>No. of Cheques</h1>
                <h1>${quantity}</h1>
            </div>
    
        </section>
        </div>
      </div>
  </body>
  </html>
  `
}