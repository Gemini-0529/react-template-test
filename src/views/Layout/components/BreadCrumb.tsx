import { useMemo } from 'react'
import { Breadcrumb } from 'antd'

export default function BreadCrumb() {
  const breadItems = useMemo(() => ([
    {title: 'Home'},
    {title: 'List'},
    {title: 'Appa'},
  ]),[])
  return <Breadcrumb style={{ margin: '16px 0' }} items={breadItems}/>
}
