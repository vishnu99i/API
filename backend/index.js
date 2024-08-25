import express from "express";

const app = express();

app.get("/api/products",(req,res) => {
   const products = [
      {
         id: 1,
         name: "phone1",
         price: 10000,
         image: "https://www.google.com/imgres?q=samsung%20s23%20ultra&imgurl=https%3A%2F%2Frukminim2.flixcart.com%2Fimage%2F850%2F1000%2Fxif0q%2Fmobile%2Fm%2Fl%2Fo%2F-original-imagmg6gzjf7gggt.jpeg%3Fq%3D90%26crop%3Dfalse&imgrefurl=https%3A%2F%2Fwww.flipkart.com%2Fsamsung-galaxy-s23-ultra-5g-phantom-black-256-gb%2Fp%2Fitm15952643ba06d%3Fpid%3DMOBGMFFX6E6SGYWC%26lid%3DLSTMOBGMFFX6E6SGYWCF0WEXV%26marketplace%3DFLIPKART&docid=UGjw8WdaCknMiM&tbnid=HDCavfkmGnZk3M&vet=12ahUKEwij_tPDzY-IAxVOwzgGHR2PCFgQM3oECBgQAA..i&w=850&h=850&hcb=2&ved=2ahUKEwij_tPDzY-IAxVOwzgGHR2PCFgQM3oECBgQAA",
      },
      {
         id: 2,
         name: "phone2",
         price: 20000,
         image: "https://www.google.com/imgres?q=samsung%20s23%20ultra&imgurl=https%3A%2F%2Frukminim2.flixcart.com%2Fimage%2F850%2F1000%2Fxif0q%2Fmobile%2Fm%2Fl%2Fo%2F-original-imagmg6gzjf7gggt.jpeg%3Fq%3D90%26crop%3Dfalse&imgrefurl=https%3A%2F%2Fwww.flipkart.com%2Fsamsung-galaxy-s23-ultra-5g-phantom-black-256-gb%2Fp%2Fitm15952643ba06d%3Fpid%3DMOBGMFFX6E6SGYWC%26lid%3DLSTMOBGMFFX6E6SGYWCF0WEXV%26marketplace%3DFLIPKART&docid=UGjw8WdaCknMiM&tbnid=HDCavfkmGnZk3M&vet=12ahUKEwij_tPDzY-IAxVOwzgGHR2PCFgQM3oECBgQAA..i&w=850&h=850&hcb=2&ved=2ahUKEwij_tPDzY-IAxVOwzgGHR2PCFgQM3oECBgQAA",
      },
      {
         id: 3,
         name: "phone3",
         price: 30000,
         image: "https://www.google.com/imgres?q=samsung%20s23%20ultra&imgurl=https%3A%2F%2Frukminim2.flixcart.com%2Fimage%2F850%2F1000%2Fxif0q%2Fmobile%2Fm%2Fl%2Fo%2F-original-imagmg6gzjf7gggt.jpeg%3Fq%3D90%26crop%3Dfalse&imgrefurl=https%3A%2F%2Fwww.flipkart.com%2Fsamsung-galaxy-s23-ultra-5g-phantom-black-256-gb%2Fp%2Fitm15952643ba06d%3Fpid%3DMOBGMFFX6E6SGYWC%26lid%3DLSTMOBGMFFX6E6SGYWCF0WEXV%26marketplace%3DFLIPKART&docid=UGjw8WdaCknMiM&tbnid=HDCavfkmGnZk3M&vet=12ahUKEwij_tPDzY-IAxVOwzgGHR2PCFgQM3oECBgQAA..i&w=850&h=850&hcb=2&ved=2ahUKEwij_tPDzY-IAxVOwzgGHR2PCFgQM3oECBgQAA",
      },
      {
         id: 4,
         name: "phone4",
         price: 40000,
         image: "https://www.google.com/imgres?q=samsung%20s23%20ultra&imgurl=https%3A%2F%2Frukminim2.flixcart.com%2Fimage%2F850%2F1000%2Fxif0q%2Fmobile%2Fm%2Fl%2Fo%2F-original-imagmg6gzjf7gggt.jpeg%3Fq%3D90%26crop%3Dfalse&imgrefurl=https%3A%2F%2Fwww.flipkart.com%2Fsamsung-galaxy-s23-ultra-5g-phantom-black-256-gb%2Fp%2Fitm15952643ba06d%3Fpid%3DMOBGMFFX6E6SGYWC%26lid%3DLSTMOBGMFFX6E6SGYWCF0WEXV%26marketplace%3DFLIPKART&docid=UGjw8WdaCknMiM&tbnid=HDCavfkmGnZk3M&vet=12ahUKEwij_tPDzY-IAxVOwzgGHR2PCFgQM3oECBgQAA..i&w=850&h=850&hcb=2&ved=2ahUKEwij_tPDzY-IAxVOwzgGHR2PCFgQM3oECBgQAA",
      },
      {
         id: 5,
         name: "phone5",
         price: 50000,
         image: "https://www.google.com/imgres?q=samsung%20s23%20ultra&imgurl=https%3A%2F%2Frukminim2.flixcart.com%2Fimage%2F850%2F1000%2Fxif0q%2Fmobile%2Fm%2Fl%2Fo%2F-original-imagmg6gzjf7gggt.jpeg%3Fq%3D90%26crop%3Dfalse&imgrefurl=https%3A%2F%2Fwww.flipkart.com%2Fsamsung-galaxy-s23-ultra-5g-phantom-black-256-gb%2Fp%2Fitm15952643ba06d%3Fpid%3DMOBGMFFX6E6SGYWC%26lid%3DLSTMOBGMFFX6E6SGYWCF0WEXV%26marketplace%3DFLIPKART&docid=UGjw8WdaCknMiM&tbnid=HDCavfkmGnZk3M&vet=12ahUKEwij_tPDzY-IAxVOwzgGHR2PCFgQM3oECBgQAA..i&w=850&h=850&hcb=2&ved=2ahUKEwij_tPDzY-IAxVOwzgGHR2PCFgQM3oECBgQAA",
      }
   ]

   //http://localhost:3000/api/products?search=phone1
   if(req.query.search){
      const filterProducts = products.filter((product) => product.name.includes(req.query.search));
      res.send(filterProducts);
      return; //If don't return after sending response it will exit from the method
   }

   setTimeout(() => {
      res.send(products);
   },3000);
})

const port = process.env.PORT || 3000;

app.listen(port,() => {
   console.log(`Server running on port ${port}`);
});