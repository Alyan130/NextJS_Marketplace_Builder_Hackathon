export default {
    name: 'shipment',
    title: 'Shipment',
    type: 'document',
    fields: [
      {
        name: 'shipmentId',
        title: 'Shipment ID',
        type: 'string',
      },
      {
        name: 'orderNumber',
        title: 'order Number',
        type: 'string',
      },
      {
        name: 'shipDate',
        title: 'Ship Date',
        type: 'date',
      },
      {
        name: 'carrierId',
        title: 'Carrier ID',
        type: 'string',
      },
      {
        name: 'carrierCode',
        title: 'Carrier Code',
        type: 'string',
      },
      {
        name: 'trackingNumber',
        title: 'Tracking Number',
        type: 'string',
      },
      {
        name: 'trackingStatus',
        title: 'Tracking Status',
        type: 'string',
      },
      {
        name: 'labelId',
        title: 'Label ID',
        type: 'string',
      },
    ],
  };