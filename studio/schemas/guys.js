export default {
  name: 'guys',
  title: 'Guys',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'number',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'cscs',
      title: 'CSCS Card',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    
  ],
  preview: {
    select: {
      title: 'name',
      media: 'profileImage',
      cscs: 'cscs'
    },
    prepare(selection) {
      const {cscs} = selection

      function hasCscs(cscs){
        if(cscs){
          return "cscs"
        }else{
          return "without cscs"
        }
      }

      return Object.assign({}, selection, {
        subtitle: `${hasCscs(cscs)}`
      })
    },
  },
}
