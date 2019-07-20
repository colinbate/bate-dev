import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import MdPerson from 'react-icons/lib/md/person'
import MdCreate from 'react-icons/lib/md/create'
import MdCode from 'react-icons/lib/md/code'
import FaTags from 'react-icons/lib/fa/tags'

const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'siteSettings', 'project'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Things I Learned')
        .icon(MdCreate)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Things I Learned')),
      S.listItem()
        .title('Projects')
        .icon(MdCode)
        .schemaType('project')
        .child(S.documentTypeList('project').title('Projects')),
      S.listItem()
        .title('Authors')
        .icon(MdPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
        .title('Categories')
        .icon(FaTags)
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
