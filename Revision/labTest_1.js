const data = {
    "invoices": [
    {
    "id": 1,
    "customer": "Ali",
    "product_type": "Product1",
    "quantity": 3,
    "sales": 30,
    "date": "2023-01-01"
    },
    {
    "id": 2,
    "customer": "Bob",
    "product_type": "Product1",
    "quantity": 2,
    "sales": 20,
    "date": "2023-01-05"
    },
    {
    "id": 3,
    "customer": "Ali",
    "product_type": "Product2",
    "quantity": 13,
    "sales": 260,
    "date": "2023-02-10"
    },
    {
    "id": 4,
    "customer": "Chen",
    "product_type": "Product1",
    "quantity": 40,
    "sales": 400,
    "date": "2023-02-15"
    }
    ]
   }

// Find the invoice matches a condition: "product_type = Product1"
const product1 = data.invoices.filter(invoice => invoice.product_type === 'Product1');
console.log(product1);

//Sort invoice by highest sales in descending order
const salesDescending = data.invoices.sort(function (x , y){
    return y.sales - x.sales;
});
console.log(salesDescending);

//Create new grade by classifying customers into three groups based on their sales spending
const salesSpending = data.invoices.map(sales => {
    let grade;
    if(sales.sales > 300){
        grade = "Class A";
    } else if(sales.sales > 200 && sales.sales <= 300){
        grade = "Class B";
    } else if(sales.sales <= 200){
        grade = "Class C";
    } else{
        grade = "unknown";
    }
    return {
        ...sales,
        grade
    }
});
console.log(salesSpending);

//Sort product_type by total quantity sold in desceding order
const quantityDescending = data.invoices.sort(function (x , y){
    return y.quantity - x.quantity;
});
console.log(quantityDescending);

//Find the mean of sales for each month
const sumProductSales = data.invoices.reduce((acc, productSales) => {
    const month = productSales.date.split('-')[1];
    if(!acc[month]){
        acc[month] = { sum: 0, count: 0 };
    }
    acc[month].sum += productSales.sales;
    acc[month].count += 1;
    return acc;
}, {});

const meanProductSales = {};
Object.keys(sumProductSales).forEach(month => {
    meanProductSales[month] = sumProductSales[month].sum / sumProductSales[month].count;
});
console.log(meanProductSales);
