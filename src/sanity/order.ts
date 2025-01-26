
export default {
    name: 'orders',
    title: 'Orders',
    type: 'document',
    fields: [
      {
        name: 'number',
        title: 'Order Number',
        type: 'string',
      },
      {
        name: 'customerID',
        title: 'Customer ID',
        type: 'string',
      },
      {
        name: 'shipmentID',
        title: 'Shipment ID',
        type: 'string',
      },
      {
        name: 'customerName',
        title: 'Customer Name',
        type: 'string',
      },
      {
        name: 'products',
        title: 'Products',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'product',
                type: 'reference',
                title: 'Product bought',
                to: [{ type: 'products' }],
              },
              {
                name: 'quantity',
                type: 'number',
                title: 'Quantity purchased',
              },
            ],
            preview: {
              select: {
                title: 'product.title', 
                quantity: 'quantity', 
                image: 'product.image', 
                price: 'product.price', 
              },
              prepare(selection: { title?: string; quantity?: number; price?: number; image?:string }) {
                const { title, quantity, price, image } = selection;
  
                return {
                  title: `${title} x ${quantity}`,
                  subtitle: price && quantity ? `Total: $${price * quantity}` : 'Price not available',
                  media: image,
                };
              },
            },
          },
        ],
      },
    ],
  };