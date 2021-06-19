import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    return (
        <div>
            <Card className="my-3 p-3 rounded  animate__animated animate__fadeInUp">
      <Link >
        <Card.Img src={product.productImage} variant="top" />
      </Link>

      <Card.Body>
        <Link  >
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
{/* 
        <Card.Text as="div">
          <Rating value={product.averageRating} text={`${product.Reviews ? product.Reviews.length : 0} reviews`} />
        </Card.Text> */}

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
        </div>
    )
}

export default Product
