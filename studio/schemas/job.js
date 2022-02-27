export default {
  name: 'job',
  title: 'Job',
  type: 'document',
  fields: [
    {
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: {type: 'client'},
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date and Start Time',
      type: 'datetime',
    },
    {
      name: 'Details',
      title: 'details',
      type: 'text',
    },   
    {
      name: 'guysAmount',
      title: 'How many guys?',
      type: 'number',
    },
    {
      name: 'guys',
      title: 'Guys',
      type: 'array',
      of: [{type: 'reference', to: {type: 'guys'}}],
    },
    {      
      name: 'status',
      title: 'Status',
      type: 'string',      
      options: {
        list: [
          {title: 'open', value: 'open'},
          {title: 'progress', value: 'progress'},
          {title: 'done', value: 'done'}
        ]        
      },
      
    },
    
    
  ],

  preview: {
    select: {
      title: 'title',
      address: 'address',
      media: 'client.image',
    },
    prepare(selection) {
      const {address} = selection

      return Object.assign({}, selection, {
        subtitle: address && `${address}`
      })
    },
  },
}
