import express from "express";
import { samplepdf } from "./GetCashSlip.js";
import puppeteer from 'puppeteer';

const router = express.Router();

router.get('/', async (req, res) => {
    res.json({
        message : "hello world"
    })
})

router.post('/getcashslips', async (req, res,data) => {
   
    try {
            // Create a browser instance
            const browser = await puppeteer.launch();
          
            // Create a new page
            const page = await browser.newPage();
          
          
            await page.setContent(samplepdf, {encoding : 'utf-8', waitUntil:'domcontentloaded' });
          
            // To reflect CSS used for screens instead of print
            await page.emulateMediaType('screen');
          
            // Downlaod the PDF
            const pdf = await page.pdf({
            //   path: 'result.pdf',
              // margin: { top: '50px', right: '50px', bottom: '0px', left: '50px' },
              format: 'A4',
              printBackground: true,
              landscape : true,
            });

                // Close the browser instance
                await browser.close();

            res.send(pdf);
          
        
          
       
    } catch (error) {
        console.log(error)
    }
});


export default router;