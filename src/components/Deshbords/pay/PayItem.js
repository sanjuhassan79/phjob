
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
 import StripeCheckout from 'react-stripe-checkout';

const PayItem = (props) => {
    const KEY= "pk_test_51K2s0dH7NiSqShFxTlF9O8EZ8lEaOcVs0eimispERccS3aSjrlRrKzinChJKftSUeeHPP8ymUoB0JcPO3YWdzUON00HfWnwPiK";
  const {description,image,title,price}=props.product
  const [clientSecret, setClientSecret] = React.useState('');




  React.useEffect(() => {
    fetch('https://stark-caverns-04377.herokuapp.com/create-payment-intent', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(clientSecret)
    })
        .then(res => res.json())
        .then(data => setClientSecret(data.clientSecret));
}, [clientSecret]);


console.log(clientSecret);




    return (
        <Card sx={{ maxWidth: 308,my:3}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">$
              {price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      <CardActions>

      <StripeCheckout
              name="Shop~BD"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_cYIDnkuja7AuabGK_nlVsdD-97MnyZZAnw&usqp=CAU"
              billingAddress
              shippingAddress
              description={`Your total is $${price}`}
              setClientSecret={price * 100}
              
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
        </CardActions> 
      </Card>
    );
};

export default PayItem;