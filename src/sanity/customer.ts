

export default {
    name: 'customer',
    title: 'Customer',
    type: 'document',
    fields: [
      {
        name:"id",
        type:"string",
        title:"Cutomer ID"
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'phone',
        title: 'Phone',
        type: 'string',
      },
      {
        name: 'addressLine1',
        title: 'Address Line 1',
        type: 'string',
      },
      {
        name: 'cityLocality',
        title: 'City',
        type: 'string',
      },
    ],
  };
  